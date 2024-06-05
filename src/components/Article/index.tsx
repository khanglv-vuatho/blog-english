'use client'

import { TArticle } from '@/type'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ImageFallback from '../ImageFallback'

const Article = ({ description, tag, time, urlTag, thumb, title, url }: TArticle) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(url)} className='grid cursor-pointer items-center rounded-2xl bg-white shadow-lg md:grid-cols-2'>
      <div className='size-full max-h-[380px] md:max-h-[220px]'>
        <ImageFallback src={thumb} alt={thumb} className='size-full object-cover' />
      </div>
      <div className='flex min-h-[220px] flex-col justify-between gap-2 p-4 md:px-6'>
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
        <Link href={url} className='font-semibold text-primary-green duration-200 hover:text-primary-green/80'>
          Read more
        </Link>
      </div>
    </div>
  )
}

export default Article
