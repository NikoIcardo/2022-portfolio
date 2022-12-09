export interface SkillObject {
  heading: string;
  items: string[];
}

export interface LinkObject {
  title: string;
  link: string;
}

export const professionalLinks: LinkObject[] = [
  {
    title: 'Resume',
    link: 'https://nikoicardo.com/Niko-Icardo-Resume.pdf',
  },
  {
    title: 'Github',
    link: 'https://github.com/NikoIcardo',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/niko-icardo-7366391a4',
  },
];

export const skills: SkillObject[] = [
  {
    heading: 'Languages',
    items: [
      'Typescript - Professional Use',
      'JavaScript ES5 & ES6 - Professional Use',
      'HTML 5 - Professional Use',
      'CSS 3 - Professional Use',
      'Python - Strong Proficiency',
      'C++ - Strong Proficiency',
      'Matlab - Proficient',
      'Java - Exposure',
      'Rust - Exposure',
      'PHP - Exposure',
      'C# - Exposure',
    ],
  },
  {
    heading: 'Front End Technologies',
    items: [
      'React (Hooks and Class Based Comps.) - Professional Use',
      'React Redux - Professional Use',
      'Redux Saga - Professional Use',
      'Redux Thunk - Professional Use',
      'Emotion CSS - Professional Use',
      'Tailwind CSS - Professional Use',
      'Bootstrap CSS 4 and 5 - Professional Use',
      'Sassy CSS - Exposure',
    ],
  },
  {
    heading: 'Back End Technologies',
    items: [
      'Node JS Express - Professional Use',
      'Postgres SQL - Professional Use',
      'Sequelize - Professional Use',
      'Web Sockets (Socket IO) - Professional Use',
      'REST API - Professional Use',
      'SDK Based API - Professional Use',
      'MongoDB - Strong Proficiency',
      'SQL - Strong Proficiency',
    ],
  },
  {
    heading: 'Application Packaging and Deployment',
    items: [
      'Webpack 4 and 5 - Professional Use',
      'Babel - Professional Use',
      'Apache 2.0 - Professional Use',
      'Amazon Linux 2 - Professional Use',
      'Docker - Strong Exposure',
    ],
  },
  {
    heading: 'Misc.',
    items: [
      'VMware VSphere and NSX APIs - Professional Use',
      'Unit Testing - Professional Level',
      'Git - Professional Use',
      'Github - Professional Use',
      'AGILE/SCRUM - Professional Level',
      'Code Review - Professional Level',
      'VS Code - Professional Use',
      'Linux - Professional Use',
      'Mac OS - Professional Use',
      'Windows OS - Professional Use',
      'Microsoft Office - Professional Use',
      'Management - Professional Level',
      'Jupyter Notebook - Strong Exposure',
      'Machine Learning - University Level Exposure',
      'Eclipse IDE - Exposure',
      'LaTeX - Exposure',
    ],
  },
];
