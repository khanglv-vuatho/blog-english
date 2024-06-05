'use client'

import Article from '@/components/Article'
import { ListBreadcrumbs } from '@/components/Breadcrumbs'
import { InputSearch } from '@/components/Inputs'
import instance from '@/services/axiosConfig'
import { TArticle } from '@/type'
import { trasnformDataArticles } from '@/utils'
import { useEffect, useState } from 'react'

const ArtilesTag = ({ params }: { params: { category: string; tag: string } }) => {
  const [articles, setArticles] = useState<TArticle[]>([])
  const [onFetching, setOnFetching] = useState<boolean>(false)
  const [listBreadcrumbs, setListBreadcrumbs] = useState<any[]>([])

  const { category, tag } = params

  const handleFetchingArticles = async () => {
    try {
      const data: any = await instance.get('/v1/posts/supports/find-by-slug-tag', {
        params: {
          slugTag: tag,
          slugCategory: category
        }
      })
      setListBreadcrumbs([{ title: 'Home', url: '/' }, { title: data?.category?.title || category, url: `/${data?.category?.slug}` || '' }, { title: data?.tag?.title || tag }])
      setArticles(trasnformDataArticles(data.posts))
    } catch (error) {
      console.log(error)
    } finally {
      setOnFetching(false)
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
      {articles.length > 0 ? articles.map((item) => <Article key={item.url} {...item} />) : ''}
    </div>
  )
}

export default ArtilesTag
