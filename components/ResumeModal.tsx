'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload } from 'react-icons/fi'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Resume / CV
              </h2>
              <div className="flex items-center gap-3">
                <motion.a
                  href="/Patrick_Azabe_CV.pdf"
                  download
                  className="p-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Download Resume"
                >
                  <FiDownload className="w-5 h-5" />
                </motion.a>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Close"
                >
                  <FiX className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="/Patrick_Azabe_CV.pdf"
                className="w-full h-full border-0"
                title="Resume PDF Viewer"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

