import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { Router } from "express"

// Determinar a URL do servidor com base no ambiente
const isDocker = process.env.NODE_ENV === "docker"
const serverUrl = isDocker
  ? "http://localhost:8080" // URL do Docker
  : `http://localhost:${process.env.BACKEND_PORT || 8181}` // URL local

// Configurações do Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Comércio AdventureWorks",
      version: "1.0.0",
      description:
        "Documentação da API REST desenvolvida para o banco de dados AdventureWorks, que representa a empresa fictícia Adventure Works Cycles. Esta API permite a interação através de operações CRUD em produtos.",
    },
    servers: [
      {
        url: serverUrl, // URL do servidor
        description: isDocker ? "Docker server" : "Local server",
      },
    ],
    components: {
      schemas: {
        Product: require("./components/schemas/productSchema").default,
      },
    },
    paths: {
      "/products": {
        post: require("./components/operations/createProductOperation").default,
        get: require("./components/operations/listProductsOperation").default,
      },
      "/products/{id}": {
        get: require("./components/operations/getProductByIdOperation").default,
        put: require("./components/operations/updateProductOperation").default,
        delete: require("./components/operations/deleteProductOperation")
          .default,
      },
    },
  },
  apis: ["./src/routes/**/*.ts"],
}

// Gerar a documentação Swagger
const swaggerDocs = swaggerJsdoc(swaggerOptions)

const swaggerRouter = Router()

// Serve a documentação na rota /api-docs
swaggerRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export { swaggerRouter }
