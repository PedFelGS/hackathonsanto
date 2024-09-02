// src/modules/products/useCases/DeleteProduct/DeleteProductUseCase.ts

import { IProductsRepository } from "../../repositories/IProductsRepository"

export class DeleteProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute(id: number): Promise<void> {
    const product = await this.productsRepository.findById(id)
    if (!product) {
      throw new Error("Product not found")
    }

    await this.productsRepository.delete(id)
  }
}
