'use client'

import Link from 'next/link'

import { Button, Navbar } from '@nextui-org/react'
import { ArrowDown2, HambergerMenu } from 'iconsax-react'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import DropDownMenu from '@/components/Dropdown'
import { TAccordionLink } from '@/type'
import { AccordionLink } from '@/lib/ui/accordion'
import instance from '@/services/axiosConfig'
import { TYPESDESTROY, TYPESFROM } from '@/constants'

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

  useEffect(() => {
    console.log({ menuListData })
  }, [menuListData])

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
          <RenderListMenu menuList={menuListData as any} />
        </div>
        <Button onPress={() => setIsOpen(!isOpen)} isIconOnly className='flex items-center justify-center bg-transparent hover:bg-[#eee] lg:hidden'>
          <HambergerMenu />
        </Button>
      </div>
      <DropDownMenu isOpen={isOpen} onClose={() => setIsOpen(false)} className='h-full bg-white' direction='right'>
        <AccordionLink data={menuListData as any} />
      </DropDownMenu>
    </Navbar>
  )
}

export default Header

const RenderListMenu = ({ menuList }: { menuList: TAccordionLink }) => {
  return (
    <div className='flex gap-8'>
      {menuList.map((menu, index) => (
        <ItemMenuList menu={menu} key={index} />
      ))}
    </div>
  )
}

const ItemMenuList = ({ menu }: { menu: any }) => {
  return (
    <div className={styles.list}>
      <Link className={styles.listTitle} href={menu.url}>
        {menu.title}
      </Link>
      {menu?.children && (
        <div className={styles.moreIcon}>
          <ArrowDown2 size={16} />
        </div>
      )}
      {menu?.children && <div className={styles.lisItem}>{menu?.children.map((item: any) => <ItemMenu handleClose={() => {}} menuChildren={item} key={item.id} />)}</div>}
    </div>
  )
}

const ItemMenu = ({ handleClose, menuChildren }: { handleClose: () => void; menuChildren: any }) => {
  return (
    <Link href={menuChildren.url}>
      <div className={styles.menuItem} onClick={handleClose}>
        {menuChildren.title}
      </div>
    </Link>
  )
}
