'use client'

import { SocialNetwork } from '@/type'
import { Tooltip } from '@nextui-org/react'
import Link from 'next/link'
import React, { useState } from 'react'

const SocialIcon: React.FC<SocialNetwork> = ({ icon: icon, link, id, background }) => {
  const [onHover, setOnHover] = useState(false)
  return (
    <Tooltip
      content={id}
      closeDelay={150}
      classNames={{
        content: `${background} text-white`
      }}
      motionProps={{
        variants: {
          exit: {
            opacity: 0,
            transition: {
              duration: 0.1,
              ease: 'easeIn'
            }
          },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.15,
              ease: 'easeOut'
            }
          }
        }
      }}
    >
      <li className='group relative mx-2' key={id} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
        <Link
          href={link}
          target='_blank'
          className='relative flex size-12 items-center justify-center overflow-hidden rounded-[20%] bg-white text-[#4d4d4d] duration-300 hover:text-white hover:shadow-[3px_2px_45px_0px_rgb(0_0_0_/_50%)]'
        >
          <div className={`absolute bottom-0 left-0 top-auto h-0 w-full duration-300 group-hover:h-full ${background}`} />
          {id === 'Zalo'
            ? React.cloneElement(icon, {
                fill: onHover ? 'white' : '#0D308C',
                className: 'text-black relative z-[10] size-[30px]',
                fillHover: onHover ? '#0068FF' : '#fff'
              })
            : React.cloneElement(icon, {
                className: '*:group-hover:fill-white text-black relative z-[10] size-[30px]'
              })}
        </Link>
      </li>
    </Tooltip>
  )
}

export default SocialIcon
