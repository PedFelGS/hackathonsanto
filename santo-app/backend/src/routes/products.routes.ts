import { Router } from "express"
import { createProductController } from "../modules/products/useCases/createProduct"
import { listProductsController } from "../modules/products/useCases/listProducts"
import { updateProductController } from "../modules/products/useCases/updateProduct"
import { deleteProductController } from "../modules/products/useCases/deleteProduct"

const productsRouter = Router()

productsRouter.post("/", (req, res) => createProductController.handle(req, res))
productsRouter.get("/", (req, res) => listProductsController.handle(req, res))
productsRouter.get("/:id", (req, res) =>
  listProductsController.handleById(req, res)
)
productsRouter.put("/:id", (req, res) =>
  updateProductController.handle(req, res)
)
productsRouter.delete("/:id", (req, res) =>
  deleteProductController.handle(req, res)
)

export { productsRouter }
