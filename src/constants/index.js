import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a versatile full stack developer with a solid foundation in both front-end and back-end technologies. With hands-on experience in React, Vue.js, Node.js, Python, FastAPI, MySQL, and MongoDB, I aim to deliver impactful solutions that enhance user experience and drive business success.`;

export const ABOUT_TEXT = `I'm Byron Gonzalez, a dedicated full stack developer with a focus on creating efficient, scalable applications. My journey in tech began out of curiosity and has grown into a career where I apply my skills in Javascript, Node.js, and databases like MySQL and MongoDB to solve complex challenges. I thrive in collaborative environments and am passionate about learning new technologies and contributing to open-source projects. Outside of programming, I enjoy staying active and continuously exploring new tech innovations.`;

export const EXPERIENCES = [
  {
    year: "Octubre 2023 - Abril 2024",
    role: "Programador Junior",
    company: "JISPARKING",
    description: `Developed a custom ERP system using Python and FastAPI for backend processes. Created APIs for scheduling, severance calculations, and HR management. Designed responsive user interfaces using Vue.js and Tailwind CSS.`,
    technologies: ["Python", "FastAPI", "Vue.js", "Tailwind CSS"],
  },
  {
    year: "Febrero 2023 - Mayo 2023",
    role: "Desarrollador Full Stack Javascript",
    company: "DUOC UC",
    description: `Built a web application for gym management using React and Node.js. Implemented features such as session reservations, user and role management, and ensured mobile-responsive design.`,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "ERP System",
    image: project1,
    description:
      "An ERP system for managing scheduling, HR calculations, and resources, built with FastAPI, Vue.js, and MongoDB.",
    technologies: ["FastAPI", "Vue.js", "MongoDB"],
  },
  {
    title: "Gym Management App",
    image: project2,
    description:
      "A responsive web application for gym management, featuring session reservations and user management.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Bootstrap", "CSS"],
  },
  {
    title: "Task Management System",
    image: project4,
    description:
      "A task management platform with features such as task creation, assignment, and tracking.",
    technologies: ["Angular", "Firebase"],
  },
];

export const CONTACT = {
  address: "Veracruz 5168, Lo Espejo, Santiago, Chile",
  phoneNo: "+56 9 5947 5860",
  email: "byrondein@gmail.com",
};
