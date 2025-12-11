'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiEye } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import ResumeModal from './ResumeModal'
import { usePortfolioData } from '@/hooks/usePortfolioData'

interface Particle {
  x: number
  y: number
  duration: number
  offsetX: number
  offsetY: number
}

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [particles, setParticles] = useState<Particle[]>([])
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // Generate random positions only on client side
    const generatedParticles: Particle[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      offsetX: Math.random() * 20 - 10,
      offsetY: Math.random() * 20 - 10,
    }))
    setParticles(generatedParticles)
  }, [])

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const { data } = usePortfolioData()
  
  const socialLinks = data?.social ? [
    { icon: FiGithub, href: data.social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: data.social.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${data.social.email}`, label: 'Email' },
  ] : [
    { icon: FiGithub, href: 'https://github.com/Azabe', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/azabe-patrick/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:azabepatrick34@gmail.com', label: 'Email' },
  ]
  
  const personalInfo = data?.personal || {
    name: 'Patrick Azabe',
    title: 'Software Engineer',
    profileImage: '/azabe.jpg',
    resume: '/Patrick_Azabe_CV.pdf'
  }

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
            }}
            animate={{
              y: [`${particle.y}%`, `${particle.y + particle.offsetY}%`],
              x: [`${particle.x}%`, `${particle.x + particle.offsetX}%`],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 mt-8 md:mt-16 lg:mt-24"
        >
          <motion.div
            className="inline-block mb-4 relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
          >
            {!imageError ? (
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full rounded-full object-cover border-2 sm:border-[3px] md:border-4 lg:border-[5px] xl:border-[6px] border-white dark:border-gray-800 shadow-2xl"
                  onError={() => {
                    console.error('Failed to load profile image')
                    setImageError(true)
                  }}
                />
              </div>
            ) : (
              <span className="text-4xl sm:text-5xl md:text-6xl">👋</span>
            )}
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gradient animate-gradient bg-[length:200%_auto]">
            Hi, I'm {personalInfo.name}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          I design and implement robust, scalable server-side solutions and create
          beautiful, functional digital experiences
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.button
            onClick={() => setIsResumeModalOpen(true)}
            className="px-8 py-4 bg-white dark:bg-gray-800 text-slate-800 dark:text-blue-400 rounded-full font-semibold shadow-lg hover:shadow-xl border-2 border-slate-800 dark:border-blue-400 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <FiEye /> Preview Resume
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6 text-slate-800 dark:text-blue-400" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <a href="#about" className="text-gray-400 dark:text-gray-500">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  )
}

