import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAdventureWorksCustomersTable1725166806077
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "adventureworks_customers",
        columns: [
          {
            name: "CustomerKey",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
            isNullable: false,
          },
          {
            name: "Prefix",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "FirstName",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "LastName",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "BirthDate",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "MaritalStatus",
            type: "varchar",
            length: "10",
            isNullable: true,
          },
          {
            name: "Gender",
            type: "varchar",
            length: "1",
            isNullable: true,
          },
          {
            name: "EmailAddress",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "AnnualIncome",
            type: "numeric",
            precision: 10,
            scale: 2,
            isNullable: true,
          },
          {
            name: "TotalChildren",
            type: "int",
            isNullable: true,
          },
          {
            name: "EducationLevel",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "Occupation",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
          {
            name: "HomeOwner",
            type: "boolean",
            isNullable: true,
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("adventureworks_customers")
  }
}
