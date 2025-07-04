import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Data Visualization",
      description:
        "Create stunning charts and graphs that tell your data's story",
      price: "Starting at $299",
      features: [
        "Interactive Dashboards",
        "Custom Charts",
        "Real-time Updates",
        "Export Options",
      ],
    },
    {
      title: "Business Intelligence",
      description:
        "Comprehensive analysis and reporting for strategic decisions",
      price: "Starting at $599",
      features: [
        "KPI Tracking",
        "Trend Analysis",
        "Forecasting",
        "Executive Reports",
      ],
      popular: true,
    },
    {
      title: "Data Migration",
      description: "Seamlessly transfer and transform your existing data",
      price: "Starting at $399",
      features: [
        "Data Cleaning",
        "Format Conversion",
        "Quality Assurance",
        "Support & Training",
      ],
    },
  ];
  return (
    <div>
      {" "}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible solutions designed to grow with your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 transition-all duration-300 hover:shadow-xl ${
                  service.popular
                    ? "bg-blue-600 text-white shadow-2xl scale-105 hover:scale-110"
                    : "bg-white shadow-lg hover:-translate-y-2"
                }`}
              >
                {service.popular && (
                  <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block animate-pulse">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    service.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mb-6 ${
                    service.popular ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
                <div
                  className={`text-3xl font-bold mb-6 ${
                    service.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className={`h-5 w-5 mr-3 ${
                          service.popular ? "text-green-300" : "text-green-500"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={
                          service.popular ? "text-blue-100" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    service.popular
                      ? "bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
