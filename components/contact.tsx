import React from 'react'
import ContactForm from './contact-form'
import { GridBackgroundDemo } from './grid-basckground'

import gridImage from '@/public/images/accents/grid.svg'
import circleImage from '@/public/images/accents/circle.svg'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id='contact' className='pb-24 relative'>
      <GridBackgroundDemo />
      <div className=''>
        <h2 className='title'>Let&apos;s talk about your project</h2>

        <ContactForm />
      </div>
        <Image
          className='absolute -top-8 -left-24 opacity-10 -z-10'
          src={circleImage}
          alt='grid'
          width={168}
          height={168}
          priority
        />
    </section>
  )
}

export default Contact
