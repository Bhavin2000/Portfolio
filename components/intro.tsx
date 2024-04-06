"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import finalimg from '../public/finalimg.png';
import { ImageLoader, ImageProps } from 'next/image';
import { HTMLMotionProps, motion, useAnimation } from 'framer-motion';
import { useEffect,useState } from "react";
import { useInView } from "react-intersection-observer";

type StaticImageLoader = ImageLoader & {
  src: string;
  height: number;
  width: number;
};

type StaticImageProps = Omit<ImageProps, 'src' | 'loader'> & {
  src: string;
  loader: StaticImageLoader;
};

  export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [screenWidth, setScreenWidth] = useState(0);
    const [showImage, setShowImage] = useState(false);
    const [showText, setShowText] = useState(true);
  
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
  
    useEffect(() => {
      updateScreenWidth();
      window.addEventListener("resize", updateScreenWidth);
      return () => {
        window.removeEventListener("resize", updateScreenWidth);
      };
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        if (screenWidth < 1000) {
          setShowImage(false);
          return;
        }
  
        const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        if (currentSection && currentSection.id !== "home") {
          setShowImage(false);
          setShowText(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [screenWidth]);
  
    const buttonVariants = {
      initial: { opacity: 0, y: 150 },
      animate: { opacity: 1, y: -180, transition: { duration: 0.5 } },
    };
  
    const handleImageClick = () => {
      if (screenWidth >= 1000) {
        setShowImage(true);
        setShowText(false);
  
        setTimeout(() => {
          setShowImage(false);
          setShowText(true);
        }, 5000); // Adjust the duration as needed
      }
    };
  
    const imageVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: -42, transition: { duration: 0.8 } },
    };
  
    return (
      <section
        ref={ref}
        id="home"
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              className="image-container"
              initial="hidden"
              whileHover="visible"
              onClick={handleImageClick}
            >
              {(showText || screenWidth < 1000) && (
                <motion.h1
                  className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                  animate={{ opacity: 1 }}
                >
                  <span className="font-bold">Hello, I'm Bhavin.</span> I'm a{" "}
                  <span className="font-bold">frontend developer</span> My prime focus is{" "}
                  <span className="underline">Frontend development with React (Next.js)</span>.
                </motion.h1>
              )}
  
              {showImage && screenWidth >= 1000 && (
                <motion.div
                  className="hover-image"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Image {...(finalimg as StaticImageProps)} alt="Bhavin's Portfolio" />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
          <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <motion.div
          variants={buttonVariants}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
          </Link>
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </motion.div>

        <motion.div
          variants={buttonVariants}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          <a
            href="/BHAVIN_RAUT.pdf"
            download
          >
            Download CV{" "}
          </a>
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </motion.div>

        <motion.div
          variants={buttonVariants}
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <a
            href="https://www.linkedin.com/in/bhavin-raut/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <a
            href="https://github.com/Bhavin2000/"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
