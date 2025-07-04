import React from "react";

const QuickActions = () => {
  return (
    <>
      {" "}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Quick Actions
        </h3>
        <div className="space-y-3">
          <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="12"
                  y1="5"
                  x2="12"
                  y2="19"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
                <line
                  x1="5"
                  y1="12"
                  x2="19"
                  y2="12"
                  stroke="#16a34a"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Create New Report</span>
          </button>

          <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="12"
                  cy="5"
                  rx="9"
                  ry="3"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <path
                  d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <path
                  d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900">
              Connect Data Source
            </span>
          </button>

          <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                />
                <line
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="6"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                />
                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="6"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                />
                <line
                  x1="3"
                  y1="10"
                  x2="21"
                  y2="10"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Schedule Report</span>
          </button>

          <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#f97316"
                  strokeWidth="2"
                />
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                  stroke="#f97316"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Settings</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default QuickActions;
