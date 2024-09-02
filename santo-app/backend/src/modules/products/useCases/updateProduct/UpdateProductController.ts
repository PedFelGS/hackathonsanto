import { Request, Response } from "express"
import { UpdateProductUseCase } from "./UpdateProductUseCase"
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO"

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const data: IUpdateProductDTO = req.body

    try {
      const product = await this.updateProductUseCase.execute(id, data)
      return res.status(200).json(product)
    } catch (error) {
      return res.status(404).json({ error: "Product not found" })
    }
  }
}
