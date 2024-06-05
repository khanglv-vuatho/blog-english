import DetailPost from '.'

const ArtilesDetailPage = ({ params }: { params: { category: string; tag: string; id: string } }) => {
  return <DetailPost params={params} />
}

export default ArtilesDetailPage
