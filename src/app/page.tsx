'use client'

import moment from 'moment'
import Article from '@/components/Article'
import TitleLine from '@/components/TitleLine'
import { ToastComponent } from '@/components/ToastComponent'
import { TYPESFROM } from '@/constants'
import instance from '@/services/axiosConfig'
import { TArticle } from '@/type'
import { useEffect, useState } from 'react'
import { trasnformDataArticles } from '@/utils'

export default function Home() {
  const [articles, setArticles] = useState<TArticle[]>([])
  const [onFetching, setOnFetching] = useState<boolean>(false)

  const handleGetAllArticles = async () => {
    try {
      const data: any = await instance.get('/v1/posts', {
        params: {
          type: TYPESFROM.WEB
        }
      })

      setArticles(trasnformDataArticles(data))
    } catch (error: any) {
      console.log(error)
      ToastComponent({ type: 'error', message: error?.response.data.message })
    } finally {
      setOnFetching(false)
    }
  }

  useEffect(() => {
    onFetching && handleGetAllArticles()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])

  return (
    <div className='flex flex-col gap-6 lg:gap-10'>
      <TitleLine title='Popular Posts' />
      <div className='flex flex-col gap-6 lg:gap-10'>
        {articles.map((item) => (
          <Article key={item.url} {...item} />
        ))}
      </div>
    </div>
  )
}
