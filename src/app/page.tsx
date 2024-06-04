import Article from '@/components/Article'
import TitleLine from '@/components/TitleLine'
import { TArticle } from '@/type'

export default function Home() {
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
    <div className='flex flex-col gap-6 lg:gap-10'>
      <TitleLine title='Popular Posts' />
      <div className='flex flex-col gap-6 lg:gap-10'>
        {listArticles.map((item) => (
          <Article key={item.url} {...item} />
        ))}
      </div>
    </div>
  )
}
