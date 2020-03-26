import React from 'react';

const SkillType = ({ type }) => {
  console.log("In SkillType.js", type)

  return (
    <h4><strong>{type}</strong></h4>
  )
}

export default SkillType;