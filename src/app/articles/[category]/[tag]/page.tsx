'use client'

import Article from '@/components/Article'
import { ListBreadcrumbs } from '@/components/Breadcrumbs'
import { InputSearch } from '@/components/Inputs'
import instance from '@/services/axiosConfig'
import { TArticle } from '@/type'
import { useEffect, useState } from 'react'

const ArtilesTag = () => {
  const [articles, setArticles] = useState<TArticle[]>([])
  const [onFetching, setOnFetching] = useState<boolean>(false)

  const handleFetchingArticles = async () => {
    try {
      const data: any = await instance.get('/v1/posts')

      const transformData = data.map((item: any) => {
        console.log(item)
        return {
          description: item?.description,
          time: item?.createAt,
          tag: item?.tag?.title,
          urlTag: `/articles/${item?.category?.slug}/${item?.tag?.slug}`,
          title: item?.title,
          thumb: item?.thunbnail,
          url: `/articles/${item?.category?.slug}/${item?.tag?.slug}/${item?.slug}`
        }
      })

      setArticles(transformData)
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
      <InputSearch />
      {listArticles.length > 0 ? listArticles.map((item) => <Article key={item.url} {...item} />) : ''}
    </div>
  )
}

export default ArtilesTag
