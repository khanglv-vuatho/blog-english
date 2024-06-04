'use client'

import { TArticle } from '@/type'
import Link from 'next/link'
import ImageFallback from '../ImageFallback'
import { useRouter } from 'next/navigation'

const Article = ({ description, tag, time, urlTag, thumb, title, url }: TArticle) => {
  console.log({ description, tag, time, urlTag, thumb, title, url })
  const router = useRouter()
  return (
    <div onClick={() => router.push(url)} className='grid cursor-pointer items-center gap-2 md:grid-cols-2 md:gap-6'>
      <ImageFallback src={thumb} alt={thumb} className='min-h-[220px]' />
      <div className='flex h-full min-h-[220px] flex-col justify-between gap-2 py-2 '>
        <div className='flex flex-col gap-2 xl:gap-3 2xl:gap-4'>
          <div className='flex items-center gap-4'>
            <Link onClick={(e) => e.stopPropagation()} href={urlTag} className='font-bold text-[#ffb142]'>
              {tag}
            </Link>
            <time className='text-sm font-light text-[#333]'>{time}</time>
          </div>
          <p className='line-clamp-2 text-xl font-bold'>{title}</p>
          <p className='line-clamp-3 font-light'>{description}</p>
        </div>
        <Link href={url} className='font-semibold text-primary-blue duration-200 hover:text-primary-blue/80'>
          Read more
        </Link>
      </div>
    </div>
  )
}

export default Article
