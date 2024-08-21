import { URL } from '../../shared/values'

export default class ProductRepository implements IProductService {
  private url: string
  private storeName: string
  constructor(storeName: string) {
    this.url = URL
    this.storeName = storeName
  }
  public async getProducts(): Promise<ProductItem[]> {
    try {
      const fullUrl = `${this.url}/${this.storeName}/products`
      const response = await fetch(fullUrl, { method: 'GET' })
      const products = await response.json()
      return products as ProductItem[]
    } catch (error) {
      console.error(error)
      throw new Error("Can't get products")
    }
  }
  public getProduct(slug: string): Promise<ProductDetail> {
    try {
      const fullUrl = `${this.url}/${this.storeName}/products/${slug}`
      console.log('fullUrl', fullUrl)

      return fetch(fullUrl, { method: 'GET' })
        .then(response => response.json())
        .then(product => product as ProductDetail)
    } catch (error) {
      console.error(error)
      throw new Error("Can't get product")
    }
  }
}
