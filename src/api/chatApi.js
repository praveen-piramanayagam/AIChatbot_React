import axios from "axios";

const API_URL = "https://aichatbot-server.onrender.com/api/chatbot";

export const sendMessage = async (message, token) => {
  const response = await axios.post(
    `${API_URL}/chat`,
    { message },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const getChatHistory = async (token) => {
  const response = await axios.get(`${API_URL}/history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.chatHistory;
};
