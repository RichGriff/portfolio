import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-12 sm:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug} className='group'>
          <Link href={`/projects/${project.slug}`}>
            <div className=''>
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

              {/* <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' /> */}

              {/* <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                <h2 className='title line-clamp-1 text-xl no-underline'>
                  {project.title}
                </h2>
                <p className='line-clamp-1 text-sm text-muted-foreground'>
                  {project.summary}
                </p>
                <p className='text-xs font-light text-muted-foreground'>
                  {formatDate(project.publishedAt ?? '')}
                </p>
              </div> */}

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
                    <Image
                      key={stack}
                      src={`/images/logos/${stack}.svg`}
                      alt=''
                      width={stack === 'mongo' ? 14 : 28}
                      height={28}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}