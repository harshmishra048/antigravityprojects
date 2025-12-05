import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persisted user
    const storedUser = localStorage.getItem("nebula-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock Backend Call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simple mock validation
        if (email === "user@nebula.com" && password === "password") {
          const userData = { id: 1, name: "Nebula User", email };
          setUser(userData);
          localStorage.setItem("nebula-user", JSON.stringify(userData));
          toast.success("Welcome back to the Nebula.");
          resolve(userData);
        } else {
          toast.error("Invalid credentials. Try user@nebula.com / password");
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  const signup = async (name, email, password) => {
    // Mock Backend Call
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = { id: Date.now(), name, email };
        setUser(userData);
        localStorage.setItem("nebula-user", JSON.stringify(userData));
        toast.success("Account created successfully.");
        resolve(userData);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("nebula-user");
    toast.success("Logged out successfully.");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
