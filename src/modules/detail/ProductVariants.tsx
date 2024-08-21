'use client'
import React from 'react'
import AddToCartButton from '../cart/AddToCartButton'
type Props = {
  variants: ProductVariant[]
}
const ProductVariants: React.FC<Props> = ({ variants }) => {
  const [variant, setVariant] = React.useState<ProductVariant>(variants[0])
  const [quantity, setQuantity] = React.useState<number>(1)

  const selectVariant = (variant: ProductVariant) => {
    if (!variant) return
    setVariant(variant)
  }
  return (
    <>
      <div className="stat">
        <div className="stat-figure text-secondary">
          {variant.percentage_discount && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          )}
        </div>
        <div className="stat-title">Precio</div>
        {variant.percentage_discount ? (
          <>
            <div className="stat-value text-secondary">
              ${variant.discount_price}
            </div>
          </>
        ) : (
          <div className="stat-value text-secondary">${variant.price}</div>
        )}

        {variant.percentage_discount && (
          <div className="stat-desc">
            <span className="line-through">${variant.price}</span>{' '}
            {variant.percentage_discount}% Descuento
          </div>
        )}
      </div>
      <div className="flex items-center justify-start gap-4"></div>

      <div className="flex items-end gap-4">
        <AddToCartButton
          className="w-1/2"
          variant={variant}
          quantity={quantity}
        />
        <label className="form-control w-1/2">
          <div className="label">
            <span className="label-text">Cantidad: </span>
          </div>
          <select
            onChange={e => setQuantity(Number(e.target.value))}
            className="select select-primary w-full max-w-xs"
          >
            <option value={1} selected>
              1
            </option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
      </div>
      <div className="flex overflow-auto gap-4 p-4">
        {variants.map((v, index) => (
          <div
            key={index}
            onClick={() => selectVariant(v)}
            className={`card min-w-[200px] bg-base-100 shadow-md p-2 border-2  ${
              v.name === variant.name ? 'border-primary shadow-xl' : ''
            }`}
          >
            <img
              src={v.images[0]}
              alt="variant-image"
              className="rounded-lg object-cover w-full h-28 w-28 mb-2"
            />

            {Object.keys(v.variant_fields).map(key => (
              <p key={key} className="text-xs text-gray-500">
                <b>{key}</b> : {v.variant_fields[key]}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <small>Total: {variants.length}</small>
      </div>
    </>
  )
}

export default ProductVariants
