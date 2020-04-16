import pj1 from './assets/mywebsite.webp';
import pj2 from './assets/clickygame.webp';
import pj3 from './assets/bg2.webp';

let websiteData = {
  name: "Allain Bernal",
  role: "Full Stack Web Developer",
  about: "A, con panna medium robusta single shot barista whipped, aged qui turkish, ut macchiato plunger pot roast brewed instant siphon and cream. Variety that arabica plunger pot, blue mountain foam con panna, affogato crema, so java, doppio frappuccino robusta body dark rich robusta id froth cortado dark. Breve, at organic so, cup coffee, cappuccino, carajillo barista, variety organic seasonal, redeye rich as cappuccino foam instant.",
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
      type: "Frameworks",
      name: [
        "Bootstrap", "jQuery", "MDBootstrap", "Node.js", "React", "Redux", "Tailwind CSS"
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
        "AdobeXD", "Git", "Postman", "NPM", "Trello", "Yarn"
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
      description: "Sit wings redeye trifecta caffeine, aroma arabica java percolator aftertaste. Redeye sit, grinder, body cappuccino cream java white. Americano acerbic, galão, milk, caffeine crema dripper affogato coffee that sugar crema."
    },
    {
      id: 2,
      company: "Upwork",
      link: "https://upwork.com/",
      role: "Freelance Web Developer",
      period: {
        startDate: "January 01, 2020",
        endDate: "Present"
      },
      description: "Sit wings redeye trifecta caffeine, aroma arabica java percolator aftertaste. Redeye sit, grinder, body cappuccino cream java white. Americano acerbic, galão, milk, caffeine crema dripper affogato coffee that sugar crema."
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
      description: "A simple memory game built with React and Cats",
      image: pj2
    },
    {
      id: 3,
      name: "Cat Clicky",
      link: "https://cat-clicky-game.herokuapp.com/",
      git: "https://github.com/AllainPurrnal/Cat-Clicky-Game",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      description: "A simple memory game built with React and Cats",
      image: pj3
    }
  ],
  projectByte: [
    {
      id: 1,
      name: "Drum Kit",
      link: "https://allainpurrnal.github.io/Drum-Kit/",
      git: "https://github.com/AllainPurrnal/Drum-Kit",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A simple Drum Kit made in plain HTML, CSS, and JavaScript"
    },
  ]
};

export default websiteData;