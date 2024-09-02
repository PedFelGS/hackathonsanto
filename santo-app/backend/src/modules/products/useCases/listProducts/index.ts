import { ListProductsUseCase } from "./ListProductsUseCase"
import { ListProductsController } from "./ListProductsController"

const listProductsUseCase = new ListProductsUseCase()
const listProductsController = new ListProductsController(listProductsUseCase)

export { listProductsController }
