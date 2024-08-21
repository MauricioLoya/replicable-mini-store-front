'use client'

import React from 'react'
import { useCartStore } from './useCartStore'
type Props = {
  variant: ProductVariant
  quantity: number
  className?: string
}
const AddToCartButton: React.FC<Props> = ({ variant, quantity, className }) => {
  const [buttonText, setButtonText] =
    React.useState<string>('Agregar al carrito')
  const useCart = useCartStore(state => state)
  const [isAdding, setAdding] = React.useState<boolean>(false)

  const handleClick = () => {
    if (isAdding) return
    setAdding(true)
    setButtonText(`Agregando ${variant.name}...`)
    useCart.add(quantity, variant)
    setTimeout(() => {
      setButtonText(`${useCart.items.length + 1} artículos en el carrito`)
      setTimeout(() => {
        setButtonText('Agregar al carrito')
        setAdding(false)
      }, 2000)
    }, 1000)
  }

  return (
    <button onClick={handleClick} className={`btn btn-primary ${className}`}>
      {buttonText}
    </button>
  )
}

export default AddToCartButton
