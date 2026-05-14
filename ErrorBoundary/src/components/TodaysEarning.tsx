import React from "react";

const TodaysEarning: React.FC = () => {
  return (
    <section className="panel earning-panel">
      <div>
        <p className="eyebrow">Today's Earning</p>
        <h2>$2,845.50</h2>
        <p className="muted">You are 28% ahead of yesterday's pace.</p>
      </div>

      <div className="earning-meter" aria-label="Today earning progress">
        <span />
      </div>
    </section>
  );
};

export default TodaysEarning;
