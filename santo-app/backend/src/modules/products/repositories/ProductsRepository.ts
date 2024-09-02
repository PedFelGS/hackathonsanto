import { Repository } from "typeorm"
import { IProductsRepository } from "./IProductsRepository"
import { Product } from "../entities/Product"
import { ICreateProductDTO } from "../dtos/ICreateProductDTO"
import { AppDataSource } from "../../../database/data-source"

export class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Product)
  }

  async create(data: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      ProductName: data.ProductName,
      ProductSKU: data.ProductSKU,
      ProductDescription: data.ProductDescription,
      ProductColor: data.ProductColor,
      ProductSize: data.ProductSize,
      ProductStyle: data.ProductStyle,
      ProductCost: data.ProductCost,
      ProductPrice: data.ProductPrice,

      ProductSubcategoryKey: data.ProductSubcategoryKey,
    })

    await this.ormRepository.save(product)
    return product
  }

  async findById(id: number): Promise<Product | null> {
    const product = await this.ormRepository.findOneBy({ ProductKey: id })
    return product || null
  }

  async findAll({
    page = 1,
    limit = 10,
    sort = "ProductName",
    order = "ASC",
    ProductColor,
    minPrice,
    maxPrice,
  }: {
    page?: number
    limit?: number
    sort?: string
    order?: "ASC" | "DESC"
    ProductColor?: string
    minPrice?: number
    maxPrice?: number
  }): Promise<Product[]> {
    const query = this.ormRepository.createQueryBuilder("product")

    if (ProductColor) {
      query.andWhere("product.ProductColor = :ProductColor", { ProductColor })
    }
    if (minPrice !== undefined) {
      query.andWhere("product.ProductPrice >= :minPrice", { minPrice })
    }
    if (maxPrice !== undefined) {
      query.andWhere("product.ProductPrice <= :maxPrice", { maxPrice })
    }

    query.orderBy(`product.${sort}`, order.toUpperCase() as "ASC" | "DESC")
    query.skip((page - 1) * limit).take(limit)

    const products = await query.getMany()
    return products
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    await this.ormRepository.update(id, data)
    const updatedProduct = await this.findById(id)
    if (!updatedProduct) {
      throw new Error("Product not found")
    }
    return updatedProduct
  }

  async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id)
  }
}
