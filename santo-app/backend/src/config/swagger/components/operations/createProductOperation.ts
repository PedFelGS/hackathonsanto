import { OpenAPIV3 } from "openapi-types"

const createProductOperation: OpenAPIV3.OperationObject = {
  summary: "Criar um novo produto",
  description:
    "Endpoint para criar um novo produto na loja, adicionando informações como SKU, nome, descrição, cor, tamanho, estilo, custo e preço.",
  tags: ["Products"],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/Product",
        },
        examples: {
          example1: {
            summary: "Exemplo de corpo de requisição",
            value: {
              ProductSubcategoryKey: 1,
              ProductSKU: "SKU123",
              ProductName: "Produto Exemplo",
              ModelName: "Modelo A",
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
  responses: {
    201: {
      description: "Produto criado com sucesso",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Product",
          },
          examples: {
            example1: {
              summary: "Exemplo de corpo de resposta",
              value: {
                ProductKey: 1,
                ProductSubcategoryKey: 1,
                ProductSKU: "SKU123",
                ProductName: "Produto Exemplo",
                ModelName: "Modelo A",
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
                  "Mensagem de erro descrevendo por que a solicitação é inválida.",
              },
              details: {
                type: "object",
                description: "Detalhes adicionais sobre os erros de validação.",
                properties: {
                  ProductSKU: {
                    type: "string",
                    description: "Erro relacionado ao SKU do produto.",
                  },
                  ProductPrice: {
                    type: "string",
                    description: "Erro relacionado ao preço do produto.",
                  },
                },
              },
            },
            required: ["error"],
          },
          examples: {
            example1: {
              summary: "Exemplo de resposta de erro",
              value: {
                error: "Dados de entrada inválidos",
                details: {
                  ProductSKU: "O SKU deve ser uma string válida.",
                  ProductPrice: "O preço deve ser um número positivo.",
                },
              },
            },
          },
        },
      },
    },
    500: {
      description: "Erro interno do servidor",
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

export default createProductOperation
