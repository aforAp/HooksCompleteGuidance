import { useRef } from "react";
import { useScrollAnimation, useStaggerAnimation } from "../hooks/useGSAP";

export const CustomerSection = ({ customers }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useScrollAnimation(sectionRef);
  useStaggerAnimation(containerRef, ".customer-card");

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Valued Customers
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied customers who trust us
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="customer-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {customer.name}
                  </h3>
                  <p className="text-sm text-gray-600">{customer.email}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    customer.status === "VIP"
                      ? "bg-yellow-100 text-yellow-800"
                      : customer.status === "Premium"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {customer.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${customer.totalSpent}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Orders</p>
                  <p className="text-2xl font-bold text-green-600">
                    {customer.ordersCount}
                  </p>
                </div>
              </div>

              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-medium">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
