interface IProductService {
  getProducts(): Promise<ProductItem[]>
  getProduct(slug: string): Promise<ProductDetail>
}

type ProductItem = {
  id: number
  name: string
  description: string
  first_variant: {
    name: string
    price: number
    percentage_discount: number
    discount_price: number
    stock: number
    sku: string
    images: string[]
    variant_fields: Record<string, string>
  }
  slug: string
  has_variants: boolean
}

type ProductDetail = {
  id: number
  name: string
  slug: string
  description: string
  vendor: string
  variants: ProductVariant[]
  variants_fields: Record<string, string[]>
  meta: {
    meta_type: string
    content: string
    label: string
    is_active: boolean
  }[]
}

type ProductVariant = {
  name: string
  price: number
  percentage_discount: number
  discount_price: number
  stock: number
  sku: string
  images: string[]
  variant_fields: Record<string, string>
}
