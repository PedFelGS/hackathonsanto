import { IProductsRepository } from "../../repositories/IProductsRepository"
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO"
import { Product } from "../../entities/Product"

export class UpdateProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute(id: string, data: IUpdateProductDTO): Promise<Product> {
    const existingProduct = await this.productsRepository.findById(
      parseInt(id, 10)
    )
    if (!existingProduct) {
      throw new Error("Product not found")
    }

    const updatedProduct = await this.productsRepository.update(
      parseInt(id, 10),
      data
    )
    return updatedProduct
  }
}
