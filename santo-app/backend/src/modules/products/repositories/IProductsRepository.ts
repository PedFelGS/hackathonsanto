import { Product } from "../entities/Product"
import { ICreateProductDTO } from "../dtos/ICreateProductDTO"

export interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>
  findById(ProductKey: number): Promise<Product | null>
  findAll(options: {
    page?: number
    limit?: number
    sort?: string
    order?: "ASC" | "DESC"
    ProductColor?: string
    minPrice?: number
    maxPrice?: number
  }): Promise<Product[]>
  update(ProductKey: number, data: Partial<Product>): Promise<Product>
  delete(ProductKey: number): Promise<void>
}
