import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, price, rating, reviews, image, isPrime, id } = product;
  const { addToCart } = useCart();

  // Generate star array
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-4 h-4 ${
          i < Math.round(rating) ? "text-yellow-400" : "text-gray-600"
        }`}
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    ));

  return (
    <div className="relative flex flex-col m-2 bg-nebula-800 z-30 p-4 rounded-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-glow/10 transition-all duration-300 group ring-1 ring-white/5">
      <Link
        to={`/product/${id}`}
        className="relative h-48 w-full mb-2 overflow-hidden rounded-sm bg-white p-2 block"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
        />
      </Link>

      <div className="flex-1 flex flex-col gap-1">
        <Link to={`/product/${id}`}>
          <h4 className="text-gray-100 font-medium line-clamp-2 text-sm group-hover:text-accent-glow transition-colors cursor-pointer">
            {title}
          </h4>
        </Link>

        <div className="flex items-center gap-1 mb-1">
          <div className="flex">{stars}</div>
          <span className="text-xs text-blue-400 hover:underline cursor-pointer">
            {reviews}
          </span>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-1 my-1">
            <span className="text-xs align-top font-bold text-gray-400">$</span>
            <span className="text-2xl font-bold text-white">
              {Math.floor(price)}
            </span>
            <span className="text-xs align-top font-bold text-gray-400">
              {(price % 1).toFixed(2).substring(2)}
            </span>
          </div>

          {isPrime && (
            <div className="flex items-center gap-1 mb-2">
              <span className="text-cyan-400 font-bold text-xs italic">
                prime
              </span>
              <span className="text-gray-400 text-xs">Two-Day</span>
            </div>
          )}

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-nebula-900 font-bold py-1.5 rounded-sm text-sm mt-1 transition-colors active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
