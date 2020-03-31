import React from 'react';

const Experience = ({ exp }) => {
  // {console.log("In Experience.js", exp.period.startDate)}

  return (
    <div id="expBlock">
      <h4><strong><a href={exp.link}>{exp.company}</a></strong></h4>
      <h5>Role: <em>{exp.role}</em></h5>
      <h6>{exp.period.startDate} - {exp.period.endDate}</h6>
      <p>{exp.description}</p>
    </div>
  )
}

export default Experience;