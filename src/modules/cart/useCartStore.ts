import { create } from 'zustand'

type State = {
  items: { quantity: number; variant: ProductVariant }[]
}

type Actions = {
  add: (quantity: number, variant: ProductVariant) => void
  remove: (index: number) => void
  editQuantity: (index: number, quantity: number) => void
}

const useCartStore = create<State & Actions>()(set => ({
  items: [],
  remove: index =>
    set(state => ({ items: state.items.filter((_, i) => i !== index) })),
  add: (quantity, variant) =>
    set(state => ({
      items: [...state.items, { quantity, variant }]
    })),
  editQuantity: (index, quantity) =>
    set(state => {
      const items = [...state.items]
      items[index].quantity = quantity
      return { items }
    })
}))

export { useCartStore }
