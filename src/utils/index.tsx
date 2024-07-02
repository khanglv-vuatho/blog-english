import moment from 'moment'

const normalizeKeyword = (keyword: string) => {
  return (keyword as string)
    .normalize('NFD')
    .toLowerCase()
    .replace(/[\u0300-\u036f\s]/g, '')
    .replace('đ', 'd')
}
const trasnformDataArticles = (data: any) => {
  const newData = data.map((item: any) => {
    return {
      thumb: item?.thumbnail,
      title: item?.title,
      category: item?.category?.[0]?.title,
      url: `/${item?.category?.[0]?.slug}/${item?.tags?.[0]?.slug}/${item?.slug}`,
      description: item?.description,
      tag: item?.tags?.[0]?.title,
      time: moment(item?.createAt)?.format('DD/MM/YYYY'),
      urlTag: `/${item?.category?.[0]?.slug}/${item?.tags?.[0]?.slug}`
    }
  })
  return newData
}

const SplitString = (words: string) => {
  return words.split('')
}
export { SplitString, trasnformDataArticles, normalizeKeyword }
