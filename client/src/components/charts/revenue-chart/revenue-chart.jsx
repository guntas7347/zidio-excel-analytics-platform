import React from "react";

const RevenueChart = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Revenue Overview
          </h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg">
              7D
            </button>
            <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">
              30D
            </button>
            <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">
              90D
            </button>
          </div>
        </div>
        <div className="h-64 flex items-end justify-between space-x-2">
          {[65, 45, 78, 52, 89, 67, 94, 73, 85, 91, 76, 88].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 bg-green-200 rounded-t-sm"
                style={{ height: `${height}%` }}
              >
                <div
                  className="w-full bg-green-500 rounded-t-sm"
                  style={{ height: "60%" }}
                ></div>
              </div>
            )
          )}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    </>
  );
};

export default RevenueChart;
