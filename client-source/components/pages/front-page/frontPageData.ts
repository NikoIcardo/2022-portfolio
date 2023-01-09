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
    link: 'https://nikoicardo.com/NikoIcardosResume.pdf',
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

export const projects = [
  {
    title: 'SpeedyFingers.net',
    subtitle: 'Vanilla Javascript and Bootstrap CSS',
    description:
      'A typing website to help people type faster and also track their progress using local storage as they improve! How fast can you type?',
    image: '/speedyfingers.png',
    link: 'https://speedyfingers.net',
  },
  {
    title: 'My Three.js Demonstration',
    subtitle: 'Three.js and CSS Grid',
    description:
      'A site to show off the capabilities of the three.js web graphics library! It also uses CSS grid for the overlay. Check it Out!',
    image: '/3js.png',
    link: 'https://silly-villani-dcd0b8.netlify.app/',
  },
  {
    title: 'React Principles',
    subtitle: 'React & Tailwind',
    description:
      'A site I created to demonstrate some essential React principles. I built this as a 6 hour challenge in which I also taught myself Tailwind CSS.',
    image: '/react-principles.png',
    link: 'https://stupefied-thompson-2921ec.netlify.app',
  },
  {
    title: 'Odins Eye Black Smithing',
    subtitle: 'React and Three.JS',
    description: 'A website beta created for a local blacksmithing shop.',
    image: '/odins-eye-black-smithing.png',
    link: 'https://gleeful-bienenstitch-103742.netlify.app/',
  },
  {
    title: 'Github Finder',
    subtitle: 'React and Github API',
    description:
      'A site that uses the Github API to search for profiles and display their info and their repositories. See if you can find your account!',
    image: '/github-finder.png',
    link: 'https://flamboyant-ardinghelli-e6926e.netlify.app/',
  },
  {
    title: 'BugTrack',
    subtitle: 'MERN Stack and Materialize CSS',
    description:
      "A Bug Tracking tool. Enter Bugs, Edit Bugs, Delete when necessary! Feel free to add a technician and a bug log if you'd like!",
    image: '/bug-track.png',
    link: 'https://bug-track1.herokuapp.com/',
  },
  {
    title: 'Contact Keeper',
    subtitle: 'MERN Stack',
    description:
      'A site to keep contacts! Add an account to register, or use "test@test.com", and "tester" as the password. Then feel free to add contacts!',
    image: '/contact-keeper.png',
    link: 'https://hidden-headland-19257.herokuapp.com/',
  },
  {
    title: 'Sight Seeing',
    subtitle: 'MERN Stack',
    description:
      'A social media project. Unfortunately Heroku hosting only holds photos for 30 min before deleting, so try uploading a photo! User: test@test.com, Password: tester',
    image: '/sight-seeing.png',
    link: 'https://admiring-austin-7c036d.netlify.app',
  },
  {
    title: 'JsAgario',
    subtitle: 'p5.Js',
    description:
      'An npc based recreation of the popular game agar.io in p5.js. Go ahead and try it out! You can use your mouse to move.',
    image: '/jsagio.png',
    link: 'https://tranquil-daifuku-4ca84e.netlify.app',
  },
];
