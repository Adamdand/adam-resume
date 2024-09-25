import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiMail } from 'react-icons/hi';
import {linkedin} from "../assets";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:adamdand@telus.net?subject=Hello%20Adam&body=I%20wanted%20to%20get%20in%20touch...';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/adamdandrea/', '_blank');
  };


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
       <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <div className='space-y-4 mt-4'>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleEmailClick}
          className="group relative flex items-center justify-center w-full p-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-md"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
            <HiMail className="w-6 h-6 mr-2" />
            Send Email
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            <HiMail className="w-6 h-6 mr-2" />
            Send Email
          </span>
          <span className="relative invisible">Send Email</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLinkedInClick}
          className="group relative flex items-center justify-center w-full p-4 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
            Connect on LinkedIn
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
            Connect on LinkedIn
          </span>
          <span className="relative invisible">Connect on LinkedIn</span>
        </motion.button>
      </div>
    </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");