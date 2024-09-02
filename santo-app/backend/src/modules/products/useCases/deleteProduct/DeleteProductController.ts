import { Request, Response } from "express"
import { DeleteProductUseCase } from "./DeleteProductUseCase"

export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params // O id é recebido como string aqui

    // Converte o id de string para number!
    const productId = parseInt(id, 10)

    if (isNaN(productId)) {
      return res.status(400).json({ error: "Invalid product ID" })
    }

    try {
      await this.deleteProductUseCase.execute(productId)
      return res.status(204).send()
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred"

      console.error("Error deleting product:", errorMessage)

      return res.status(404).json({ error: errorMessage })
    }
  }
}
