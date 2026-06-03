import { useState, useRef } from "react";
import { useScrollAnimation } from "../hooks/useGSAP";
import { ProductGrid } from "./ProductGrid";

const CATEGORIES = ["All", "Electronics", "Wearables", "Accessories"];

export const ProductsSection = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef(null);
  const filtersRef = useRef(null);

  useScrollAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600">
            Browse our collection of premium tech products
          </p>
        </div>

        <div
          ref={filtersRef}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ProductGrid
          products={products}
          onAddToCart={onAddToCart}
          selectedCategory={selectedCategory}
        />
      </div>
    </section>
  );
};
