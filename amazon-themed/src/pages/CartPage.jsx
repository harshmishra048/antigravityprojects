import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, itemCount } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center bg-nebula-800 m-4 rounded-sm">
        <h2 className="text-2xl font-bold text-white mb-4">
          Your Nebula Cart is empty
        </h2>
        <Link to="/" className="text-accent-glow hover:underline">
          Shop today's deals
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-6">
      {/* Cart Items */}
      <div className="flex-1 bg-nebula-800 p-6 rounded-sm">
        <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-4 mb-4">
          Shopping Cart
        </h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 border-b border-gray-700 py-4 last:border-0"
          >
            <div className="w-full sm:w-48 h-48 bg-white p-2 rounded-sm shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-accent-glow line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-white block sm:hidden">
                  ${item.price}
                </p>
              </div>
              <p className="text-green-400 text-sm font-bold mb-2">In Stock</p>
              {item.isPrime && (
                <div className="text-cyan-400 text-xs italic font-bold mb-2">
                  prime
                </div>
              )}

              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center border border-gray-600 rounded-sm bg-nebula-900">
                  <span className="px-2 text-gray-400">Qty:</span>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-12 bg-transparent text-white p-1 outline-none text-center font-bold"
                  />
                </div>
                <span className="text-gray-400">|</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-blue-400 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="text-right hidden sm:block w-32">
              <p className="text-xl font-bold text-white">${item.price}</p>
            </div>
          </div>
        ))}

        <div className="text-right mt-4">
          <p className="text-xl text-white">
            Subtotal ({itemCount} items):{" "}
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </p>
        </div>
      </div>

      {/* Checkout Sidebar */}
      <div className="w-full lg:w-80 h-fit bg-nebula-800 p-6 rounded-sm sticky top-20">
        <p className="text-lg text-white mb-4">
          Subtotal ({itemCount} items):{" "}
          <span className="font-bold">${subtotal.toFixed(2)}</span>
        </p>
        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" className="accent-accent-glow w-4 h-4" />
          <span className="text-sm text-gray-300">
            This order contains a gift
          </span>
        </div>
        <Link to="/checkout">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-nebula-900 font-bold py-2 rounded-sm shadow-md transition-colors">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
