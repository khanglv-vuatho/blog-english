'use client'

import Article from '@/components/Article'
import { ListBreadcrumbs } from '@/components/Breadcrumbs'
import { InputSearch } from '@/components/Inputs'
import { ToastComponent } from '@/components/ToastComponent'
import instance from '@/services/axiosConfig'
import { TArticle } from '@/type'
import { useEffect, useState } from 'react'

const ArtilesCategory = ({ params }: { params: { category: string } }) => {
  const { category } = params
  const [articles, setArticles] = useState<TArticle[]>([])
  const [onFetching, setOnFetching] = useState<boolean>(false)

  const handleFetchingArticles = async () => {
    try {
      const data: any = await instance.get('/v1/posts')
      setArticles(data)
    } catch (error: any) {
      ToastComponent({ type: 'error', message: error?.response.data.message })
    }
  }

  useEffect(() => {
    onFetching && handleFetchingArticles()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])

  const listBreadcrumbs = [
    { title: 'Home', url: '/' },
    {
      title: 'Test'
    }
  ]

  const listArticles: TArticle[] = [
    {
      thumb: '/demo2.jpeg',
      title: 'The Church of God spreads true hope and happiness to all people in the world, following God’s words and example of love',
      url: '/articles/category/tag/detail-blog',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corrupti officiis qui, obcaecati quibusdam voluptas unde repellendus? Eum dolorum voluptatum fugit soluta, iste aut, modi voluptates enim ut architecto qui!',
      tag: 'Test',
      time: '12/2/2023',
      urlTag: '/articles/test'
    },
    {
      thumb: '/demo2.jpeg',
      title: 'The Church of God spreads true hope and happiness to all people in the world, following God’s words and example of love',
      url: '/articles/category/tag/detail-blog',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corrupti officiis qui, obcaecati quibusdam voluptas unde repellendus? Eum dolorum voluptatum fugit soluta, iste aut, modi voluptates enim ut architecto qui!',
      tag: 'Test',
      time: '12/2/2023',
      urlTag: '/articles/test'
    }
  ]

  return (
    <div className='flex flex-col gap-6'>
      <ListBreadcrumbs list={listBreadcrumbs} />
      <InputSearch />
      {listArticles.map((item) => (
        <Article key={item.url} {...item} />
      ))}
    </div>
  )
}

export default ArtilesCategory
