import { useState } from "react";
import { registerUser } from "../api/authApi";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await registerUser(username, password);
      console.log("Registration successful:", response);
      alert("User registered successfully! You can now log in.");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-2">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="border p-2" required />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Register</button>
      </form>
      <div className="mt-4">
        <p>Already have an account? <Link to="/" className="text-blue-500">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;
