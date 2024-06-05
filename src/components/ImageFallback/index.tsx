'use client'

import { Image } from '@nextui-org/react'
import { ImageProps } from 'next/image'
import { useState, forwardRef, Ref, memo } from 'react'
import { twMerge } from 'tailwind-merge'

type ImageFallbackProps = {
  fallback?: string
} & ImageProps

const ImageFallback = forwardRef(({ src, alt, className, fallback: customFallback = '/default.webp', ...props }: ImageFallbackProps, ref: Ref<HTMLImageElement>) => {
  const [fallback, setFallback] = useState<string | any>('')

  const _handleError = () => {
    setFallback(customFallback)
  }

  return <Image removeWrapper className={twMerge('rounded-none lg:pointer-events-none lg:select-none', className)} ref={ref} src={fallback || src} alt={alt} {...props} onError={_handleError} />
})

export default memo(ImageFallback)
