export interface ICreateProductDTO {
  ProductName: string
  ProductSKU: string
  ProductDescription?: string
  ProductColor?: string
  ProductSize?: string
  ProductStyle?: string
  ProductCost: number
  ProductPrice: number
  ProductSubcategoryKey?: number
}
