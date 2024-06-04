'use client'

import Link from 'next/link'
import React from 'react'

import ImageFallback from '../ImageFallback'
import { TPost } from '@/type'

type TProps = {
  item: TPost
}

const CategoryPost = ({ item }: TProps) => {
  return (
    <Link href={item.url} key={item.title} className='relative'>
      <div className=''>
        <ImageFallback src={item.thumb} alt={item.thumb} className='max-h-[220px] w-full object-cover' />
      </div>
      <div className='absolute bottom-0 translate-y-1/2 px-4'>
        <div className='bg-white px-3 py-4 font-bold'>
          <p className='line-clamp-2'>{item.title}</p>
        </div>
      </div>
    </Link>
  )
}

export default CategoryPost
