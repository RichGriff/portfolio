import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon, ChatBubbleIcon, GroupIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import ProjectLinks from '@/components/project-links'

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt, websiteUrl, codeUrl, contribute } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-5xl'>
        <Link
          href='/'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
          <div className='flex justify-start items-center gap-2'>
            <ProjectLinks websiteUrl={websiteUrl} codeUrl={codeUrl} />
            {contribute && <span className="inline-flex items-center rounded-md bg-emerald-400/10 px-3 py-2 text-sm font-medium text-emerald-500 ring-1 ring-inset ring-emerald-400/20">
              <ChatBubbleIcon className='mr-2'/>Contributor
            </span>}
          </div>
        </header>

        <main className='prose mt-16 dark:prose-invert max-w-full'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}