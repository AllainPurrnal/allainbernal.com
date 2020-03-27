let websiteData = {
  name: "Allain Bernal",
  role: "Full-Stack Web Developer",
  about: "",
  contactInfo: {
    phone: "(925)338-1949",
    email: "me@allainbernal.com"
  },
  social: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/AllainBernal",
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
        "Bootstrap", "jQuery", "MDBootstrap", "Node.js", "React", "Redux"
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
      description: "A personal website that is ever evolving"
    },
    {
      id: 2,
      name: "Cat Clicky",
      link: "https://cat-clicky-game.herokuapp.com/",
      git: "https://github.com/AllainPurrnal/Cat-Clicky-Game",
      description: "A simple memory game built with React and Cats"
    }
  ]
};

export default websiteData;