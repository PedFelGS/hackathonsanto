import { ProductsRepository } from "../../repositories/ProductsRepository"
import { DeleteProductUseCase } from "./DeleteProductUseCase"
import { DeleteProductController } from "./DeleteProductController"

const productsRepository = new ProductsRepository()
const deleteProductUseCase = new DeleteProductUseCase(productsRepository)
const deleteProductController = new DeleteProductController(
  deleteProductUseCase
)

export { deleteProductController }
