'use client'

import React from 'react'
import ContactForm from './contact-form'
import { GridBackgroundDemo } from './grid-basckground'

import gridImage from '@/public/images/accents/grid.svg'
import circleImage from '@/public/images/accents/circle.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id='contact' className='pb-24 relative'>
      <GridBackgroundDemo />
      <div className=''>
        <h2 className='title'>Let&apos;s talk about your project</h2>

        <ContactForm />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='absolute -top-8 -left-24 opacity-10 -z-10'
      >
        <Image
          className=''
          src={circleImage}
          alt='grid'
          width={168}
          height={168}
          priority
        />
      </motion.div>
    </section>
  )
}

export default Contact
