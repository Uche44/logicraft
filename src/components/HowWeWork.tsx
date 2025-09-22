import React from "react";

const steps = [
  {
    number: "01",
    title: "Order Placement",
    description:
      "Customers submit orders online or through phone, specifying pickup, delivery details, and cargo type, initiating the process.",
  },
  {
    number: "02",
    title: "Route Planning",
    description:
      "Utilizing advanced software, optimal routes are determined considering factors like distance, traffic, and delivery priorities.",
  },
  {
    number: "03",
    title: "Transportation",
    description:
      "Goods are loaded onto appropriate vehicles and dispatched, ensuring proper handling, safety, and adherence to delivery schedules.",
  },
  {
    number: "04",
    title: "Tracking and Monitoring",
    description:
      "Real-time tracking systems monitor shipments, providing updates to customers and enabling proactive management of any issues.",
  },
  {
    number: "05",
    title: "Delivery and Confirmation",
    description:
      "Upon arrival, goods are unloaded, verified against order details, and confirmation of successful delivery is obtained from recipients.",
  },
];

export default function ProcessFlow() {
  return (
    <section
      className="w-full bg-gray-50 py-16 md:mt-40 z-500"
      id="solutions"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* SVG Curved Line with Dots */}
        <svg
          className="absolute top-1/3 left-0 w-full h-48 hidden md:block"
          viewBox="0 0 1200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 150 C300 50, 900 250, 1200 100"
            stroke="#d1d5db"
            strokeWidth="2"
            strokeDasharray="6 8"
          />
        </svg>

        {/* Steps Positioned Along Curve */}
        <div className="z-600 relative gap-x-4 flex flex-col md:flex-row md:justify-between md:items-center">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative md:w-1/5 text-center md:text-left mb-12 md:mb-0 ${
                i % 2 === 0 ? "md:translate-y-[-40px]" : "md:translate-y-[40px]"
              }`}
            >
              <span className="text-4xl font-bold text-gray-300 block mb-2">
                {step.number}
              </span>
              <h3 className="font-semibold text-gray-800 mb-1">
                {step.title}:
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
