import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm"

export class CreateAdventureWorksProductSubcategoriesTable1725166504851
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "adventureworks_product_subcategories",
        columns: [
          {
            name: "ProductSubcategoryKey",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
            isNullable: false,
          },
          {
            name: "SubcategoryName",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "ProductCategoryKey",
            type: "int",
            isNullable: false,
          },
        ],
      })
    )

    await queryRunner.createForeignKey(
      "adventureworks_product_subcategories",
      new TableForeignKey({
        columnNames: ["ProductCategoryKey"],
        referencedColumnNames: ["ProductCategoryKey"],
        referencedTableName: "adventureworks_product_categories",
        onDelete: "CASCADE",
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(
      "adventureworks_product_subcategories"
    )
    const foreignKey = table!.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("ProductCategoryKey") !== -1
    )
    if (foreignKey) {
      await queryRunner.dropForeignKey(
        "adventureworks_product_subcategories",
        foreignKey
      )
    }
    await queryRunner.dropTable("adventureworks_product_subcategories")
  }
}
