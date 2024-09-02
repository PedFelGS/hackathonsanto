export interface IListProductsDTO {
  page?: number
  limit?: number
  sort?: string // Coluna para ordenar, pode ser 'ProductName', 'ProductPrice', etc.
  order?: "ASC" | "DESC"
  ProductColor?: string
  ProductSize?: string
  ProductStyle?: string
  minPrice?: number
  maxPrice?: number
  ProductName?: string // Se você deseja buscar por nome, inclua este campo
}
