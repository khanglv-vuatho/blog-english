import { FacebookIcon, ZaloIcon } from '@/components/Icons'
import ImageFallback from '@/components/ImageFallback'
import SocialIcon from '@/components/SocialIcon'
import TitleLine from '@/components/TitleLine'
import TypingLetters from '@/components/TypingLetters'
import { SocialNetwork, TPost } from '@/type'
import { SplitString } from '@/utils'
import { Avatar, Button } from '@nextui-org/react'
import Link from 'next/link'

const RightMenu = () => {
  // const listSocial: TListSocial[] = [
  //   {
  //     url: 'https://www.facebook.com/tridang279',
  //     icon: <FacebookIcon />
  //   },
  //   {
  //     url: 'https://www.tiktok.com/tridang279',
  //     icon: <TiktokIcon />
  //   },
  //   {
  //     url: 'https://www.instagram.com/tridang279',
  //     icon: <LinkedinIcon />
  //   }
  // ]

  const socialNetworkList: SocialNetwork[] = [
    {
      id: 'Facebook',
      icon: <FacebookIcon />,
      link: 'https://www.facebook.com/vuathovietnam',
      background: 'bg-[#0068FF]',
      color: '#0068FF'
    }
  ]

  const dummyPost: TPost[] = [
    {
      thumb: '/demo3.jpeg',
      title: 'The true Church established by Second Coming Christ Ahnsahnghong according to the prophecies of the Bible',
      url: '/articles/category/tag/detail-blog'
    },
    {
      thumb: '/demo2.jpeg',
      title: 'The Church of God spreads true hope and happiness to all people in the world, following God’s words and example of love',
      url: '/articles/category/tag/detail-blog'
    }
  ]

  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col items-center gap-10'>
        <TitleLine title='ABOUT ME' />
        <Avatar src='/avatar.jpeg' alt='avatar' className='flex h-[240px] w-[240px] flex-shrink-0' />
        <div className='text-center'>
          <TypingLetters delay={0.005} words={SplitString('I am a passionate IELTS teacher dedicated to helping students achieve their dream scores with engaging and effective lessons.')} />
        </div>
      </div>
      <div className='flex flex-col items-center gap-6'>
        <TitleLine title='FOLLOW US' />
        <ul className='flex items-center justify-center'>
          {socialNetworkList.map((network) => (
            <SocialIcon key={network.id} {...network} />
          ))}
        </ul>
      </div>
      <div className='flex flex-col items-center gap-6'>
        <TitleLine title='RECENT POSTS' />
        <div className='flex flex-col gap-20'>
          {dummyPost.map((item) => (
            <Link href={item.url} key={item.title} className='relative max-w-[392px] lg:max-w-none'>
              <div className='size-full'>
                <ImageFallback src={item.thumb} alt={item.thumb} className='max-h-[220px]  w-full min-w-[340px]' />
              </div>
              <div className='absolute bottom-0 z-20 translate-y-1/2 px-4'>
                <div className='bg-white px-3 py-4 font-bold'>
                  <p className='line-clamp-2'>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className='flex flex-col items-center gap-6'>
        <TitleLine title='POPULAR POST' />
      </div> */}
    </div>
  )
}

export default RightMenu
