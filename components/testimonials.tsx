'use client'
import Link from 'next/link'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.',
    author: {
      name: 'Jospeh Jones',
      handle: 'JJones',
      imageUrl:
        'https://images.unsplash.com/photo-1542190891-2093d38760f2?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
  },
  {
    body: 'Distinctio facere aliquam est qui atque sint molestias ad. Fuga consequuntur asperiores voluptatum ipsum.',
    author: {
      name: 'Mes Raymano',
      handle: 'MessiRay',
      imageUrl:
        'https://images.unsplash.com/photo-1594032107547-3ce7d496c8ab?q=80&fit=facearea&facepad=2&w=256&h=256&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  },
  // More testimonials...
]

export default function Testimonials({ }) {
  return (
    <section id="testimonials" className='pb-32'>
      <h2 className='title mb-2'>Testimonials</h2>
      <p className='mt-3 font-light text-muted-foreground mb-16'>I have worked with some amazing people</p>
      <ul 
        className='grid grid-cols-2 gap-6'
      >
        {testimonials.map((testimonial, index) => (
          <motion.li 
            key={crypto.randomUUID()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link
              href={`#`}
              className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row hover:bg-gray-50 dark:hover:bg-slate-900/30 transition-all duration-500 p-6 rounded-lg group'
            >
              <div className='flex justify-start items-start gap-6'>
                <div className='w-16 h-16 overflow-hidden bg-transparent relative flex-shrink-0'>
                  <Image
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                    fill
                    className='rounded-lg object-cover object-center'
                  />
                </div>
              
                <div className='max-w-full group-hover:translate-x-1 duration-300'>
                  <blockquote className="line-clamp-4 text-base font-light text-foreground mb-4">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <div className="font-semibold text-foreground">{testimonial.author.name}</div>
                  <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}