'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[calc(100vh-2rem)] bg-dark-charcoal rounded-md p-4 px-6 text-center md:px-12">
      {/* Hero Content */}
      <div className="max-w-3xl">
        {/* Title */}
        <motion.h1
          className="text-minion-yellow mb-6 text-4xl font-bold md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to JavaScript and Notes!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mb-8 text-lg text-gray-300 md:text-2xl"
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
            className="bg-minion-yellow text-dark-charcoal rounded-md px-6 py-3 text-lg font-medium shadow-lg transition duration-300 hover:bg-black hover:text-white"
          >
            Explore Notes
          </Link>
          <Link
            href="/learning"
            className="border minion-yellow text-gray-300 hover:bg-minion-yellow hover:text-dark-charcoal rounded-md px-6 py-3 text-lg font-medium transition duration-300"
          >
            Start Learning
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
