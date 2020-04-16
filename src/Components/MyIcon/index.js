import React from 'react';

// Dev Icons
import Icon from '@mdi/react';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiBootstrap } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiNodejs } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';

const MyIcon = ({ icon, id }) => {
  // console.log(icon)

  switch (icon){
    case "LinkedIn":
      // return <Icon path={ mdiLinkedin } title="LinkedIn" color="#0E76A8" id={id} />
      return <Icon path={ mdiLinkedin } title="LinkedIn" id={id} />
    case "Github":
      // return <Icon path={ mdiGithub } title="Github" color="#171515" id={id} />
      return <Icon path={ mdiGithub } title="Github" id={id} />
    case "HTML":
      return <Icon path={ mdiLanguageHtml5 } title="HTML" color="#E44D26" id={id} />
    case "CSS":
      return <Icon path={ mdiLanguageCss3 } title="CSS" color="#264DE4" id={id}/>
    case "JavaScript":
      return <Icon path={ mdiLanguageJavascript } title="JavaScript" color="#F0DB4F" id={id}/>
    case "React":
      return <Icon path={ mdiReact } title="React" color="#61DBFB" id={id}/>
    case "MDBootstrap":
      return <Icon path={ mdiBootstrap } title="MDBootstrap" color="#602C50" id={id}/>
    case "Node.js":
      return <Icon path={ mdiNodejs } title="Node.js" color="#3C873A" id={id}/>
    default:
      break;
  }
}

export default MyIcon;