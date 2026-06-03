import { useRef } from "react";
import { useStaggerAnimation } from "../hooks/useGSAP";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ products, onAddToCart, selectedCategory }) => {
  const containerRef = useRef(null);
  useStaggerAnimation(containerRef, ".product-card");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8"
    >
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
