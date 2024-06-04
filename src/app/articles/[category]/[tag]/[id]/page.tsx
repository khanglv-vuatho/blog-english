import Link from 'next/link'
import React from 'react'

const ArtilesDetail = () => {
  return (
    <div className='flex flex-col gap-6 rounded-xl bg-white p-4'>
      <h1 className='text-xl font-semibold lg:text-3xl '>
        The Church of God spreads true hope and happiness to all people in the world,
        following God’s words and example of love
      </h1>
      <div className='flex items-center gap-4'>
        <Link href={'articles/test'}>Test</Link>
        <time>07-05-2024</time>
      </div>
    </div>
  )
}

export default ArtilesDetail
