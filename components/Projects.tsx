'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { usePortfolioData } from '@/hooks/usePortfolioData'

export default function Projects() {
  const { data } = usePortfolioData()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = data?.projects || [
    {
      title: 'GTWorld Mobile App',
      company: 'GTBank Rwanda',
      description:
        'Contributed to the end-to-end development of the GTWorld mobile app for GTBank Rwanda, supporting the implementation of key features, UI components, and secure user workflows.',
      image: '🏦',
      tags: ['Ionic', 'Angular', 'TypeScript', 'Mobile Development', 'Banking'],
      featured: true,
    },
    {
      title: 'PBF (Performance Based Financing)',
      company: 'HISP Rwanda',
      description:
        'Developed and maintained key features for Rwanda\'s Performance-Based Financing (PBF) mobile and web platforms, including data entry modules, performance dashboards, and user authentication workflows to improve health facility reporting and monitoring.',
      image: '📊',
      tags: ['Flutter', 'DHIS2', 'Mobile', 'Web', 'Healthcare'],
      featured: true,
    },
    {
      title: 'Orange Toolbox',
      company: 'GTBank Rwanda',
      description:
        'Designed and developed Orange Toolbox, a mobile application used by GTBank account officers to open accounts, onboard customers, and manage key banking internal operations in the field.',
      image: '🧰',
      tags: ['Mobile', 'Kotlin', 'Ionic', 'Flutter', 'Banking'],
    },
    {
      title: 'Payment Gateway Integration',
      company: 'GTBank Rwanda',
      description:
        'Integrated a third-party payment gateway with the bank\'s core system, facilitating real-time MoMo (Mobile Money) transactions to bank. Developed secure RESTful APIs and handled transaction status monitoring and error handling.',
      image: '💳',
      tags: ['REST APIs', 'Payment Gateway', 'Integration', 'Security', 'Backend'],
    },
    {
      title: 'Inventory Management System',
      company: 'IDEMBE Ltd',
      description:
        'Built a cross-platform mobile and web solution for small businesses to track inventory, manage stock levels, and generate real-time reports. Designed the backend architecture and contributed to frontend development.',
      image: '📦',
      tags: ['Mobile', 'Web', 'Backend', 'Database', 'Cross-platform'],
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
      id="projects"
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
            <span className="text-gradient">Featured Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="h-full p-6 rounded-xl glass hover:shadow-2xl transition-all overflow-hidden"
                  whileHover={{ y: -10 }}
                >
                  <div className="text-6xl mb-4 text-center animate-float">
                    {project.image}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                        Featured
                      </span>
                    )}
                  </div>
                  {project.company && (
                    <p className="text-sm text-primary-600 dark:text-primary-400 mb-3 font-semibold">
                      {project.company}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

