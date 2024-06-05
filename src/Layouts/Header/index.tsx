'use client'

import Link from 'next/link'

import DropDownMenu from '@/components/Dropdown'
import { TYPESFROM } from '@/constants'
import { AccordionLink } from '@/lib/ui/accordion'
import instance from '@/services/axiosConfig'
import { TAccordionLink } from '@/type'
import { Button, Navbar } from '@nextui-org/react'
import { ArrowDown2, HambergerMenu } from 'iconsax-react'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const [onFetching, setOnFetching] = useState(false)

  const [menuListData, setMenuListData] = useState<TAccordionLink[]>([])

  const handleFetchingMenuList = async () => {
    try {
      const data: any = await instance.get('/v1/categorys', {
        params: {
          type: TYPESFROM.WEB
        }
      })

      setMenuListData(data)
    } catch (error) {}
  }

  useEffect(() => {
    onFetching && handleFetchingMenuList()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      classNames={{
        base: '*:max-w-none backdrop-blur-none data-[menu-open=true]:backdrop-blur-none backdrop-none bg-white *:px-0'
      }}
    >
      <div className='ct-container flex h-[60px] w-full items-center justify-between px-6'>
        <Link href={'/'}>
          <p className='font-bold'>IELTS TRIS</p>
        </Link>
        <div className='hidden lg:block'>
          <RenderListMenu setIsOpen={setIsOpen} menuList={menuListData as any} />
        </div>
        <Button onPress={() => setIsOpen(!isOpen)} isIconOnly className='flex items-center justify-center bg-transparent hover:bg-[#eee] lg:hidden'>
          <HambergerMenu />
        </Button>
      </div>
      <DropDownMenu isOpen={isOpen} onClose={() => setIsOpen(false)} className='h-full bg-white' direction='right'>
        <AccordionLink data={menuListData as any} onClose={() => setIsOpen(false)} />
      </DropDownMenu>
    </Navbar>
  )
}

export default Header

const RenderListMenu = ({ menuList, setIsOpen }: { menuList: TAccordionLink[]; setIsOpen: (isOpen: boolean) => void }) => {
  const pathName = usePathname()

  return (
    <div className='flex gap-8'>
      {menuList.map((menu, index) => {
        console.log({ menuUrl: menu.url })
        const active = menu.url === pathName
        return <ItemMenuList setIsOpen={setIsOpen} active={active} menu={menu} key={index} />
      })}
    </div>
  )
}

const ItemMenuList = ({ menu, setIsOpen, active }: { menu: TAccordionLink; setIsOpen: (isOpen: boolean) => void; active: boolean }) => {
  return (
    <div className={styles.list}>
      <Link className={twMerge(styles.menuItem, active && 'text-primary-green')} href={menu.url} onClick={() => setIsOpen(false)}>
        {menu.title}
      </Link>
      {menu?.children && (
        <div className={styles.moreIcon}>
          <ArrowDown2 size={16} />
        </div>
      )}
      {menu?.children && <div className={styles.lisItem}>{menu?.children.map((item, index) => <ItemMenu handleClose={() => setIsOpen(false)} menuChildren={item} key={index} />)}</div>}
    </div>
  )
}

const ItemMenu = ({ handleClose, menuChildren }: { handleClose: () => void; menuChildren: any }) => {
  return (
    <Link href={menuChildren.url} onClick={handleClose}>
      <div className={styles.menuItem}>{menuChildren.title}</div>
    </Link>
  )
}
