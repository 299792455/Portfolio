import React from 'react';

const SkillChart = ({ skill, percentage }) => {
  return (
    <div className="skill-chart">
      <h4>{skill}</h4>
      <div className="progress-bar">
        <div className="filled" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillChart;
