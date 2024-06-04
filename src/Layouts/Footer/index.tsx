import Link from 'next/link'

function Footer() {
  const listSocial = [{ title: '', url: '/', icon: '' }]
  return (
    <footer className='w-full h-[60px] flex items-center'>
      <div className=' flex items-center justify-between ct-container'>
        <div className=''>© English with Tris</div>
        <div className='socials flex gap-4'>
          {/* <Link href={'/'} className='cursor-pointer'>
            <YouTubeIcon fontSize='large' />
          </Link>
          <Link href={'https://www.facebook.com/tridang279'} className='cursor-pointer'>
            <FacebookIcon fontSize='large' />
          </Link>
          <Link href={'/'} className='cursor-pointer'>
            <TwitterIcon fontSize='large' />
          </Link> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
