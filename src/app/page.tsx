'use client'

import Article from '@/components/Article'
import TitleLine from '@/components/TitleLine'
import { ToastComponent } from '@/components/ToastComponent'
import { TYPESFROM } from '@/constants'
import instance from '@/services/axiosConfig'
import { TArticle } from '@/type'
import { useEffect, useState } from 'react'
import { trasnformDataArticles } from '@/utils'
import { motion } from 'framer-motion'

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
      ToastComponent({ type: 'error', message: error?.response?.data?.message })
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
        {articles.map((item, index) => (
          <motion.div key={item.url} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 * ((index + 1) * 0.2) }}>
            <Article {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
