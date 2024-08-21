import ProductDetail from '@/modules/detail/ProductDetail'
import React from 'react'
type Props = {
  params: Record<string, string>
}
const ProductoPage: React.FC<Props> = ({ params }) => {
  if (!params.slug) {
    throw new Error('Slug is required')
  }

  return <ProductDetail slug={params.slug} />
}

export default ProductoPage
