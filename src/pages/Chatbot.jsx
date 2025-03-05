import { useState, useEffect } from "react";
import { sendMessage, getChatHistory } from "../api/chatApi";
import { getToken, clearToken } from "../utils/authHelper";
import { useNavigate } from "react-router-dom";


const Chatbot = ({ setAuthToken }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();  // Initialize navigate hook

  const handleLogout = () => {
    clearToken();  // Remove token from local storage
    setAuthToken(null);  // Clear auth state
    navigate("/");  // Redirect to home page
  };  

  useEffect(() => {
    const fetchHistory = async () => {
      const token = getToken();  // Get the token from localStorage
      if (!token) return;
      try {
        const chatHistory = await getChatHistory(token);
        setMessages(chatHistory || []);
      } catch (error) {
        console.error("Error fetching chat history:", error.response?.data?.message);
      }
    };
    fetchHistory();
  }, []);

  const sendMessageHandler = async () => {
    if (!input.trim()) return;
    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);

    try {
      const response = await sendMessage(input, getToken());
      setMessages([...messages, newMessage, { role: "bot", content: response.botResponse }]);
    } catch (error) {
      console.error("Chatbot error:", error.response?.data?.message);
    }

    setInput("");
  };

  return (

    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Ask me anything!  </h2>

      {/* Chat Window */}
      <div className="bg-white w-full max-w-4xl h-[60vh] p-6 rounded-lg shadow-lg overflow-y-auto">
        <div className="flex flex-col gap-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[75%] p-4 rounded-lg text-white ${msg.role === "user" ? "bg-blue-500" : "bg-gray-700"}`}
              >
                <strong>{msg.role === "user" ? "You: " : "Bot: "}</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: msg.content }} />          
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input Area */}
      <div className="flex items-center gap-4 mt-6 w-full max-w-4xl">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessageHandler}
          className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>

      {/* Logout Button */}
      <button onClick={handleLogout}
        className="mt-6 bg-red-500 text-white p-4 rounded-lg max-w-m hover:bg-red-600 focus:outline-none"
      >
        Logout
      </button>
    </div>

  );
};

export default Chatbot;
