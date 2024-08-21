import React from 'react'
import ProductRepository from '../service/ProductRepository'
import ProductCard from './ProductCard'
type Props = {}
const ListProducts: React.FC<Props> = async () => {
  const storeName = process.env.STORE_NAME as string
  const productRepository = new ProductRepository(storeName)
  const products = await productRepository.getProducts()
  return (
    <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mx-auto">
      {products.map(product => (
        <ProductCard
          name={product.name}
          description={product.description}
          image={product.first_variant.images[0]}
          price={product.first_variant.price}
          discount={product.first_variant.percentage_discount}
          discountPrice={product.first_variant.discount_price}
          slug={product.slug}
          key={product.id}
        />
      ))}
    </div>
  )
}

export default ListProducts
