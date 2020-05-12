import pj1 from './assets/mywebsite.webp';
import pj2 from './assets/clickygame.webp';

import pb1 from './assets/drumkit.webp';
import pb2 from './assets/clock.webp';

let websiteData = {
  name: "Allain Bernal",
  role: "Full Stack Web Developer",
  // about: "A, con panna medium robusta single shot barista whipped, aged qui turkish, ut macchiato plunger pot roast brewed instant siphon and cream. Variety that arabica plunger pot, blue mountain foam con panna, affogato crema, so java, doppio frappuccino robusta body dark rich robusta id froth cortado dark. Breve, at organic so, cup coffee, cappuccino, carajillo barista, variety organic seasonal, redeye rich as cappuccino foam instant.",

  about: "Allain Bernal is a tech enthusiast with an insatiable hunger for learning anything and everything about technology. He strives in team collaborative efforts with excellent communication skills necessary to tackle any problems. Allain has a non-traditional background in the software development space, opting for self-paced practical learning. Having enrolled and completed the UC Berkeley Coding Bootcamp, Allain is equipped with the knowledge necessary to tackle problems being faced by development teams utilizing modern development stacks. Always curious, always learning.",

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
        "Bootstrap", "jQuery", "MDBootstrap", "React", "Redux", "Tailwind CSS"
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
        "AdobeXD", "Git", "Node.js", "Postman", "NPM", "Trello", "Yarn"
      ]
    }
  ],
  experience: [
    {
      id: 1,
      company: "Open Oakland",
      link: "https://openoakland.org/",
      role: "Contributor",
      period: {
        startDate: "January 01, 2020",
        endDate: "Present"
      },
      // description: "Sit wings redeye trifecta caffeine, aroma arabica java percolator aftertaste. Redeye sit, grinder, body cappuccino cream java white. Americano acerbic, galão, milk, caffeine crema dripper affogato coffee that sugar crema.",

      description: "OpenOakland is a Civic Hacking Group part of the Code for America Brigade Organization. The organizations primary purpose is to improve local communities by using technology to identify and solve problems affecting the society. As a contributor to OpenOakland, I have assisted in solving a miriad of issues in projects such as OakCrime. My contributions range from simple bug fixes to assisting in the implementation of web features"
    },
    {
      id: 2,
      company: "UC Berkeley Coding Bootcamp",
      link: "https://extension.berkeley.edu/",
      role: "Web Development Student",
      period: {
        startDate: "October 2018",
        endDate: "February 2019"
      },
      description: "Learned and explored key concepts in Web Development such as functional programming with JavaScript and DOM Manipulation with HTML, CSS, and React. Learning outcomes include the aforementioned concepts as well as the use of tools such as Git as well as communication in a development team. Our work culminated in three projects with varying levels of complexity that tracked student progress. Although the final project consisted of many challenges for my development team, we came out learning new skills such as working in an Agile development environment, prioritization of key features over “nice to haves” and proper, consistent communication."
    }
  ],
  portfolio: [
    {
      id: 1,
      name: "allainbernal.com",
      link: "www.allainbernal.com",
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
      description: "A simple memory game built with React and Cats. The apps main focus is to show proficiency with the listed technologies used.",
      image: pj2
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