import { OpenAPIV3 } from "openapi-types"

const listProductsOperation: OpenAPIV3.OperationObject = {
  summary: "Listar todos os produtos com paginação, filtragem e ordenação",
  tags: ["Products"],
  parameters: [
    {
      in: "query",
      name: "page",
      required: false,
      schema: {
        type: "integer",
        default: 1,
        description: "Número da página a ser recuperada (o padrão é 1)",
      },
    },
    {
      in: "query",
      name: "limit",
      required: false,
      schema: {
        type: "integer",
        default: 10,
        description: "Número de produtos por página (o padrão é 10)",
      },
    },
    {
      in: "query",
      name: "sort",
      required: false,
      schema: {
        type: "string",
        description:
          "Atributo para ordenação (ex.: 'ProductName', 'ProductPrice')",
      },
    },
    {
      in: "query",
      name: "order",
      required: false,
      schema: {
        type: "string",
        enum: ["ASC", "DESC"],
        default: "ASC",
        description: "Ordem de ordenação (o padrão é 'ASC')",
      },
    },
    {
      in: "query",
      name: "color",
      required: false,
      schema: {
        type: "string",
        description: "Filtrar produtos por cor",
      },
    },
    {
      in: "query",
      name: "minPrice",
      required: false,
      schema: {
        type: "number",
        format: "float",
        description: "Filtro de preço mínimo",
      },
    },
    {
      in: "query",
      name: "maxPrice",
      required: false,
      schema: {
        type: "number",
        format: "float",
        description: "Filtro de preço máximo",
      },
    },
  ],
  responses: {
    200: {
      description: "Lista de produtos com informações de paginação",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              products: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Product",
                },
                description:
                  "Lista de produtos que atendem aos critérios de pesquisa",
              },
              total: {
                type: "integer",
                description: "Número total de produtos disponíveis",
              },
              page: {
                type: "integer",
                description: "Número da página atual",
              },
              limit: {
                type: "integer",
                description: "Número de produtos por página",
              },
            },
          },
          examples: {
            ListProductsWithFilters: {
              summary:
                "Exemplo de listagem de produtos com filtros e ordenação",
              value: {
                products: [
                  {
                    ProductKey: 3,
                    ProductSubcategoryKey: 1,
                    ProductSKU: "SKU123",
                    ProductName: "Produto Exemplo",
                    ModelName: null,
                    ProductDescription: "Uma descrição detalhada do produto.",
                    ProductColor: "Vermelho",
                    ProductSize: "M",
                    ProductStyle: "Moderno",
                    ProductCost: 100.0,
                    ProductPrice: 150.0,
                  },
                  {
                    ProductKey: 4,
                    ProductSubcategoryKey: 1,
                    ProductSKU: "SKU124",
                    ProductName: "Outro Produto",
                    ModelName: null,
                    ProductDescription: "Outra descrição detalhada.",
                    ProductColor: "Azul",
                    ProductSize: "L",
                    ProductStyle: "Clássico",
                    ProductCost: 120.0,
                    ProductPrice: 180.0,
                  },
                ],
                total: 2,
                page: 1,
                limit: 10,
              },
            },
            ListProductsWithPagination: {
              summary: "Exemplo de listagem de produtos com paginação",
              value: {
                products: [
                  {
                    ProductKey: 3,
                    ProductSubcategoryKey: 1,
                    ProductSKU: "SKU123",
                    ProductName: "Produto Exemplo",
                    ModelName: null,
                    ProductDescription: "Uma descrição detalhada do produto.",
                    ProductColor: "Vermelho",
                    ProductSize: "M",
                    ProductStyle: "Moderno",
                    ProductCost: 100.0,
                    ProductPrice: 150.0,
                  },
                ],
                total: 1,
                page: 1,
                limit: 1,
              },
            },
            ListProductsWithoutFilters: {
              summary: "Exemplo de listagem de todos os produtos sem filtros",
              value: {
                products: [
                  {
                    ProductKey: 3,
                    ProductSubcategoryKey: 1,
                    ProductSKU: "SKU123",
                    ProductName: "Produto Exemplo",
                    ModelName: null,
                    ProductDescription: "Uma descrição detalhada do produto.",
                    ProductColor: "Vermelho",
                    ProductSize: "M",
                    ProductStyle: "Moderno",
                    ProductCost: 100.0,
                    ProductPrice: 150.0,
                  },
                  {
                    ProductKey: 4,
                    ProductSubcategoryKey: 1,
                    ProductSKU: "SKU124",
                    ProductName: "Outro Produto",
                    ModelName: null,
                    ProductDescription: "Outra descrição detalhada.",
                    ProductColor: "Azul",
                    ProductSize: "L",
                    ProductStyle: "Clássico",
                    ProductCost: 120.0,
                    ProductPrice: 180.0,
                  },
                ],
                total: 2,
                page: 1,
                limit: 10,
              },
            },
          },
        },
      },
    },
    400: {
      description: "Parâmetros de consulta inválidos",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                description: "Mensagem de erro indicando parâmetros inválidos.",
              },
            },
            required: ["error"],
          },
          examples: {
            example1: {
              summary: "Exemplo de resposta de erro de parâmetros inválidos",
              value: {
                error: "Parâmetros de consulta inválidos fornecidos.",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Erro no servidor",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                description:
                  "Mensagem de erro descrevendo um problema interno no servidor.",
              },
            },
            required: ["error"],
          },
          examples: {
            example1: {
              summary: "Exemplo de resposta de erro de servidor",
              value: {
                error:
                  "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
              },
            },
          },
        },
      },
    },
  },
}

export default listProductsOperation
