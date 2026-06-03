import { useState } from "react";
import { useSmoothScroll } from "./hooks/useGSAP";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProductsSection } from "./components/ProductsSection";
import { CustomerSection } from "./components/CustomerSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { PRODUCTS, CUSTOMERS } from "./data/products";

export const AnimatedEcommerce = () => {
  const [cart, setCart] = useState([]);
  useSmoothScroll();

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="w-full overflow-hidden">
      <Navigation cartCount={cart.length} />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection products={PRODUCTS} onAddToCart={handleAddToCart} />
      <CustomerSection customers={CUSTOMERS} />
      <Footer />
    </div>
  );
};

export default AnimatedEcommerce;
