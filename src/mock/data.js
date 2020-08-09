import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ricky-C | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Ricky C welcomes you', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey there, my name is ',
  name: 'Ricky Caballero',
  subtitle: 'Web Development Extraordinaire',
  cta: 'Onward',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "If you were to know me, you would know that I'm a creative. I'm passionate about music, sing in a metal band, and love fantasy novels/video games.",
  paragraphTwo:
    "Aside from that you would also know that I'm analytical. Some would say I over analyze but I consider that a good trait. I consider it more like deep thinking. It has served me well so far!",
  paragraphThree:
    'One thing I know for certain is that I love programming. It can be mentally stimulating and act as an outlet for creativity. Take a look through some of my work! I found them all interesting and hope you will too.',
  resume:
    'https://docs.google.com/document/d/1nDc4xCtMifU_sQ9T2g6fQEsL44KjsnvhcigpWr7AjOE/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dcu.png',
    title: 'DC Universe',
    info:
      'As a comic fan I feel honored to include DCU in my previous work. This project really tested how I perform under pressure. ',
    info2:
      'This store had a strict and short deadline to launch with the new DCU Streaming Service. The client, Warner Bros, was very happy with the outcome.',
    url: 'https://shop.dcuniverse.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'harrypotter.png',
    title: 'Harry Potter',
    info:
      "Who doesn't love Harry Potter! The interesting thing about this store was the amount of collaboration with the Design Team.",
    info2:
      'The communication between Dev and Design is very important to the efficiency and success of a website. With years of this type of experience, I feel very comfortable working with other teams to achieve the best possible outcome.',
    url: 'https://www.harrypottershop.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'vsa.png',
    title: 'VSA Partners',
    info:
      'I recently completed the new corporate site for VSA Partners. Built in React along with a headless CMS.',
    info2:
      'This project really demonstrates execution of modern and complex design. Take the time to go through the site and you will find plenty to be impressed by!',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in getting in touch?',
  btn: "Let's talk",
  email:
    'https://docs.google.com/forms/d/e/1FAIpQLSdiBh5ExHNQcyFf5uehzpEH66TaV6U2tIUOfFXsDZKgRrXT8g/viewform',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/enrique-caballero-779b3796/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ricky-C',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
