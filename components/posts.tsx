'use client'

import Link from 'next/link'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul 
      className='flex flex-col gap-8'
    >
      {posts.map((post, index) => (
        <motion.li 
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Link
            href={`/posts/${post.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row hover:bg-gray-50 dark:hover:bg-slate-900/30 transition-all duration-500 p-6 rounded-lg group'
          >
            <div className='max-w-lg group-hover:translate-x-1 duration-300'>
              <p className='text-lg font-semibold'>{post.title}</p>
              <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                {post.summary}
              </p>
              <div className='flex justify-start items-center gap-2 my-4'>
                {post.tags?.map(tag => (
                  <span key={tag} className="inline-flex items-center rounded-md bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-400/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {post.publishedAt && (
              <p className='mt-1 text-sm font-light'>
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}