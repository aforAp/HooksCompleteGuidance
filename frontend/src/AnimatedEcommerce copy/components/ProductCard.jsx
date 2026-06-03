import { useRef } from "react";
import { useHoverAnimation } from "../hooks/useGSAP";

export const ProductCard = ({ product, onAddToCart }) => {
  const cardRef = useRef(null);
  const { handleMouseEnter, handleMouseLeave } = useHoverAnimation(cardRef);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <div
      ref={cardRef}
      className="product-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden bg-gray-100 h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity" />
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mt-3">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="text-xs text-gray-600 ml-2">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-lg font-bold text-gray-900">${product.price}</p>
            {product.originalPrice > product.price && (
              <p className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </p>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
