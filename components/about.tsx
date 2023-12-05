"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "../context/theme-context"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.05,
    // color: "var(--primary-hover-color)", // Change to the desired hover color
    fontSize: "2em",
    rotate: 3,
    letterSpacing: "1px", // Increase letter spacing on hover
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  
};

const staggerAnimationVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  const { ref } = useSectionInView("About");
  const { theme } = useTheme();
  const fontColor = theme === 'dark' ? '#F4F27E' : '#3081D0';
  const fontSize = '1.4em';

  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    variants={staggerAnimationVariants}
    initial="initial"
    animate="animate"
    id="about"
  >
    <motion.h2
      variants={fadeInAnimationVariants}
      className="text-3xl font-bold mb-6"
    >
      About me
    </motion.h2>

    <motion.p
      className="mb-3"
      variants={fadeInAnimationVariants}
    >
        After graduating with a degree in{" "}
        <span className="font-medium">Commerce</span>, I decided to pursue my
        passion for programming. I enrolled for the Master of Computer Applications (MCA) and also joined a coding bootcamp where I learned{" "}
        <span className="font-medium">Frontend web development and Full-stack web development</span> from various resources available at that time.
        <br />
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        includes{" "}
        <span className="font-medium">
          HTML, CSS, Javascript, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Frontend
        developer.
      </motion.p>

      <motion.p
        variants={fadeInAnimationVariants}
        whileHover="hover"
        style={{ color: fontColor,fontSize: fontSize }}
        
      >
        <span className="italic font-semibold" >I like Coding</span>, I Enjoy{" "} 
        <span className="font-medium">learning New Things</span>.

        </motion.p>
        <motion.p
      className="mb-3"
      variants={fadeInAnimationVariants}
    >
        <br/> Despite my academic background in Bachelor of Commerce, I have embarked on a journey to transition into the dynamic field of web development.
        <br /> Currently, I am pursuing a Master's of Computer Application, which has provided me with a strong theoretical foundation in computer science. To enhance my practical skills,<br />
         I have successfully completed certifications in HTML, CSS, JavaScript, Node.js, and MongoDB from Udemy, showcasing my commitment to learning and staying up-to-date with industry trends.
      </motion.p>
    </motion.section>
  );
}