import selfie from './assets/selfie.webp';
import pj1 from './assets/mywebsite.webp';
import pj2 from './assets/clickygame.webp';
import pj3 from './assets/getmilk.webp';

import wip from './assets/wip.webp';
import purnalBot from './assets/PurnalBot.webp'

import pb1 from './assets/drumkit.webp';
import pb2 from './assets/clock.webp';

const websiteData = {
  name: "Allain Bernal",
  role: "Full Stack Web Developer",
  selfie: selfie,
  about: "A tech enthusiast with an insatiable hunger for learning everything about technology, Allain Bernal strives in team collaborative efforts with excellent communication skills necessary to tackle any problem. Allain Bernal is curious, and always learning.",
  background: "Allain has a non-traditional background in the software development space, opting for self-paced practical learning to gain the necessary skills to start tackling problems in web development. To help kickstart his journey, he enrolled in the UC Berkeley Coding Bootcamp to further equip him with knowledge necessary to work in development teams utilizing modern development stacks.",
  contactInfo: {
    phone: "(925) 338-1949",
    email: "me@allainbernal.com"
  },
  social: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/AllainBernal"
    },
    {
      name: "Github",
      link: "https://github.com/AllainPurrnal"
    }
  ],
  skills: [
    {
      id: 1,
      type: "Programming Languages",
      name: [
        "HTML5", "CSS3", "JavaScript"
      ]
    },
    {
      id: 2,
      type: "Libraries & Frameworks",
      name: [
        "Angular", "Bootstrap", "Express.js", "MDBootstrap", "React"
      ]
    },
    {
      id: 3,
      type: "Databases",
      name: [
        "MongoDB"
      ]
    },
    {
      id: 4,
      type: "Tools & Platforms",
      name: [
        "Confluence", "Git", "Jira", "Node.js", "Postman", "NPM", "Trello", "Yarn"
      ]
    }
  ],
  experience: [
    {
      id: 1,
      company: "Accenture",
      link: "https://openoakland.org/",
      role: "Product Owner",
      period: {
        startDate: "August 2021",
        endDate: "Present"
      },
      description: "A founding team member tasked with engaging Maui's Regional Hospital, in collaboration with a leading Health Care Provider based in California. We were tasked with expanding user access to currently provided web services being provided by the hospital"
    },
    {
      id: 2,
      company: "Accenture",
      link: "https://extension.berkeley.edu/",
      role: "Front-End Developer Apprentice",
      period: {
        startDate: "September 2020",
        endDate: "August 2021"
      },
      description: "Joined an established agile-scrum team working with one of California's leading Health Care Providers on improving and maintaining the call center application used by Customer Service Representatives."
    }
  ],
  portfolio: [
    {
      id: 1,
      name: "allainbernal.com",
      link: "https://www.allainbernal.com",
      git: "https://github.com/AllainPurrnal/allainbernal.com",
      tech: ["HTML", "CSS", "JavaScript", "React", "MDBootstrap"],
      description: "An ever evolving website for my hobbies and interests to call home",
      image: pj1
    },
    {
      id: 2,
      name: "Cat Clicky",
      link: "https://cat-clicky-game.herokuapp.com/",
      git: "https://github.com/AllainPurrnal/Cat-Clicky-Game",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      description: "A simple memory game built with React and Cats. For demo purposes only. Please give Heroku time to fire up!",
      image: pj2
    },
    {
      id: 3,
      name: "GetMilk",
      link: "https://frozen-stream-30142.herokuapp.com/",
      git: "https://github.com/AllainPurrnal/GetMilk",
      tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js", "React"],
      description: "A Shopping List built with Authentication and persistent data. For demo purposes only. Please give Heroku time to fire up!",
      image: pj3
    },
    {
      id: 4,
      name: "The Pet Parlor",
      link: "https://github.com/AllainPurrnal/ThePetParlor",
      git: "https://github.com/AllainPurrnal/ThePetParlor",
      tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js", "React"],
      description: "A web app for a Pet Grooming small business based in Iowa, please check out the Github to see the progress!",
      image: wip
    },
    {
      id: 5,
      name: "PurnalBot",
      link: "https://github.com/allainPurrnal/PurnalBot",
      git: "https://github.com/allainPurrnal/PurnalBot",
      tech: ["JavaScript", "MongoDB", "Node.js"],
      description: "A Bot for my personal Discord Server with game specific commands. Please check out the github for more details!",
      image: purnalBot
    }
  ],
  projectByte: [
    {
      id: 1,
      name: "Drum Kit",
      link: "https://allainpurrnal.github.io/Drum-Kit/",
      git: "https://github.com/AllainPurrnal/Drum-Kit",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A simple Drum Kit made in plain HTML, CSS, and JavaScript",
      image: pb1
    },
    {
      id: 2,
      name: "jsClock",
      link: "https://allainpurrnal.github.io/Clock/",
      git: "https://github.com/AllainPurrnal/Clock",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A clock aspiring to be more",
      image: pb2
    }
  ]
};

export default websiteData;