'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiDotnet,
  SiIonic,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFlutter,
  SiKotlin,
} from 'react-icons/si'
import { FiCode } from 'react-icons/fi'
import { usePortfolioData } from '@/hooks/usePortfolioData'

const iconMap: { [key: string]: any } = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  angular: SiAngular,
  nodejs: SiNodedotjs,
  java: SiOpenjdk,
  php: SiPhp,
  dotnet: SiDotnet,
  ionic: SiIonic,
  git: SiGit,
  flutter: SiFlutter,
  kotlin: SiKotlin,
}

const colorMap: { [key: string]: string } = {
  html: '#E34F26',
  css: '#1572B6',
  javascript: '#F7DF1E',
  typescript: '#3178C6',
  react: '#61DAFB',
  angular: '#DD0031',
  nodejs: '#339933',
  java: '#ED8B00',
  php: '#777BB4',
  dotnet: '#512BD4',
  ionic: '#3880FF',
  git: '#F05032',
  flutter: '#02569B',
  kotlin: '#7F52FF',
}

export default function Skills() {
  const { data } = usePortfolioData()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillsData = data?.skills || []
  const skills = skillsData.length > 0 
    ? skillsData.map((skill: any) => ({
        name: skill.name,
        icon: iconMap[skill.iconName?.toLowerCase()] || FiCode,
        level: skill.level,
        color: colorMap[skill.iconName?.toLowerCase()] || '#6366F1',
      }))
    : [
        { name: 'HTML & CSS', icon: SiHtml5, level: 90, color: '#E34F26' },
        { name: 'Java & Frameworks', icon: SiOpenjdk, level: 85, color: '#ED8B00' },
        { name: 'Flutter', icon: SiFlutter, level: 80, color: '#02569B' },
        { name: 'Ionic', icon: SiIonic, level: 80, color: '#3880FF' },
        { name: 'JavaScript', icon: SiJavascript, level: 80, color: '#F7DF1E' },
        { name: 'Kotlin', icon: SiKotlin, level: 75, color: '#7F52FF' },
        { name: 'Angular', icon: SiAngular, level: 75, color: '#DD0031' },
        { name: 'PHP', icon: SiPhp, level: 70, color: '#777BB4' },
        { name: 'TypeScript', icon: SiTypescript, level: 65, color: '#3178C6' },
        { name: 'C# & .NET', icon: SiDotnet, level: 60, color: '#512BD4' },
        { name: 'React', icon: SiReact, level: 75, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, level: 70, color: '#339933' },
        { name: 'Git', icon: SiGit, level: 85, color: '#F05032' },
      ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="skills"
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
            <span className="text-gradient">Skills & Technologies</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="p-6 rounded-xl glass hover:shadow-2xl transition-all cursor-pointer"
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <skill.icon
                    className="w-12 h-12 mx-auto mb-4"
                    style={{ color: skill.color }}
                  />
                  <h3 className="text-center font-semibold mb-2">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {skill.level}%
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

