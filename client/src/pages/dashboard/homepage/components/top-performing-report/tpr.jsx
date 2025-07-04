import React from "react";

const TopPerformingReport = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Top Performing Reports
        </h3>
        <div className="space-y-4">
          {[
            {
              name: "Sales Performance Q4",
              views: "2,847",
              change: "+12%",
              color: "green",
            },
            {
              name: "Customer Acquisition",
              views: "1,923",
              change: "+8%",
              color: "green",
            },
            {
              name: "Marketing ROI Analysis",
              views: "1,654",
              change: "-3%",
              color: "red",
            },
            {
              name: "Product Usage Metrics",
              views: "1,432",
              change: "+15%",
              color: "green",
            },
            {
              name: "Financial Overview",
              views: "1,287",
              change: "+5%",
              color: "green",
            },
          ].map((report, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="14,2 14,8 20,8"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="16"
                      y1="13"
                      x2="8"
                      y2="13"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="16"
                      y1="17"
                      x2="8"
                      y2="17"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="10,9 9,9 8,9"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{report.name}</p>
                  <p className="text-sm text-gray-500">{report.views} views</p>
                </div>
              </div>
              <span
                className={`text-sm font-medium ${
                  report.color === "green" ? "text-green-600" : "text-red-600"
                }`}
              >
                {report.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopPerformingReport;
