import { Request, Response } from "express"
import { CreateProductUseCase } from "./CreateProductUseCase"

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    // Extrai os campos do corpo da requisição
    const {
      ProductName,
      ProductSKU,
      ProductDescription,
      ProductColor,
      ProductCost,
      ProductPrice,
      ProductSubcategoryKey,
      ProductSize,
      ProductStyle,
    } = req.body

    // Verifica se todos os campos obrigatórios estão presentes
    if (
      !ProductName ||
      !ProductSKU ||
      ProductCost === undefined ||
      ProductPrice === undefined
    ) {
      return res.status(400).json({
        error:
          "Os campos ProductName, ProductSKU, ProductCost e ProductPrice são obrigatórios",
      })
    }

    // Executa o use case para criar o produto
    const product = await this.createProductUseCase.execute({
      ProductName,
      ProductSKU,
      ProductDescription,
      ProductColor,
      ProductCost,
      ProductPrice,
      ProductSubcategoryKey,
      ProductSize,
      ProductStyle,
    })

    return res.status(201).json(product)
  }
}
