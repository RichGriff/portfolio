'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import TechStackItem from './tech-stack'
import { motion } from 'framer-motion'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-12 sm:grid-cols-2'>
      {projects.map((project, index) => (
        <motion.li
          key={project.slug}
          className='group'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Link href={`/projects/${project.slug}`}>
            <div>
              <div className='relative'>
                {project.image && (
                  <div className='h-72 w-full overflow-hidden bg-transparent sm:h-60'>
                    <Image
                      src={project.image}
                      alt={project.title || ''}
                      fill
                      className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                    />
                  </div>
                )}
              </div>

              <div className='mt-8 group-hover:translate-x-1 duration-300'>
                <h2 className='title line-clamp-1 text-xl no-underline mb-2'>
                  {project.title}
                </h2>
                <p className='line-clamp-1 text-sm text-muted-foreground'>
                  {project.summary}
                </p>
                <p className='text-xs font-light text-muted-foreground'>
                  {formatDate(project.publishedAt ?? '')}
                </p>
                <div className='py-4 flex justify-start items-center gap-4'>
                  {project.stack?.map(stack => (
                    <TechStackItem key={stack} stack={stack} />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}
