'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiCoffee, FiHeart } from 'react-icons/fi'
import { usePortfolioData } from '@/hooks/usePortfolioData'

export default function About() {
  const { data } = usePortfolioData()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const bio = data?.personal?.bio || 'A highly skilled Software Engineer and Mobile Engineer with a strong background in backend development, specializing in designing and implementing robust, scalable, and efficient server-side solutions.'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const interests = [
    {
      icon: FiCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: FiCoffee,
      title: 'Problem Solving',
      description: 'Turning complex problems into simple solutions',
    },
    {
      icon: FiHeart,
      title: 'Innovation',
      description: 'Always learning and exploring new technologies',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-gradient">About Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">
                {data?.personal?.title || 'Software Engineer & Mobile Engineer'}
              </h3>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                {bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6">
                <div className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 inline-block">
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">3+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-6"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl glass hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <interest.icon className="w-8 h-8 text-primary-500 dark:text-primary-400 mb-4" />
                  <h4 className="text-xl font-semibold mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

