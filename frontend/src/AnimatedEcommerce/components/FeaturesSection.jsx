import { useRef } from "react";
import { useScrollAnimation, useStaggerAnimation } from "../hooks/useGSAP";

const FEATURES = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "Get your products delivered within 2-3 business days",
    icon: "🚚",
  },
  {
    id: 2,
    title: "100% Authentic",
    description: "All products are 100% genuine and original",
    icon: "✅",
  },
  {
    id: 3,
    title: "Secure Payment",
    description: "Your payment is safe with our encrypted checkout",
    icon: "🔒",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our customer support team is always ready to help",
    icon: "💬",
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useScrollAnimation(sectionRef);
  useStaggerAnimation(containerRef, ".feature-card");

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Experience the best in quality and service
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="feature-card bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
