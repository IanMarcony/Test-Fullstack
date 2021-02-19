import { MigrationInterface, QueryRunner } from "typeorm";
import CatalogDefault from "../../catalog.json";
import { Products } from "../../models/Products";

export class InsertDefaultProductsDatabase1613715384743
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const products = <Products[]>CatalogDefault;

    for (let index = 0; index < products.length; index++) {
      const {
        id,
        name,
        status,
        price,
        oldPrice,
        description,
        apiKey,
        type,
        brand,
        created,
        clientLastUpdated,
        version,
        url,
        // auditInfo,
        // specs,
        // details,
        // extraInfo,
        // installment,
      } = products[index];
      // var skus_ = JSON.stringify(skus);
      // var auditInfo_ = JSON.stringify(auditInfo);
      // var specs_ = JSON.stringify(specs);
      // var details_ = JSON.stringify(details);
      // var categories_ = JSON.stringify(categories);
      // var extraInfo_ = JSON.stringify(extraInfo);
      // var installment_ = JSON.stringify(installment);
      await queryRunner.connection
        .createQueryBuilder()
        .insert()
        .into(Products)
        .values({
          id,
          name,
          status,
          price,
          oldPrice,
          description,
          apiKey,
          type,
          brand,
          created,
          clientLastUpdated,
          version,
          url,

          // auditInfo,
          // specs,
          // details,

          // extraInfo,
          // installment,
        })
        .execute();
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETE FROM products");
  }
}
