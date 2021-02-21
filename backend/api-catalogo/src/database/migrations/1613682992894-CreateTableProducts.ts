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
          {
            name: "images",
            type: "text",
          },
          {
            name: "skus",
            type: "text",
          },
          {
            name: "auditInfo",
            type: "text",
          },
          // {
          //   name: "specs",
          //   type: "text",
          //   default:"'{}'"
          // },
          {
            name: "details",
            type: "text",
          },
          {
            name: "categories",
            type: "text",
          },
          {
            name: "extraInfo",
            type: "text",
          },
          {
            name: "installment",
            type: "text",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
