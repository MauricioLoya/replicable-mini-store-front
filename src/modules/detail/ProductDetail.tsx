import React from 'react'
import ProductRepository from '../home/service/ProductRepository'
import ProductVariants from './ProductVariants'
type Props = {
  slug: string
}
const ProductDetail: React.FC<Props> = async ({ slug }) => {
  const storeName = process.env.STORE_NAME as string
  const productRepository = new ProductRepository(storeName)

  if (!slug) {
    throw new Error('Slug is required')
  }
  const product = await productRepository.getProduct(slug)

  if (!product) {
    throw new Error('Product not found')
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-8">
        <div className="grid gap-4">
          <img
            src={product.variants[0].images[0]}
            alt="Product Image"
            width={600}
            height={600}
            className="object-cover border w-full rounded-lg overflow-hidden"
          />
          <div className="hidden md:grid grid-cols-4 gap-3">
            {product.variants[0].images.map((image, index) => (
              <button
                key={image}
                className="border hover:border-primary rounded-lg overflow-hidden transition-colors"
              >
                <img
                  src={image}
                  alt="Preview thumbnail"
                  width={100}
                  height={120}
                  className="aspect-[5/6] object-cover"
                />
                <span className="sr-only">View Image {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
          <div>
            <p>{product.description}</p>
          </div>
          <ProductVariants variants={product.variants} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
