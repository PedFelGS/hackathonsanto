import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAdventureWorksReturnsTable1725167538402
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "adventureworks_returns",
        columns: [
          {
            name: "ReturnDate",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "TerritoryKey",
            type: "int",
            isNullable: true,
          },
          {
            name: "ProductKey",
            type: "int",
            isNullable: true,
          },
          {
            name: "ReturnQuantity",
            type: "int",
            isNullable: true,
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("adventureworks_returns")
  }
}
