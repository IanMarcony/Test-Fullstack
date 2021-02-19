import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableProducts1613682992894 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "price",
            type: "varchar",
          },
          {
            name: "oldPrice",
            type: "varchar",
          },
          {
            name: "description",
            type: "text",
          },
          {
            name: "apiKey",
            type: "varchar",
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "brand",
            type: "varchar",
          },
          {
            name: "created",
            type: "varchar",
          },
          {
            name: "clientLastUpdated",
            type: "varchar",
          },
          {
            name: "version",
            type: "varchar",
          },
          {
            name: "url",
            type: "varchar",
          },
          // {
          //   name: "skus",
          //   type: "json",
          // },
          // {
          //   name: "auditInfo",
          //   type: "json",
          // },
          // {
          //   name: "specs",
          //   type: "json",
          // },
          // {
          //   name: "details",
          //   type: "json",
          // },
          // // {
          // //   name: "categories",
          // //   type: "json",
          // // },
          // {
          //   name: "extraInfo",
          //   type: "json",
          // },
          // {
          //   name: "installment",
          //   type: "json",
          // },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
