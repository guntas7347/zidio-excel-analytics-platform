import React from "react";
import Navbar from "../../../components/navbar/navbar";
import StatsCards from "../../../components/cards/stats-cards/stats-cards";
import RevenueChart from "../../../components/charts/revenue-chart/revenue-chart";
import TopPerformingReport from "./components/top-performing-report/tpr";
import RecentActivity from "./components/recent-activity/recent-activity";
import QuickActions from "./components/quick-actions/quick-actions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, John!
          </h2>
          <p className="text-gray-600">
            Here's what's happening with your data today.
          </p>
        </div>

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <RevenueChart />
          <TopPerformingReport />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <RecentActivity />
          <QuickActions />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
