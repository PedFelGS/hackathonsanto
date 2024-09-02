import { AppDataSource } from "../../../../database/data-source"
import { Product } from "../../entities/Product"
import { IListProductsDTO } from "../../dtos/IListProductsDTO"

export class ListProductsUseCase {
  async execute({
    page = 1,
    limit = 10,
    sort = "ProductName",
    order = "ASC",
    ProductColor,
    minPrice,
    maxPrice,
  }: IListProductsDTO) {
    const repository = AppDataSource.getRepository(Product)

    const query = repository.createQueryBuilder("product")

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

    const [products, total] = await query.getManyAndCount()

    return {
      products: products.map((product) => ({
        ...product,
        ProductCost:
          product.ProductCost != null
            ? parseFloat(product.ProductCost.toString())
            : undefined,
        ProductPrice:
          product.ProductPrice != null
            ? parseFloat(product.ProductPrice.toString())
            : undefined,
      })),
      total,
      page,
      limit,
    }
  }

  async executeById(id: string) {
    const repository = AppDataSource.getRepository(Product)

    try {
      const product = await repository.findOne({
        where: { ProductKey: parseInt(id, 10) },
      })

      if (!product) {
        console.error(`Product with ID ${id} not found`)
        return null
      }

      return {
        ...product,
        ProductCost:
          product.ProductCost != null
            ? parseFloat(product.ProductCost.toString())
            : undefined,
        ProductPrice:
          product.ProductPrice != null
            ? parseFloat(product.ProductPrice.toString())
            : undefined,
      }
    } catch (error) {
      console.error(`Error retrieving product with ID ${id}:`, error)
      throw new Error("Error retrieving product")
    }
  }
}
