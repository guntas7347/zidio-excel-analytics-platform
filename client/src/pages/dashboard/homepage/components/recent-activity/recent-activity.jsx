import React from "react";

const RecentActivity = () => {
  return (
    <>
      {" "}
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[
            {
              action: "New report generated",
              item: "Q4 Sales Analysis",
              time: "2 minutes ago",
              icon: "file",
            },
            {
              action: "Data source connected",
              item: "Shopify Store",
              time: "1 hour ago",
              icon: "database",
            },
            {
              action: "Dashboard shared",
              item: "Marketing Overview",
              time: "3 hours ago",
              icon: "share",
            },
            {
              action: "Alert triggered",
              item: "Low conversion rate",
              time: "5 hours ago",
              icon: "alert",
            },
            {
              action: "Report exported",
              item: "Customer Insights",
              time: "1 day ago",
              icon: "download",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                {activity.icon === "file" && (
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
                    />
                    <polyline
                      points="14,2 14,8 20,8"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {activity.icon === "database" && (
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
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <path
                      d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {activity.icon === "share" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18"
                      cy="5"
                      r="3"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <circle
                      cx="6"
                      cy="12"
                      r="3"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <circle
                      cx="18"
                      cy="19"
                      r="3"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="8.59"
                      y1="13.51"
                      x2="15.42"
                      y2="17.49"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="15.41"
                      y1="6.51"
                      x2="8.59"
                      y2="10.49"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {activity.icon === "alert" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="9"
                      x2="12"
                      y2="13"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="17"
                      x2="12.01"
                      y2="17"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {activity.icon === "download" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <polyline
                      points="7,10 12,15 17,10"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="15"
                      x2="12"
                      y2="3"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {activity.action}
                </p>
                <p className="text-sm text-gray-500">{activity.item}</p>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentActivity;
