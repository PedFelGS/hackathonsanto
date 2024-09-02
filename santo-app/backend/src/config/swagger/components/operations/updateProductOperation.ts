import { OpenAPIV3 } from "openapi-types"

const updateProductOperation: OpenAPIV3.OperationObject = {
  tags: ["Products"],
  summary: "Atualizar um produto por ID",
  description: "Atualiza um produto existente com base no seu ID.",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      schema: {
        type: "string",
        format: "int64",
        description: "O ID do produto a ser atualizado",
      },
    },
  ],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Product",
        },
        examples: {
          UpdateProductExample: {
            summary: "Exemplo de atualização de um produto",
            value: {
              ProductKey: 3,
              ProductSubcategoryKey: 1,
              ProductSKU: "SKU123",
              ProductName: "Produto Atualizado",
              ModelName: "Modelo Atualizado",
              ProductDescription: "Descrição atualizada do produto.",
              ProductColor: "Verde",
              ProductSize: "L",
              ProductStyle: "Moderno",
              ProductCost: 110.0,
              ProductPrice: 160.0,
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Produto atualizado com sucesso",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Product",
          },
          examples: {
            UpdateProductResponseExample: {
              summary: "Exemplo de resposta após atualização do produto",
              value: {
                ProductKey: 3,
                ProductSubcategoryKey: 1,
                ProductSKU: "SKU123",
                ProductName: "Produto Atualizado",
                ModelName: "Modelo Atualizado",
                ProductDescription: "Descrição atualizada do produto.",
                ProductColor: "Verde",
                ProductSize: "L",
                ProductStyle: "Moderno",
                ProductCost: 110.0,
                ProductPrice: 160.0,
              },
            },
          },
        },
      },
    },
    400: {
      description: "Dados de entrada inválidos",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                description:
                  "Mensagem de erro indicando dados de entrada inválidos.",
              },
            },
            required: ["error"],
          },
          examples: {
            example1: {
              summary: "Exemplo de resposta de erro de dados inválidos",
              value: {
                error: "Dados de entrada inválidos fornecidos.",
              },
            },
          },
        },
      },
    },
    404: {
      description: "Produto não encontrado",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                description:
                  "Mensagem de erro indicando que o produto não foi encontrado.",
              },
            },
            required: ["error"],
          },
          examples: {
            example1: {
              summary: "Exemplo de resposta de erro de produto não encontrado",
              value: {
                error: "Produto com o ID fornecido não encontrado.",
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

export default updateProductOperation
