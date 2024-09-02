import { OpenAPIV3 } from "openapi-types"

const deleteProductOperation: OpenAPIV3.OperationObject = {
  tags: ["Products"],
  summary: "Excluir um produto por ID",
  description: "Exclui um produto pelo seu ID numérico.",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      schema: {
        type: "integer",
        description: "O ID numérico do produto a ser excluído",
        example: 1,
      },
    },
  ],
  responses: {
    204: {
      description: "Produto excluído com sucesso",
    },
    400: {
      description: "ID de produto inválido",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                description:
                  "Mensagem de erro descrevendo por que o ID do produto é inválido.",
              },
            },
            required: ["error"],
          },
          examples: {
            example1: {
              summary: "Exemplo de resposta de erro",
              value: {
                error:
                  "ID de produto inválido. O ID deve ser um número positivo.",
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

export default deleteProductOperation
