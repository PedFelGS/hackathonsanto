import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProductsTable1725025619921 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "adventureworks_products",
        columns: [
          {
            name: "ProductKey",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
            isNullable: false,
          },
          {
            name: "ProductSubcategoryKey",
            type: "int",
            isNullable: true,
          },
          {
            name: "ProductSKU",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "ProductName",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "ModelName",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "ProductDescription",
            type: "varchar",
            length: "256",
            isNullable: true,
          },
          {
            name: "ProductColor",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "ProductSize",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "ProductStyle",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "ProductCost",
            type: "numeric",
            precision: 10,
            scale: 2,
            isNullable: true,
          },
          {
            name: "ProductPrice",
            type: "numeric",
            precision: 10,
            scale: 2,
            isNullable: true,
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("adventureworks_products")
  }
}
