'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Input } from '@nextui-org/react'
import { Add, SearchNormal1 } from 'iconsax-react'

import { SearchSpiner } from '../Icons'

export const InputSearch = () => {
  const [searchValue, setSearchValue] = useState<string>(
    useSearchParams().get('search') || '',
  )

  const searchParams = useSearchParams()
  const [onSearching, setOnSearching] = useState<boolean>(false)

  const router = useRouter()

  const inputRef: any = useRef(null)

  const handleClearValue = () => {
    setSearchValue('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  const handleNavigate = useCallback(() => {
    if (searchParams.get('search')?.length || searchValue?.length) {
      router.push(`/articles?search=${searchValue?.trim()}&page=1`)
      if (inputRef.current) {
        inputRef.current.blur()
      }
    }
  }, [searchValue, searchParams.get('search')])

  const handleChangeValueSearch = (e: any) => {
    const value = e.target.value
    if (value.length < 70) setSearchValue(value)
  }

  useEffect(() => {
    setOnSearching(true)
    const debounceTimer = setTimeout(() => {
      setOnSearching(false)
    }, 500)

    return () => {
      clearTimeout(debounceTimer)
    }
  }, [searchValue])

  return (
    <Input
      autoComplete='off'
      value={searchValue}
      ref={inputRef}
      onChange={(e: any) => {
        handleChangeValueSearch(e)
      }}
      startContent={<SearchNormal1 size={24} className=' text-[#959595]' />}
      placeholder='Tìm kiếm'
      onKeyDown={(e: any) => {
        if (e.key === 'Enter') {
          handleNavigate()
        }
      }}
      endContent={
        !!searchValue?.length && (
          <div
            className={`cursor-pointer rounded-full ${!onSearching && 'bg-[#959595] hover:bg-[#959595]/40'}`}
            onClick={handleClearValue}
          >
            {onSearching ? (
              <SearchSpiner className='h-5 w-5 animate-spin text-[#959595]' />
            ) : (
              <Add size={16} className='rotate-45 text-white' />
            )}
          </div>
        )
      }
      classNames={{
        clearButton: 'pr-[10px]',
        innerWrapper:
          'py-4 px-2 data-[hover=true]:bg-white group-data-[focus=true]:bg-white bg-white ',
        input: 'placeholder: data-[has-start-content=true]:ps-[10px]',
        inputWrapper:
          'bg-white rounded rounded-full overflow-hidden data-[hover=true]:bg-white group-data-[focus=true]:bg-white h-[48px] shadow-[0px_4px_8px_0px_#ACACAC29] group-data-[focus=true]:border-none border-none',
      }}
    />
  )
}
