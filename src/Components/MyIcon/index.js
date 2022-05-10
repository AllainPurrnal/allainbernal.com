import React from 'react';

// Dev Icons
import Icon from '@mdi/react';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiBootstrap } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiNodejs } from '@mdi/js';
import { mdiDatabase } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';

const MyIcon = ({ icon, link, id }) => {
  // console.log(icon);

  switch (icon){
    case "LinkedIn":
      // return <Icon path={ mdiLinkedin } title="LinkedIn" color="#0E76A8" id={id} />
      return <a href={link}><Icon path={ mdiLinkedin } title="LinkedIn" size={1} id={id} /></a>
    case "Github":
      // return <Icon path={ mdiGithub } title="Github" color="#171515" id={id} />
      return <a href={link}><Icon path={ mdiGithub } title="Github" size={1} id={id} /></a>
    case "HTML":
      return <Icon path={ mdiLanguageHtml5 } title="HTML" size={1} color="#E44D26" id={id} />
    case "CSS":
      return <Icon path={ mdiLanguageCss3 } title="CSS" size={1} color="#264DE4" id={id}/>
    case "JavaScript":
      return <Icon path={ mdiLanguageJavascript } title="JavaScript" size={1} color="#F0DB4F" id={id}/>
    case "React":
      return <Icon path={ mdiReact } title="React" size={1} color="#61DBFB" id={id}/>
    case "MDBootstrap":
      return <Icon path={ mdiBootstrap } title="MDBootstrap" size={1} color="#602C50" id={id}/>
    case "Node.js":
      return <Icon path={ mdiNodejs } title="Node.js" size={1} color="#3C873A" id={id}/>
    case "MongoDB":
      return <Icon path={mdiDatabase} title="MongoDB" size={1} color="#589636" id={id} />
    default:
      break;
  }
}

export default MyIcon;