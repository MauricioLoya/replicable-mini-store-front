'use client'
import React from 'react'
import { useCartStore } from './useCartStore'
import EmptyCart from './EmptyCart'
const ShoppingCard: React.FC = () => {
  const items = useCartStore(state => state.items)
  const editQuantity = useCartStore(state => state.editQuantity)
  const remove = useCartStore(state => state.remove)

  if (items.length === 0) {
    return <EmptyCart />
  }

  return (
    <>
      <section>
        <h2 className="text-xl font-semibold">
          Tu carrito: {items.length} articulos
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Nombre</th>
                <th>Contidad</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.variant.images[0]}
                            alt="product image"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.variant.name}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    <select
                      value={item.quantity}
                      onChange={e =>
                        editQuantity(index, Number(e.target.value))
                      }
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
                  </td>
                  <td>
                    {item.variant.percentage_discount > 0
                      ? item.variant.discount_price
                      : item.variant.price}
                    <br />
                    {item.variant.percentage_discount && (
                      <>
                        <span className="line-through">
                          {item.variant.price}
                        </span>
                        <span className="badge badge-ghost badge-sm">
                          {item.variant.percentage_discount}% Descuento
                        </span>
                      </>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => remove(index)}
                      className="btn btn-ghost btn-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Contidad</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="flex justify-center mt-10">
          <button className="btn btn-primary">Realizar Compra</button>
        </div>
      </section>
    </>
  )
}

export default ShoppingCard
