'use client'
import { motion } from 'framer-motion'

export const SectionHeading = ({ heading } : { heading: string }) => {
  return (
    <motion.h2 
      className='title mb-12'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {heading}
    </motion.h2>
  )
}
