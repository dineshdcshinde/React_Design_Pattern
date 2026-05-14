import React from "react";
import FinancialOverview from "./FinancialOverview";
import TodaysEarning from "./TodaysEarning";
import ErrorBoundary from "./ErrorBoundary";

const Dashboard: React.FC = () => {
  return (
    <main className="dashboard">
      <div className="dashboard-hero">
        <p className="eyebrow">Dashboard</p>
        <h1 className="eyebrow">Welcome back</h1>
        <p className="muted">
          Track your daily earning and financial health in one clean view.
        </p>
      </div>

      <div className="dashboard-grid">
        <ErrorBoundary allowRetry >
          <FinancialOverview />
        </ErrorBoundary>
        <TodaysEarning />
      </div>
    </main>
  );
};

export default Dashboard;
