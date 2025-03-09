'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] bg-primary/10 rounded-lg"></div>
          <div>
            <p className="text-lg mb-4">
              Hi! I'm a passionate web developer with expertise in modern technologies.
              I love creating beautiful and functional web applications.
            </p>
            <p className="text-lg mb-4">
              My journey in web development started with a curiosity for creating
              interactive experiences. Now, I specialize in React, Next.js, and
              modern web technologies to bring creative visions to life.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 