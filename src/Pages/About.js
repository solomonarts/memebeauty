import React from "react";
import { motion } from "framer-motion";
import FrostedOverlay from "../Components/FrostedOverlay";
import { backgrounds, experts } from "../constants";

const About = ({ aboutref }) => {
  return (
    <motion.div
      className="relative w-4/5 bg-[#fbd6c8]/20 mx-auto flex flex-col md:flex-row gap-6 px-6 py-10 mt-24"
      ref={aboutref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Column */}
      <div className="relative flex-1">
        <div className="absolute -top-36 -left-14 w-2/5 rounded-full overflow-hidden z-10">
          <img
            src={experts["expert1.png"]}
            alt="Company Director"
            className="w-full h-auto"
          />
        </div>
        <FrostedOverlay>
          <div className="relative p-6 pl-14 rounded-lg">
            <h3 className="text-lg font-semibold text-white">Meme</h3>
            <p className="text-white">Founder & Lead Esthetician</p>
          </div>
        </FrostedOverlay>
      </div>

      {/* Right Column */}
      <motion.div className="flex-1 p-6 border-t-4 border-l-4 border-gray-200 rounded-lg">
        <h2 className="text-xl font-semibold text-white">Our Mission</h2>
        <p className="text-white mt-4">
          At Meme Beauty Spa, we aim to empower our clients with the best spa
          experiences and skincare solutions, helping you feel confident and
          radiant every day.
        </p>
        <p className="text-white mt-4">
          At Meme Beauty Spa, we aim to empower our clients with the best spa
          experiences and skincare solutions, helping you feel confident and
          radiant every day.
        </p>
        <h2 className="text-xl font-semibold text-white mt-6">
          Our Objectives
        </h2>
        <ul className="list-disc list-inside text-white mt-4 space-y-2">
          <li>
            Provide personalized beauty treatments tailored to your needs.
          </li>
          <li>Ensure top-notch customer service and client satisfaction.</li>
          <li>Promote self-care as a vital part of a balanced life.</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
