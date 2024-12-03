import React from 'react';
import SkillChart from './skillChart';

const SkillList = () => {
  const skills = [
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 80 },
    { skill: 'JavaScript', percentage: 85 },
    { skill: 'React', percentage: 75 },
    { skill: 'Node.js', percentage: 70 },
    { skill: 'MongoDB', percentage: 65 },
  ];

  return (
    <div className="skill-list">
      <h2>Mes Compétences</h2>
      {skills.map((skill, index) => (
        <SkillChart key={index} skill={skill.skill} percentage={skill.percentage} />
      ))}
    </div>
  );
};

export default SkillList;
