import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) return null;

  return (
    <nav className="flex justify-center my-8">
      <ul className="flex gap-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => {
                paginate(number);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-4 py-2 border rounded font-bold transition-colors ${
                currentPage === number
                  ? "bg-accent-glow text-white border-accent-glow"
                  : "bg-nebula-800 text-gray-300 border-gray-700 hover:bg-gray-700"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
