import React from "react";

const stats = [
  { label: "Revenue", value: "$48,240", trend: "+12.5%" },
  { label: "Expenses", value: "$18,920", trend: "-3.2%" },
  { label: "Profit", value: "$29,320", trend: "+18.1%" },
];

const FinancialOverview: React.FC = () => {

  if(Math.random() > 0.5) throw new Error('Math.random() return greater than 0.5')

  return (
    <section className="panel">
      <div className="panel-header">
        <p className="eyebrow">Financial Overview</p>
        <h2>Business snapshot</h2>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.trend} this month</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinancialOverview;
