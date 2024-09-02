import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAdventureWorksProductCategoriesTable1725166056583
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "adventureworks_product_categories",
        columns: [
          {
            name: "ProductCategoryKey",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
            isNullable: false,
          },
          {
            name: "CategoryName",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("adventureworks_product_categories")
  }
}
