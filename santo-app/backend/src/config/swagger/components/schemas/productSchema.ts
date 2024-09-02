import { OpenAPIV3 } from "openapi-types"

const productSchema: OpenAPIV3.SchemaObject = {
  type: "object",
  properties: {
    ProductKey: {
      type: "integer",
      description: "Identificador único do produto",
    },
    ProductSubcategoryKey: {
      type: "integer",
      description: "Identificador da subcategoria do produto",
      nullable: true,
    },
    ProductSKU: {
      type: "string",
      description: "SKU (Stock Keeping Unit) do produto",
      nullable: true,
    },
    ProductName: {
      type: "string",
      description: "Nome do produto",
      nullable: true,
    },
    ModelName: {
      type: "string",
      description: "Nome do modelo do produto",
      nullable: true,
    },
    ProductDescription: {
      type: "string",
      description: "Descrição detalhada do produto",
      nullable: true,
    },
    ProductColor: {
      type: "string",
      description: "Cor do produto",
      nullable: true,
    },
    ProductSize: {
      type: "string",
      description: "Tamanho do produto",
      nullable: true,
    },
    ProductStyle: {
      type: "string",
      description: "Estilo do produto",
      nullable: true,
    },
    ProductCost: {
      type: "number",
      format: "float",
      description: "Custo do produto",
      nullable: true,
    },
    ProductPrice: {
      type: "number",
      format: "float",
      description: "Preço do produto",
      nullable: true,
    },
  },
  required: [
    "ProductKey",
    "ProductSubcategoryKey",
    "ProductSKU",
    "ProductName",
    "ProductDescription",
    "ProductColor",
    "ProductSize",
    "ProductStyle",
    "ProductCost",
    "ProductPrice",
  ],
  example: {
    ProductKey: 3,
    ProductSubcategoryKey: 1,
    ProductSKU: "SKU123",
    ProductName: "Produto Exemplo",
    ModelName: null,
    ProductDescription: "Uma descrição detalhada do produto.",
    ProductColor: "Azul",
    ProductSize: "M",
    ProductStyle: "Moderno",
    ProductCost: 100.0,
    ProductPrice: 160.0,
  },
}

export default productSchema
