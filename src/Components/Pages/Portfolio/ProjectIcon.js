import React from 'react';

// Dev Icons
import Icon from '@mdi/react';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiBootstrap } from '@mdi/js';

const ProjectIcon = ({ tech }) => {
  // console.log(tech)

  switch (tech){
    case "HTML":
      return <Icon path={ mdiLanguageHtml5 } title="HTML" color='#E44D26' id="projSvg" />
    case "CSS":
      return <Icon path={ mdiLanguageCss3 } title="CSS" color='#264DE4' id="projSvg"/>
    case "JavaScript":
      return <Icon path={ mdiLanguageJavascript } title="JavaScript" color='#F0DB4F' id="projSvg"/>
    case "React":
      return <Icon path={ mdiReact } title="React" color='61DBFB' id="projSvg"/>
    case "MDBootstrap":
      return <Icon path={ mdiBootstrap } title="MDBootstrap" color='#602C50' id="projSvg"/>
    default:
      break;
  }
}

export default ProjectIcon;