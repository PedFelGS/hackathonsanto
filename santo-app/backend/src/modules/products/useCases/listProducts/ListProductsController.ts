import { Request, Response } from "express"
import { ListProductsUseCase } from "./ListProductsUseCase"

export class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {
        page = "1",
        limit = "10",
        sort = "ProductName",
        order = "ASC",
        color,
        minPrice,
        maxPrice,
      } = req.query as {
        page?: string
        limit?: string
        sort?: string
        order?: "ASC" | "DESC"
        color?: string
        minPrice?: string
        maxPrice?: string
      }

      const products = await this.listProductsUseCase.execute({
        page: Number(page),
        limit: Number(limit),
        sort: sort || "ProductName",
        order: order || "ASC",
        ProductColor: color,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
      })

      return res.status(200).json(products)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Error listing products" })
    }
  }

  async handleById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const product = await this.listProductsUseCase.executeById(id)
      if (!product) {
        return res.status(404).json({ error: "Product not found" })
      }
      return res.status(200).json(product)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Error retrieving product" })
    }
  }
}
