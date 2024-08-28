import React from 'react'
import { Button } from './ui/button'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type ProjectLinksProps = {
  websiteUrl: string | undefined
  codeUrl: string | undefined
}

const ProjectLinks = ({ websiteUrl, codeUrl } : ProjectLinksProps ) => {
  return (
    <div className='flex justify-start items-center gap-2 my-6'>
      {websiteUrl && <Link href={websiteUrl} target='_blank'><Button variant={'outline'}><GlobeIcon className='w-4 h-4 mr-2' />Live Preview</Button></Link>}
      {codeUrl && <Link href={codeUrl} target='_blank'><Button variant={'outline'}><GitHubLogoIcon className='w-4 h-4 mr-2' />Code</Button></Link>}
    </div>
  )
}

export default ProjectLinks
