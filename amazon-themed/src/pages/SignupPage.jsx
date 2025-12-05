import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      await signup(name, email, password);
      navigate("/");
    } catch (err) {
      setError("Failed to create an account.");
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

        <h2 className="text-2xl font-bold text-white mb-4">Create Account</h2>
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-2 text-sm rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 text-sm font-bold mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full bg-nebula-900 border border-gray-600 rounded p-2 text-white focus:border-accent-glow outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              className="w-full bg-nebula-900 border border-gray-600 rounded p-2 text-white focus:border-accent-glow outline-none placeholder-gray-600"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm font-bold mb-1">
              Re-enter Password
            </label>
            <input
              type="password"
              required
              className="w-full bg-nebula-900 border border-gray-600 rounded p-2 text-white focus:border-accent-glow outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded shadow-md transition-colors"
          >
            Continue
          </button>
        </form>

        <p className="text-gray-400 text-xs mt-4 border-b border-gray-700 pb-4 mb-4">
          By creating an account, you agree to Nebula's Conditions of Use and
          Privacy Notice.
        </p>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-accent-glow hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
