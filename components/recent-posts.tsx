import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'
import { SectionHeading } from './section-heading'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section id='posts' className='pb-24'>
      <div>
        <SectionHeading heading='Recent posts' />
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All posts</span>
        </Link>
      </div>
    </section>
  )
}