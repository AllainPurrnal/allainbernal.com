import React from 'react';

const SkillName = ({ names }) => {
  // console.log("In SkillName.js", names)
  
  return <h6>{names.join(" / ")}</h6>
}

export default SkillName;