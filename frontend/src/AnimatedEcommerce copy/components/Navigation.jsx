import { useRef, useState } from "react";
import gsap from "gsap";

export const Navigation = ({ cartCount }) => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.to(".mobile-menu", { height: "auto", opacity: 1, duration: 0.3 });
    } else {
      gsap.to(".mobile-menu", { height: 0, opacity: 0, duration: 0.3 });
    }
  };

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl">🚀</div>
          <h1 className="text-2xl font-bold text-blue-600">Tech Paradise</h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Products
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Customers
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2">
              🛒 Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      <div className="mobile-menu hidden overflow-hidden">
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-gray-50">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Products
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Customers
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
