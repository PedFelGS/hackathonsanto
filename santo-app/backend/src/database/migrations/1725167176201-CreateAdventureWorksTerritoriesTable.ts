import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAdventureWorksTerritoriesTable1725167176201
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "adventureworks_territories",
        columns: [
          {
            name: "SalesTerritoryKey",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
            isNullable: false,
          },
          {
            name: "Region",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "Country",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "Continent",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("adventureworks_territories")
  }
}
