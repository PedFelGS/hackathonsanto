export interface Product {
  ProductKey: number // Identificador único do produto
  ProductSubcategoryKey: number
  ProductSKU: string
  ProductName: string
  ModelName: string | null
  ProductDescription: string
  ProductColor: string
  ProductSize: string
  ProductStyle: string
  ProductCost: number
  ProductPrice: number
}
