import Image from 'next/image'
import authorImage from '@/public/images/authors/richard.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Richard.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a full stack software developer based in Wales, United Kingdom. I&#39;m passionate about learning new technologies and sharing knowledge with others.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale aspect-square object-cover'
          src={'https://images.unsplash.com/photo-1521737451536-00a86f630f3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          alt='Richard Griffiths'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}