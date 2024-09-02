import fs from "fs"
import path from "path"

// Caminho para o diretório de migrations
const migrationsDir = path.resolve(__dirname, "../src/database/migrations")

const listMigrations = () => {
  try {
    // Verifica se o diretório de migrations existe
    if (!fs.existsSync(migrationsDir)) {
      console.error(`Diretório de migrations não encontrado: ${migrationsDir}`)
      process.exit(1)
    }

    // Lê os arquivos no diretório de migrations
    const files = fs.readdirSync(migrationsDir)

    if (files.length === 0) {
      console.log("Nenhuma migration encontrada.")
      return
    }

    console.log("Listagem de migrations:")
    files.forEach((file) => {
      console.log(`- ${file}`)
    })
  } catch (error) {
    console.error("Erro ao listar migrations:", error)
    process.exit(1)
  }
}

// Liste as migrations
listMigrations()
