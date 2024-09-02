import { execSync } from "child_process"
import path from "path"

const migrationName = process.argv[2]

if (!migrationName) {
  console.error("Nome da migration não fornecido.")
  process.exit(1)
}

const migrationsDir = path.resolve(
  __dirname,
  "../src/database/migrations"
)
const migrationPath = path.join(migrationsDir, `${migrationName}`)

// Comando TypeORM
const command = `npx typeorm migration:create "${migrationPath}"`

try {
  console.log("Executando comando:", command)
  execSync(command, { stdio: "inherit" })
} catch (error) {
  console.error("Erro ao criar a migration:", error)
  process.exit(1)
}
