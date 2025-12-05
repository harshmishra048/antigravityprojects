import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { itemCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="bg-nebula-900 border-b border-nebula-800 sticky top-0 z-50">
      <div className="max-w-[1500px] mx-auto flex items-center h-16 px-4 gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:ring-1 ring-white p-1 rounded-sm cursor-pointer text-decoration-none"
        >
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-accent-glow">
            NEBULA
          </span>
          <span className="text-white text-xs mt-1 ml-1 font-bold">prime</span>
        </Link>

        {/* Deliver To */}
        <div className="hidden md:flex flex-col text-sm text-white hover:ring-1 ring-white p-2 rounded-sm cursor-pointer min-w-[100px]">
          <span className="text-gray-300 text-xs">Deliver to</span>
          <span className="font-bold -mt-1 truncate">
            {user ? user.name : "Neo-Tokyo 2..."}
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 flex h-10 rounded-md overflow-hidden focus-within:ring-2 ring-accent-glow">
          <select className="bg-nebula-800 text-gray-300 text-xs px-2 border-r border-gray-600 outline-none cursor-pointer hover:bg-nebula-700 hover:text-white transition-colors">
            <option>All</option>
            <option>Electronics</option>
            <option>Cyberware</option>
          </select>
          <input
            type="text"
            placeholder="Search Nebula Store..."
            className="flex-1 px-3 text-nebula-900 outline-none placeholder-gray-500"
          />
          <button className="bg-accent-glow hover:bg-accent-hover text-white px-5 flex items-center justify-center transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 text-white">
          {/* Lang */}
          <div className="hidden lg:flex items-center p-2 hover:ring-1 ring-white rounded-sm cursor-pointer font-bold gap-1">
            <span>EN</span>
          </div>

          {/* Account */}
          <Link
            to={user ? "#" : "/login"}
            className="hidden sm:flex flex-col text-sm p-2 hover:ring-1 ring-white rounded-sm cursor-pointer leading-tight text-white no-underline"
          >
            <span className="text-xs">
              Hello, {user ? user.name.split(" ")[0] : "Sign In"}
            </span>
            <span className="font-bold">Account & Lists</span>
          </Link>

          {/* Orders - or logout if logged in */}
          <div
            className="hidden sm:flex flex-col text-sm p-2 hover:ring-1 ring-white rounded-sm cursor-pointer leading-tight"
            onClick={user ? logout : null}
          >
            <span className="text-xs">{user ? "Sign" : "Returns"}</span>
            <span className="font-bold">{user ? "Out" : "& Orders"}</span>
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-end p-2 hover:ring-1 ring-white rounded-sm cursor-pointer relative text-white"
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-accent-glow text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            </div>
            <span className="font-bold hidden md:block">Cart</span>
          </Link>
        </div>
      </div>

      {/* Sub-nav */}
      <div className="bg-nebula-800 text-white text-sm px-4 py-1.5 flex items-center gap-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 font-bold cursor-pointer hover:ring-1 ring-white px-2 py-1 rounded-sm whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          All
        </div>
        {[
          "Today's Deals",
          "Customer Service",
          "Registry",
          "Gift Cards",
          "Sell",
        ].map((item) => (
          <span
            key={item}
            className="cursor-pointer hover:ring-1 ring-white px-2 py-1 rounded-sm whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
