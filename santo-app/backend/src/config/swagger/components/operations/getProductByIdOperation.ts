import { OpenAPIV3 } from "openapi-types"

const getProductOperation: OpenAPIV3.OperationObject = {
  tags: ["Products"],
  summary: "Obter um produto por ID",
  description: "Recupera um único produto utilizando seu ID.",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      schema: {
        type: "integer",
        format: "int64",
      },
      description: "O ID do produto a ser recuperado",
      example: 1,
    },
  ],
  responses: {
    200: {
      description: "Produto encontrado",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Product",
          },
          examples: {
            GetProductById: {
              summary: "Exemplo de recuperação de um produto por ID",
              value: {
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
              summary: "Exemplo de resposta de erro",
              value: {
                error: "Produto com o ID especificado não foi encontrado.",
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

export default getProductOperation
