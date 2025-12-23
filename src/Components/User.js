import weatherImg from "../assets/WhatsApp Image 2025-12-18 at 08.50.55_4a4a792c.jpg";
import swiggyImg from "../assets/Gemini_Generated_Image_wigklawigklawigk .png";
import plantImg from "../assets/WhatsApp Image 2025-12-18 at 08.50.54_5482256b.jpg";
import taskImg from "../assets/Task management dashboard interface.png";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";


const info = {
  name: "Shadab Ali",
  stack: ["Frontend Developer", "React Developer", "UI Designer"],
  bio: "I am a passionate software engineering student with a strong foundation in web development and problem solving. I enjoy building clean, responsive, and user-friendly web applications using modern technologies. I am eager to learn, grow, and contribute to real-world projects while continuously improving my skills."
};

const ProjectInfo = [
  {
    title: "Swiggy Clone",
    desc: "Swiggy Clone is a modern food ordering web application that replicates the core features of the Swiggy platform, including restaurant listings, menu browsing, and cart-based ordering functionality. The front end is built using React and Tailwind CSS to deliver a fast, responsive, and visually appealing user interface, while Redux is used for efficient state management across the application. Real-time restaurant and menu data is fetched using Swiggy’s public API to provide a dynamic and realistic user experience. Firebase is integrated for authentication and backend services, ensuring secure and scalable data handling. React Icons are used throughout the application to enhance the UI with clean and intuitive visuals. The Swiggy Clone focuses on smooth performance, reusable components, and a user-friendly design, providing a seamless food ordering experience with a modern and professional look.",
    image: swiggyImg,
    live: true,
    technologies: ["React", "TailwindCSS","Redux","FireBase","ReactIcon"],
    link: "https://food-ordering-app-react-seven.vercel.app/",
    github: "https://github.com/Shadab7475/food-ordering-app-react"

  },
  {
    title: "Task Management App",
    desc: "Task Management System is a role-based productivity web application designed to manage and track tasks efficiently between administrators and employees. The application includes separate Admin and Employee panels with secure login using individual ID and password credentials. Admin users can create, assign, and manage tasks, while employees can log in to their dashboard to view assigned tasks and track their responsibilities. The front end is built using React to deliver a fast and interactive user experience, with Tailwind CSS used for creating a clean, responsive, and modern UI. React Router is implemented for smooth navigation between different panels and pages. This project demonstrates strong understanding of role-based access, component-driven architecture, and user-focused task management workflows with a professional and scalable design.",
    image: taskImg,
    live: false,
    technologies: ["React","TailwindCSS"],
    link: "https://github.com/Shadab7475/New-Task-Management",
    github: "https://github.com/Shadab7475/New-Task-Management"
  },
  {
    title: "Weather Checker",
    desc: "Weather Checker App is a simple and user-friendly web application that allows users to check real-time weather information for different cities. The application is built using pure HTML and CSS, focusing on clean structure and responsive layout. Users can search for a city and instantly view weather details such as temperature, weather conditions, and overall climate information in a visually clear format. The project emphasizes strong fundamentals of web development, including semantic HTML, layout design, and responsive UI creation using CSS. This project demonstrates the ability to build functional and visually appealing web interfaces using core web technologies with a minimal and lightweight approach",
    image: weatherImg,
    live: false,
    technologies: ["HTML","CSS"],
    link: "https://github.com/Shadab7475/weather",
    github: "https://github.com/Shadab7475/weather"
  },
  
  {
    title: "Plant Website",
    desc: "Plant Selling Website UI is a modern and visually appealing user interface designed for an online plant selling platform. This project is built using pure HTML and CSS, with a strong focus on layout structure, color harmony, and responsive design. The UI includes well-designed sections for showcasing plants, pricing, and call-to-action elements to enhance user engagement. Although it is a static UI project, it demonstrates a solid understanding of web design principles, semantic HTML, and CSS styling techniques. This project highlights the ability to create clean, attractive, and user-friendly interfaces suitable for e-commerce platforms",    
    image: plantImg,
    live: false,
    technologies: ["HTML","CSS"],
    link: "https://github.com/Shadab7475/plant-website",
    github: "https://github.com/Shadab7475/plant-website"
  },
  
 
];


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS",  "JavaScript", "React JS",  "Redux", "Tailwind CSS",  "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: [ "JavaScript", "Python"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code"]
    }
]
const socialLinks = [
    {link:"https://www.linkedin.com/in/shadab-ali-01b500335/",icon: IconBrandLinkedin
    },
    { link:"https://github.com/Shadab7475",icon: IconBrandGithub
    }, 
  ];


const ExperienceInfo = [
  {
    role: "Frontend Developer (Projects)",
    company: "Self",
    date: "2025 - Present",
    desc: "I developed multiple frontend projects using React and Tailwind CSS, focusing on responsive design, reusable components, and clean UI/UX. I worked on projects such as a Swiggy clone UI, a weather application with real-time API integration, and a personal portfolio with smooth animations and optimized performance.",
    skills: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "API Integration",
      "Responsive Design",
      "Git & GitHub",
      "UI/UX"
    ]
  }
];






const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

export { ProjectInfo, info, SkillInfo, ExperienceInfo, slugs, socialLinks  };
