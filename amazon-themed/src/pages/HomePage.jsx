import React, { useState } from "react";
import Hero from "../components/Hero";
import ProductFeed from "../components/ProductFeed";
import Pagination from "../components/Pagination";
import { products } from "../data/mockData";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-nebula-900 pb-10">
      <Hero />

      {/* Overlay */}
      <div className="relative z-10 -mt-10 sm:-mt-20 md:-mt-32 px-4 space-y-4">
        <ProductFeed products={currentProducts} />

        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default HomePage;
