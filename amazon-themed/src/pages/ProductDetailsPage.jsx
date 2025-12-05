import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/mockData";
import { useCart } from "../context/CartContext";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => Number(p.id) === Number(id));

  if (!product) {
    return (
      <div className="text-white text-center p-10">
        Product not found.{" "}
        <Link to="/" className="text-cyan-400 underline">
          Go Back
        </Link>
      </div>
    );
  }

  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-5 h-5 ${
        i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-600"
      }`}
    >
      <path d="M12 2l2.39 6.94H21l-5.17 3.83L17.8 21 12 16.9 6.2 21l1.97-8.23L3 8.94h6.61L12 2z" />
    </svg>
  ));

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-8 text-white">
      {/* LEFT */}
      <div className="md:w-5/12 ml-6">
        <div className="bg-white rounded p-4 sticky top-24">
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-contain"
          />
        </div>
      </div>

      {/* MIDDLE */}
      <div className="md:w-5/12 flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <div className="flex items-center gap-2">
          <div className="flex">{stars}</div>
          <span className="text-blue-400 underline cursor-pointer">
            {product.reviews} ratings
          </span>
        </div>

        <div className="border-y border-gray-700 py-4">
          <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
          {product.isPrime && (
            <p className="text-cyan-400 text-sm font-bold italic">Prime</p>
          )}
        </div>

        <div className="space-y-2 text-gray-300">
          <h3 className="font-bold text-white">About this item</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Future-ready performance.</li>
            <li>Designed for the next-gen lifestyle.</li>
            <li>Seamless compatibility.</li>
            <li>Premium durability.</li>
          </ul>
        </div>
      </div>

      {/* RIGHT */}
      <div className="md:w-3/12">
        <div className="border border-gray-600 rounded p-4 bg-[#1a1f24] sticky top-24">
          <p className="text-2xl font-bold mb-2">${product.price}</p>
          <p className="text-gray-400 text-sm mb-4">
            Delivery by <span className="font-bold text-white">Tomorrow</span>
          </p>

          <p className="text-green-400 font-bold mb-4">In Stock</p>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded-full mb-3"
          >
            Add to Cart
          </button>

          <button className="w-full bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 rounded-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
