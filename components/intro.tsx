'use client'

import Image from 'next/image'
import authorImage from '@/public/images/authors/rich_izee.jpg'
import { Button } from './ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { Spotlight } from './ui/spotlight'

export default function Intro() {
  const router = useRouter()

  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <Spotlight
        className="-top-40 left-0 md:left-40 md:-top-40 z-50"
        fill="white"
      />
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Richard.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a full stack software developer based in Wales, United Kingdom. I&#39;m passionate about learning new technologies and sharing knowledge with others.
        </p>
        <div className='mt-10 flex justify-start items-center gap-2'>
          <Button variant={'outline'} onClick={() => router.push('projects')}>See Projects</Button>
          <Button 
            variant={'ghost'} 
            className='group'
            onClick={() => router.push('contact')}
          >
            Get in touch 
            <ArrowRightIcon className='ml-2 w-4 h-4 group-hover:translate-x-1' />
          </Button>
        </div>
      </div>
      <div className='relative w-[100px] h-[100px] md:w-[300px] md:h-[300px]'>
        <Image
          className='flex-1 rounded-lg grayscale aspect-square object-cover'
          src={authorImage}
          alt='Richard Griffiths'
          fill
          priority
        />
      </div>
    </section>
  )
}