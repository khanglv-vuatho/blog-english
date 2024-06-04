type TProps = {
  title: string
}
const TitleLine = ({ title }: TProps) => {
  return (
    <div className='flex w-full items-center gap-2'>
      <p className='whitespace-nowrap text-xs font-bold uppercase tracking-[2px]'>{title}</p>
      <div className='h-[2px] w-full bg-[#eee]' />
    </div>
  )
}

export default TitleLine
