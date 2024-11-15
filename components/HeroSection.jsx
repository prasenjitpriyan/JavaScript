"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-extends-dark-charcoal min-h-[calc(100vh-2rem)] p-4 flex items-center justify-center text-center px-6 md:px-12 rounded-md">
      {/* Hero Content */}
      <div className="max-w-3xl">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-extends-minion-yellow mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to JavaScript and Notes!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your go-to resource for JavaScript concepts, examples, and notes.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="/notes"
            className="px-6 py-3 rounded-md bg-extends-minion-yellow text-extends-dark-charcoal font-medium text-lg shadow-lg hover:bg-my-color-6 transition duration-300"
          >
            Explore Notes
          </Link>
          <Link
            href="/learning"
            className="px-6 py-3 rounded-md border border-extends-minion-yellow text-gray-300 font-medium text-lg hover:bg-my-color-5 hover:text-extends-minion-yellow transition duration-300"
          >
            Start Learning
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
