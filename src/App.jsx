import React, { useState, useEffect } from "react"; // Make sure useEffect is imported
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { getToken } from "./utils/authHelper";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chatbot from "./pages/Chatbot";

function App() {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuthToken(token);
    }
  }, []); // Empty dependency array, runs only on initial render

  return (
    <Router>
      <div>
<h1 className="text-center text-4xl font-semibold my-6 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
  ChatBot with Gemini AI
</h1>
        <Routes>
          <Route
            path="/"
            element={!authToken ? <Login setAuthToken={setAuthToken} /> : <Chatbot setAuthToken={setAuthToken} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/history"
            element={authToken ? <Chatbot setAuthToken={setAuthToken} /> : <Login setAuthToken={setAuthToken} />}
          />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
      </div>
    </Router>
  );
}

export default App;
