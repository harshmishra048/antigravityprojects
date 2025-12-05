import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { subtotal, itemCount, clearCart } = useCart();

  if (itemCount === 0) {
    return (
      <div className="text-center p-10 text-white">
        Your cart is empty.{" "}
        <Link to="/" className="text-accent-glow">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold border-b border-gray-700 pb-2">
            1. Shipping Address
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                className="w-full bg-nebula-800 border border-gray-600 rounded p-2"
                defaultValue="User Name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400">Address</label>
              <input
                type="text"
                className="w-full bg-nebula-800 border border-gray-600 rounded p-2"
                defaultValue="1234 Space Station Alpha"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400">City</label>
                <input
                  type="text"
                  className="w-full bg-nebula-800 border border-gray-600 rounded p-2"
                  defaultValue="Neo-Tokyo"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-full bg-nebula-800 border border-gray-600 rounded p-2"
                  defaultValue="99999"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="bg-nebula-800 p-6 rounded-sm h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Items ({itemCount}):</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping & Handling:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mb-6 pt-4 border-t border-gray-600 text-xl font-bold text-accent-glow">
            <span>Order Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <button
            onClick={() => {
              alert("Order Placed Successfully!");
              clearCart();
            }}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-nebula-900 font-bold py-3 rounded-sm shadow-lg transition-transform hover:scale-105"
          >
            Place Order
          </button>
          <p className="text-xs text-gray-400 mt-4 text-center">
            By placing your order, you agree to Nebula Store's privacy notice
            and conditions of use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
