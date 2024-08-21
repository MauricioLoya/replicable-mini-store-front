import Link from 'next/link'
import React from 'react'
type Props = {
  name: string
  description: string
  image: string
  price: number
  discount?: number
  discountPrice?: number
  slug: string
}
const ProductCard: React.FC<Props> = props => {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={props.image} className="h-full w-full object-cover" />
      </div>
      <div className="p-6 mb-14">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {props.name}
          </p>
        </div>
        <p className=" line-clamp-3 font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {props.description}
        </p>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="flex items-center justify-between p-6">
          <div>
            <p
              className={`block font-sans text-sm font-medium leading-normal text-gray-700 antialiased opacity-75 ${
                props.discount ? 'line-through ' : ''
              }`}
            >
              ${props.price}
            </p>
            {props.discount && (
              <p className="block font-sans text-sm font-medium leading-normal text-red-600 antialiased opacity-75">
                ${props.discountPrice}
              </p>
            )}
          </div>
          <Link href={`/producto/${props.slug}`}>
            <button
              className="block select-none rounded-lg bg-blue-gray-900/10 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Ver detalles
            </button>
          </Link>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className="card group transition-shadow duration-300 hover:shadow-xl bg-white rounded-lg shadow-md grid gap-4 p-4 relative">
  //     <span className="absolute -top-1 -right-2 ">
  //       {props.discount && (
  //         <span className="bg-red-500 text-white p-2 rounded-lg">
  //           -{props.discount}%
  //         </span>
  //       )}
  //     </span>
  //     <img
  //       className="w-full h-56 object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105"
  //       src={props.image}
  //       alt={props.name}
  //     />
  //     <div className="grid grid-cols-3">
  //       <h3 className="col-span-2">
  //         <Link
  //           className="text-base font-semibold text-gray-900 "
  //           href={`/product/${props.slug}`}
  //         >
  //           {props.name}
  //         </Link>
  //       </h3>
  //       <div className="flex items-center justify-end">
  //         <span className="bg-yellow-500 text-white p-1 rounded-lg">
  //           ${props.price}
  //         </span>
  //       </div>
  //       <p>
  //         {props.discount && (
  //           <span className="text-sm text-gray-500 line-through">
  //             ${props.discountPrice}
  //           </span>
  //         )}
  //       </p>
  //     </div>
  //   </div>
  // )
}

export default ProductCard
