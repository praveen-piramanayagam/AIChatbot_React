import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { loginUser } from "../api/authApi";
import { setToken } from "../utils/authHelper";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

const Login = ({ setAuthToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      if (response.token) {
        setToken(response.token);
        // console.log(response);        
        setAuthToken(response.token);
        navigate("/chat"); // ✅ Redirect to Chatbot page after login
      } else {
        console.error("No token received:", response);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2" required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
      {/* Link to Register page */}
      <div className="mt-4">
        <p>Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
