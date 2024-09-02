import { DataSource } from "typeorm"
import path from "path"
import fs from "fs"
import dotenv from "dotenv"
dotenv.config()

const environment = process.env.NODE_ENV || "development"

if (environment === "development") {
  dotenv.config({ path: ".env.local" }) // Prioriza .env.local
} else {
  dotenv.config() // Carrega o .env padrão se .env.local não existir
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: parseInt(process.env.DATABASE_PORT || "5432"),
  username: process.env.DATABASE_USERNAME || "postgres",
  password: process.env.DATABASE_PASSWORD || "123456",
  database: process.env.DATABASE_NAME || "hacka-santo",
  synchronize: true, // Desative em produção
  logging: true,
  entities: [path.join(__dirname, "../modules/products/entities/*.ts")],
  migrations: ["src/database/migrations/*.ts"], // Diretório das migrations
})

//DELETE FROM product WHERE productNumber = 'P0001';

// yarn typeorm migration:create src/migrations/NomeDaMigracao2

// yarn migration:create src/database/migrations/Createe

// yarn typeorm migration:create AAA
// yarn typeorm migration:create AAA

// yarn typeorm migration:run -d src/data-source.ts

// docker-compose exec backend yarn typeorm migration:create src/database/migrations/InitialMigration

//yarn typeorm migration:generate -n NomeDaMigration -d src/database/data-source.ts

//npx ts-node ./node_modules/typeorm/cli.js migration:create src/database/migrations/NomeDaMigration

// yarn typeorm migration:show -d src/database/data-source.ts

// npx typeorm migration:create 

//Script para Rodar Migrations             yarn typeorm:run
//Script para Reverter Migrations          yarn typeorm:revert

/*
    "apply-migrations": "ts-node scripts/apply-migrations.ts",
    "revert-last-migration": "ts-node scripts/revert-last-migration.ts",
    "typeorm:reset-database": "ts-node scripts/reset-database.ts",
*/
