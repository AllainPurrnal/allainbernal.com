import React from 'react';

const Experience = ({ exp }) => {
  // {console.log(exp.period.startDate)}
  let start = exp.period.startDate;
  let end = exp.period.endDate;

  return (
    <>
      <h4><strong><a href={exp.link}>{exp.company}</a></strong></h4>
      <h5>Role: <em>{exp.role}</em></h5>
      <h6>{start} - {end}</h6>
      <p>{exp.description}</p>
    </>
  )
}

export default Experience;