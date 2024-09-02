import { IProductsRepository } from "../../repositories/IProductsRepository"
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO"
import { Product } from "../../entities/Product"

export class CreateProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute(data: ICreateProductDTO): Promise<Product> {
    // Verifica se todos os campos obrigatórios estão presentes
    if (
      !data.ProductName ||
      !data.ProductSKU ||
      data.ProductCost === undefined ||
      data.ProductPrice === undefined
    ) {
      throw new Error(
        "Os campos ProductName, ProductSKU, ProductCost e ProductPrice são obrigatórios"
      )
    }

    // Cria o produto no repositório
    const product = await this.productsRepository.create(data)
    return product
  }
}
