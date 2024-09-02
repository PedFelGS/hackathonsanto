import "reflect-metadata"
import express from "express"
import { AppDataSource } from "./database/data-source"
import { routes } from "./routes"
import cors from "cors"
import { swaggerRouter } from "./config/swagger/swagger"

const app = express()
const PORT = process.env.SERVER_PORT || 8080

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
    console.log(
      `Connected to DB: ${process.env.DATABASE_NAME} on ${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}`
    )

    // Configuração de CORS - Permitir qualquer origem para desenvolvimento
    app.use(
      cors({
        origin: "http://localhost", // Altere conforme necessário
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Adicione outros métodos se necessário
      })
    )

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(routes)
    app.use(swaggerRouter)

    // Rota principal que retorna um objeto JSON
    app.get("/", (req, res) => {
      res.json({ message: "Oláa!" })
    })

    app.listen(PORT, () => {
      console.log(`Aplicação rodando na porta ${PORT}`)
    })
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })
