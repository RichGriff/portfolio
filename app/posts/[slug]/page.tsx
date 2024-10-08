import MDXContent from '@/components/mdx-content'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

const SinglePost = async ({ params } : { params: { slug: string }}) => {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if(!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, publishedAt, author } = metadata

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
        </header>

        <main className='prose mt-16 dark:prose-invert max-w-full'>
          <MDXContent source={content} />
        </main>

        {/* <footer className='mt-16'>
          <NewsletterForm />
        </footer> */}
      </div>
    </section>
  )
}

export default SinglePost
