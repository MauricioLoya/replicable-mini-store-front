import Container from '@/components/Container'
import ShoppingCard from '@/modules/cart/ShoppingCart'

import React from 'react'
type Props = {}
const CartPage: React.FC<Props> = () => {
  return (
    <>
      <Container>
        <ShoppingCard />
      </Container>
    </>
  )
}

export default CartPage
