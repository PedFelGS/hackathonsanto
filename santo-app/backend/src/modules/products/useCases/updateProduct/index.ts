import { ProductsRepository } from "../../repositories/ProductsRepository"
import { UpdateProductUseCase } from "./UpdateProductUseCase"
import { UpdateProductController } from "./UpdateProductController"

const productsRepository = new ProductsRepository()
const updateProductUseCase = new UpdateProductUseCase(productsRepository)
const updateProductController = new UpdateProductController(
  updateProductUseCase
)

export { updateProductController }
