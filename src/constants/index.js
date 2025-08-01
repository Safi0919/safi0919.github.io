import {
  frontend,
  backend,
  ux,
  prototyping,
  html,
  reactjs,
  git,
  docker,
  python,
  java,
  postman,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  egain,
  kelhel,
  microverse,
  peer,
  tau,
  writing,
  gov,
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Machine Learning',
    icon: frontend,
  },
  {
    title: 'Database Management',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "eGain",
    icon: egain,
    iconBg: "#333333",
    date: "May 2025 - Present",
  },
  {
    title: "Vice President",
    company_name: "Tau Beta Pi",
    icon: tau,
    iconBg: "#333333",
    date: "June 2024 - May 2025",
  },
  {
    title: "Teaching Assistant, Data Structures and Algorithms",
    company_name: "Peer Connections",
    icon: peer,
    iconBg: "#333333",
    date: "Jan 2024 - May 2025",
  },
  {
    title: "Director of Academic Affairs",
    company_name: "Associated Students",
    icon: gov,
    iconBg: "#333333",
    date: "Jun 2022 - Aug 2023",
  },
  {
    title: "IT Website and Systems Coordinator",
    company_name: "Writing Center",
    icon: writing,
    iconBg: "#333333",
    date: "Jun 2022 - Aug 2022",
  },
];


const projects = [
  {
    id: "project-1",
    name: "Autonomous Navi. System",
    description:
      "A self-driving autonomous robot capable of navigation, mapping and environment analysis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/ROS-Mapping-Localiaztion-Enviroment/ROS_MLES",
    demo: "https://drive.google.com/file/d/1AovBhF0WxONeG5Yv_zw9chrwrrNronsv/view?usp=drive_link",
  },
  {
    id: "project-2",
    name: "WorkMan",
    description:
      "An application that lets users manage and edit their workout routines, and build a health community",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/Safi0919/Fitness_Tracker",
    demo: "https://www.youtube.com/watch?v=Qu2YM6VGWmg",
  },
  {
    id: "project-3",
    name: "HeriTaste",
    description:
      "An application to preserve family recipes, foster connections through food, and celebrate the cultural heritage woven into each dish.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/Safi0919/HeriTaste",
    demo: "https://devpost.com/software/heritaste?ref_content=my-projects-tab&ref_feature=my_projects",
  },
  {
    id: "project-4",
    name: "WorkPass Extension",
    description: "A Chrome extension that enhances productivity by providing seamless access to work-related tools and resources directly in the browser.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "chrome-api",
        color: "green-text-gradient",
      },
      {
        name: "extension",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/Safi0919/WorkPass",
    demo: "https://chromewebstore.google.com/detail/workpass/cngapmbcoacjhgmknojbjnjdmehbcoeb",
  },
  {
    id: "project-5",
    name: "Weather App",
    description:
      "This app is designed to provide real-time weather updates for any location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/Safi0919/WeatherWebsite",
    demo: "https://github.com/Safi0919/WeatherWebsite",
  },
];

export { services, technologies, experiences, projects };
