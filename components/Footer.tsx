'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { usePortfolioData } from '@/hooks/usePortfolioData'

export default function Footer() {
  const currentYear = new Date().getFullYear()
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
  
  const name = data?.personal?.name || 'Patrick Azabe'

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="flex space-x-6 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            © {currentYear} <span className="text-primary-400 font-semibold">{name}</span>. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

