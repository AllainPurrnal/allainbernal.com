import React from 'react';

// Dev Components
import SkillType from './SkillType.js';
import SkillName from './SkillName.js';

const Skills = ({ skill }) => {
  // console.log("In Skills.js", skill)

  return(
    <>
      <SkillType type={skill.type} />
      <SkillName names={skill.name} />
    </>
  )
}

export default Skills;