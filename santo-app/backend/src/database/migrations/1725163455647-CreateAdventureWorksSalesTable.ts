import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAdventureWorksSalesTable1725163455647
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "adventureworks_sales",
        columns: [
          {
            name: "OrderDate",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "StockDate",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "OrderNumber",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "ProductKey",
            type: "int",
            isNullable: false,
          },
          {
            name: "CustomerKey",
            type: "int",
            isNullable: false,
          },
          {
            name: "TerritoryKey",
            type: "int",
            isNullable: false,
          },
          {
            name: "OrderLineItem",
            type: "int",
            isNullable: false,
          },
          {
            name: "OrderQuantity",
            type: "int",
            isNullable: false,
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("adventureworks_sales")
  }
}
