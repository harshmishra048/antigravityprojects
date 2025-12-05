import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-nebula-900 flex items-center justify-center p-4">
      <div className="bg-nebula-800 p-8 rounded border border-gray-700 w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-accent-glow">
            NEBULA
          </span>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Sign-In</h2>
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-2 text-sm rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full bg-nebula-900 border border-gray-600 rounded p-2 text-white focus:border-accent-glow outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full bg-nebula-900 border border-gray-600 rounded p-2 text-white focus:border-accent-glow outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-400 text-xs mt-4">
          By continuing, you agree to Nebula's Conditions of Use and Privacy
          Notice.
        </p>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-2">New to Nebula?</p>
          <Link to="/signup">
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded border border-gray-500 transition-colors">
              Create your Nebula account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
