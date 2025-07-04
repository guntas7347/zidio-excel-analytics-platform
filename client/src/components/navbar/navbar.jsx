import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path d="M3 9h18M9 21V9" stroke="white" strokeWidth="2" />
                    <path
                      d="M7 6v3M11 6v3M15 6v3"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  Excel Analytics
                </h1>
              </div>

              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-green-600 font-medium">
                  Dashboard
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Reports
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Analytics
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Data Sources
                </a>
              </nav>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.73 21a2 2 0 0 1-3.46 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="#16a34a"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">john@company.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
