import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'
import { SectionHeading } from './section-heading'

export default async function RecentProjects() {
  const projects = await getProjects(4)

  return (
    <section id="projects" className='pb-24'>
      <div>
        <SectionHeading heading='Recent projects' />
        <Projects projects={projects} />

        <Link
          href='/projects'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}