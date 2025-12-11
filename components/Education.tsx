'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiAward } from 'react-icons/fi'
import { usePortfolioData } from '@/hooks/usePortfolioData'

export default function Education() {
  const { data } = usePortfolioData()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = data?.education || [
    {
      degree: "Bachelor's Degree in Software Engineering",
      institution: 'Adventist University of Central Africa',
      iconName: 'award',
      type: 'University',
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'Ecole Technique Saint Kizito',
      iconName: 'book',
      type: 'Diploma',
    },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'award':
        return FiAward
      case 'book':
        return FiBook
      default:
        return FiBook
    }
  }

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

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900"
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
            <span className="text-gradient">Education</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => {
              const IconComponent = getIcon(edu.iconName)
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <motion.div
                    className="p-8 rounded-xl glass hover:shadow-2xl transition-all h-full border border-gray-200/50 dark:border-gray-700/50"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-4 mb-4 w-full">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 dark:from-blue-600 dark:to-blue-700 text-white flex-shrink-0 shadow-lg">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-2">
                            {edu.type}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <svg
                          className="w-5 h-5 text-primary-500 dark:text-primary-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <p className="font-semibold text-base">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

