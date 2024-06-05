'use client'

import Article from '@/components/Article'
import { ListBreadcrumbs } from '@/components/Breadcrumbs'
import { InputSearch } from '@/components/Inputs'
import { ToastComponent } from '@/components/ToastComponent'
import instance from '@/services/axiosConfig'
import { TArticle } from '@/type'
import { trasnformDataArticles } from '@/utils'
import moment from 'moment'
import { useEffect, useState } from 'react'

const ArtilesCategory = ({ params }: { params: { category: string } }) => {
  const [articles, setArticles] = useState<TArticle[]>([])
  const [onFetching, setOnFetching] = useState<boolean>(false)
  const [listBreadcrumbs, setListBreadcrumbs] = useState<any[]>([])

  const { category } = params

  const handleFetchingArticles = async () => {
    try {
      const data: any = await instance.get('/v1/posts/supports/find-by-slug-category', {
        params: {
          slug: category
        }
      })
      setListBreadcrumbs([{ title: 'Home', url: '/' }, { title: data?.category?.title || category }])
      setArticles(trasnformDataArticles(data.posts))
    } catch (error: any) {
      console.log(error)
    }
  }

  useEffect(() => {
    onFetching && handleFetchingArticles()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])

  return (
    <div className='flex flex-col gap-6'>
      <ListBreadcrumbs list={listBreadcrumbs} />
      <InputSearch />
      {articles.map((item) => (
        <Article key={item.url} {...item} />
      ))}
    </div>
  )
}

export default ArtilesCategory
