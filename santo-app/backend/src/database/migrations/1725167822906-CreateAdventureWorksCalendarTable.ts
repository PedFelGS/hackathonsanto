import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAdventureWorksCalendarTable1725167822906
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "adventureworks_calendar",
        columns: [
          {
            name: "Date",
            type: "date",
            isPrimary: true,
            isNullable: false,
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("adventureworks_calendar")
  }
}
