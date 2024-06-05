'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { cn } from '@/utils/cn'
import Link from 'next/link'
import { TAccordionLink } from '@/type'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b last:border-b-0', className)} {...props} />
))

AccordionItem.displayName = 'AccordionItem'

interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  url: string
  className?: string
  children: React.ReactNode
}

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>(({ className, url, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex w-full items-center justify-between py-4 duration-200 hover:text-primary-green'>
    <Link href={url} className='w-full'>
      {children}
    </Link>
    <AccordionPrimitive.Trigger ref={ref} className={cn('[&[data-state=open]>div]:rotate-90', className)} {...props}>
      <div className='cursor-pointer p-2 duration-200  '>
        <ChevronDownIcon className='size-6 shrink-0 text-slate-500 transition-transform duration-200 dark:text-slate-400' />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content ref={ref} className='overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down' {...props}>
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
)
AccordionContent.displayName = AccordionPrimitive.Content.displayName

const AccordionLink = ({ data, onClose }: { data: any; onClose: () => void }) => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      {data?.map((item: any) => (
        <AccordionItem value={item.title} key={item.title}>
          <AccordionTrigger className={item.children ? 'rounded-lg bg-slate-100 hover:bg-slate-50' : 'hidden'} url={item.url}>
            <p className='py-2' onClick={onClose}>
              {item.title}
            </p>
          </AccordionTrigger>
          <AccordionContent className='flex w-full flex-col gap-2'>
            {item?.children?.map((itemChildren: any) => (
              <Link className='block w-full rounded-lg p-4 duration-200 hover:bg-primary-green hover:text-white' href={itemChildren.url} key={itemChildren.title} onClick={onClose}>
                {itemChildren.title}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionLink }
