import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Masters of Computer Application (MCA)",
    location: "Chandigarh,India",
    description:
      "I am pursuing that course From Chadigarh University as distance Learner",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Expected Graduation 2025",
  },
  {
    title: "Bachelor of Commerce",
    location: "Annasaheb Vartak College, vasai, Mumbai",
    description:
      "I completed My Graduation in Bachelor of Commerce from Annasaheb Vartak College, vasai, Mumbai as 6.07/10 CGPA",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: " HSC",
    location: "St. Joseph's Junior College, Nandakhal, Virar, Mumbai",
    description:
      "I completed My HSC with Information Technology as a optional subject from St. Joseph's Junior College, Nandakhal,Virar,Mumbai as 65.69% ",
    icon: React.createElement(FaReact),
    date: "2018",
  },
  {
    title: " SSC",
    location: "Bhausaheb Vartak Vidyamandir, Nale, Nallasopara, Mumbai",
    description:
      "I completed My SSC from Bhausaheb Vartak Vidyamandir,Nale,Nallasopara,Mumbai as 79.80% ",
    icon: React.createElement(FaReact),
    date: "2016",
  }
] as const;

export const projectsData = [
  {
    title: "Plot",
    description:
      "I worked as a full-stack developer on this project, Its features are similar Like twitter. we can share our thoughts thinkings on it.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma","Figma","Express.js","clerk"],
    imageUrl: corpcommentImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Supervisor",
    location: "SIEMENS",
    description:
      "Contract-based work on Siemens project at ONGC NEELAM Platform from SIEMENS Ltd. by V-Tech Offshore, involving project coordination and management.",
    icon: React.createElement(LuGraduationCap),
    date: " February 2023 - March 2023",
  },
  {
    title: "Greenray Turbines Ltd,UK",
    location: "Annasaheb Vartak College, vasai, Mumbai",
    description:
      "Contract-based work at ONGC WIN Platform from Greenray Turbines Ltd. by V-Tech Offshore, involving rigging and assisting in the installation process, ensuring compliance with safety standards and project timelines.",
    icon: React.createElement(CgWorkAlt),
    date: " June 2022 - January 2023",
  }
 
] as const;

