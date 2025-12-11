'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import { usePortfolioData } from '@/hooks/usePortfolioData'

export default function Experience() {
  const { data } = usePortfolioData()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = data?.experience || [
    {
      company: 'HISP Rwanda',
      position: 'Web & Mobile Apps Developer',
      period: 'August 2025 - Present',
      description:
        'Develop Android and hybrid mobile apps using Flutter. Build and maintain backend services and integrate RESTful APIs. Develop and maintain web applications built on DHIS2 platform.',
      type: 'Full-time',
      responsibilities: [
        'Developed Android and hybrid mobile apps using Flutter',
        'Built and maintained backend services and integrated RESTful APIs',
        'Develop and maintain web applications built on DHIS2',
      ],
    },
    {
      company: 'GTBank Rwanda',
      position: 'Software Engineer & Mobile Developer',
      period: 'Jul 2023 - August 2025',
      description:
        'Developed Android and hybrid mobile apps using Kotlin, Ionic, and Flutter. Built and maintained backend services and APIs. Integrated RESTful APIs and third-party SDKs. Led performance profiling, optimization, and release workflows via GitHub Actions.',
      type: 'Full-time',
      responsibilities: [
        'Developed Android and hybrid mobile apps using Kotlin, Ionic, and Flutter',
        'Built and maintained backend services and APIs',
        'Integrated RESTful APIs and third-party SDKs',
        'Led performance profiling, optimization, and release workflows via GitHub Actions',
      ],
    },
    {
      company: 'IDEMBE Ltd',
      position: 'Software Development Apprenticeship',
      period: 'Nov 2018 - Feb 2020',
      description:
        'Supported development of mobile user interface and backend components. Contributed to database integration and RESTful API consumption. Assisted in testing, debugging, and deployment of enterprise applications.',
      type: 'Apprenticeship',
      responsibilities: [
        'Supported development of mobile user interface and backend components',
        'Contributed to database integration and RESTful API consumption',
        'Assisted in testing, debugging, and deployment of enterprise applications',
      ],
    },
  ]

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="experience"
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
            <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="sticky top-24">
                      <motion.div
                        className="p-6 rounded-xl glass hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <FiBriefcase className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                        </div>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {exp.position}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <FiCalendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                          {exp.type}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <motion.div
                      className="p-6 rounded-xl glass hover:shadow-xl transition-all h-full"
                      whileHover={{ x: 5 }}
                    >
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      {exp.responsibilities && (
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                            >
                              <span className="text-primary-500 dark:text-primary-400 mt-1">
                                •
                              </span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="hidden md:block absolute left-1/3 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent transform -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

