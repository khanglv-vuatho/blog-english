'use client'

import instance from '@/services/axiosConfig'
import React, { useEffect, useState } from 'react'

const DetailPost = ({ params }: { params: { category: string; tag: string; id: string } }) => {
  const [detailData, setDetailData] = useState<{
    title: string
    detail: string
    views: number
    time: string
  }>()
  const [onFetching, setOnFetching] = useState(false)

  const { id } = params

  const handleFetchingData = async () => {
    try {
      const data: any = await instance.get(`/v1/posts/${id}`)
      setDetailData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setOnFetching(false)
    }
  }

  useEffect(() => {
    onFetching && handleFetchingData()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])
  return (
    <div className='flex flex-col gap-6 rounded-xl bg-white p-4'>
      <h1 className='text-xl font-semibold lg:text-3xl '>{detailData?.title}</h1>
      <div className='flex items-center gap-4'>
        <p>{detailData?.views} Views</p>
        <time>{detailData?.time}</time>
      </div>
      <div dangerouslySetInnerHTML={{ __html: detailData?.detail || '' }} />
    </div>
  )
}

export default DetailPost
