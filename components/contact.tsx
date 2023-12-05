"use client";


import React from "react";
import SectionHeading from "./section-heading";
import { motion, useAnimation } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import finalimg from '../public/finalportfoliobhavin.png';
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Contact() {
  const { ref, inView } = useSectionInView("Contact");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (

        <motion.section
      id="contact"
      ref={ref}
      className="mb-2 sm:mb-16 w-full text-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: inView ? 1 : 0,
      }}
      transition={{
        duration: 1,
      }}
    >

      <SectionHeading>Contact me</SectionHeading>
      <motion.p
        className="text-gray-700 -mt-6 dark:text-white/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
      {/* Use a separate motion span for each word */}
      <motion.span
        style={{ display: "inline-block", opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.2 },
        }}
      >
        Please
      </motion.span>{" "}
      <motion.span
        style={{ display: "inline-block", opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        contact
      </motion.span>{" "}
      <motion.span
        style={{ display: "inline-block", opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.6 },
        }}
      >
        me
      </motion.span>{" "}
      <motion.span
        style={{ display: "inline-block", opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.8 },
        }}
      >
        directly
      </motion.span>{" "}
      <motion.span
        style={{ display: "inline-block", opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 1 },
        }}
      >
        at{" "}
      </motion.span>{" "}
      <motion.span
        style={{ display: "inline-block", opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 1.2 },
        }}
      > <a className="underline" href="mailto:example@gmail.com">
      bhavinraut2@gmail.com
    </a>{" "}
      </motion.span>{" "}
      <motion.span
        style={{ display: "inline-block", opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 1.4 },
        }}
      >
        or
      </motion.span>{" "}
      <motion.span
        style={{ display: "inline-block", opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 1.6 },
        }}
      >
        through
      </motion.span>{" "}
      <motion.span
        style={{ display: "inline-block", opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 1.8 },
        }}
      >
        this
      </motion.span>{" "}
      <motion.span
        style={{ display: "inline-block", opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 2 },
        }}
      >
        form.
      </motion.span>
    </motion.p>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-8">
        <motion.div
          className="relative w-full sm:w-1/2 lg:w-1/3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
        <form
          className="flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-4 mb-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
            name="senderEmail"
            type="email"
            required
            maxLength={100}
            placeholder="Your email"
          />
          <textarea
             className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
             name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </motion.div>

      {/* <motion.div
          className="relative w-full sm:w-1/2 lg:w-2/3 mt-6 sm:mt-0"
          initial={{ opacity: 0, x: isClient ? 100 : 0 }}
          animate={{ opacity: 1, x: isClient ? 200 : 0 }}
        >
         <div className={isClient ? "hidden sm:block" : ""}>
            <Image
              src={finalimg}
              alt="Bhavin portrait"
              quality={95}
              priority={true}
              className="object-right"
              layout="responsive"
              width={800}
              height={450}
            />
          </div>
        </motion.div> */}
      </div>
    </motion.section>
);
}

