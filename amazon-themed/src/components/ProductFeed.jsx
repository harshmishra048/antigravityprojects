import React from "react";
import ProductCard from "./ProductCard";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto max-w-[1500px]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {/* Banner Ad Placement simulation */}
      <div className="md:col-span-2 lg:col-span-full">
        <div className="w-full h-32 bg-gray-700/30 rounded-sm flex items-center justify-center border border-dashed border-gray-600 my-4">
          <span className="text-gray-500">Ad Space / Promo Banner</span>
        </div>
      </div>

      {/* More products... repeated for demo to fill grid */}
      {products.map((product) => (
        <ProductCard
          key={`dup-${product.id}`}
          product={{ ...product, id: `dup-${product.id}` }}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
