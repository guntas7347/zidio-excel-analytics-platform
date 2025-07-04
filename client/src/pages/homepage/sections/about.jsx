import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About ExcelPro Analytics
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, ExcelPro Analytics has been at the forefront of
                data transformation technology. We believe that every business,
                regardless of size, should have access to powerful analytics
                tools that were once available only to large corporations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of data scientists and software engineers work
                tirelessly to provide you with cutting-edge solutions that are
                both powerful and easy to use. We've helped over 50,000
                businesses worldwide unlock the true potential of their data.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50k+
                  </div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-600">Uptime</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">Support</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    150+
                  </div>
                  <div className="text-gray-600">Countries</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <svg
                      className="h-8 w-8 group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold">Our Mission</h3>
                      <p className="text-blue-100">
                        Democratizing data analytics for businesses worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <svg
                      className="h-8 w-8 group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold">Our Vision</h3>
                      <p className="text-blue-100">
                        A world where every decision is data-driven
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <svg
                      className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold">Our Values</h3>
                      <p className="text-blue-100">
                        Innovation, integrity, and customer success
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
