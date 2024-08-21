'use client'
import Icon from '@/components/Icon'
import Link from 'next/link'
import React from 'react'
import { useCartStore } from './useCartStore'
type Props = {}
const CartLink: React.FC<Props> = () => {
  const items = useCartStore(state => state.items)
  return (
    <Link href="/cart" className="btn btn-sm mr-2">
      <Icon className="h-5 w-5" name="shopping-cart-plus" />
      <div className="badge badge-secondary">{items.length}</div>
    </Link>
  )
}

export default CartLink
