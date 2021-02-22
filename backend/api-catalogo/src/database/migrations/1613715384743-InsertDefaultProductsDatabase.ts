import { MigrationInterface, QueryRunner } from "typeorm";
import CatalogDefault from "./catalog.json";
import { Products } from "../../models/Products";

interface Category {
  id: string;
  name: string;
  parents: string[];
}
interface AuditInfo {
  updatedBy: string;
  updatedThrough: string;
}
interface Details {
  name: string;
  brand: string;
  rating: string;
  cod_venda: string;
  precoavista: string;
}
interface Installment {
  count: number;
  price: number;
}
interface ExtraInfo {
  hash: string;
}
interface Images {
  default: string;
}
interface Sku {
  sku: string;
  properties: {
    name: string;
    installment: Installment;
    images: Images;
    price: number;
    url: string;
    status: string;
    oldPrice: number;
  };
}
interface Product {
  id: string;

  name: string;

  status: string;

  price: string;

  oldPrice: string;

  description: string;

  apiKey: string;

  type: string;

  brand: string;

  created: string;

  clientLastUpdated: string;

  version: string;

  url: string;

  images: Images;

  skus: Sku[];

  auditInfo: AuditInfo;

  // specs: Object;

  details: Details;

  categories: Category[];

  extraInfo: ExtraInfo;

  installment: Installment;
}
export class InsertDefaultProductsDatabase1613715384743
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const products = <Product[]>CatalogDefault;

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
        images,
        categories,
        auditInfo,
        // specs,
        details,
        extraInfo,
        installment,
        skus,
      } = products[index];
      var categories_ = JSON.stringify(categories);
      var images_ = JSON.stringify(images);
      var skus_ = JSON.stringify(skus);
      var auditInfo_ = JSON.stringify(auditInfo);
      // var specs_ = JSON.stringify(specs);
      var details_ = JSON.stringify(details);
      var extraInfo_ = JSON.stringify(extraInfo);
      var installment_ = JSON.stringify(installment);
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
          images: images_,

          skus: skus_,
          auditInfo: auditInfo_,
          // specs: specs_,
          details: details_,
          categories: categories_,

          extraInfo: extraInfo_,
          installment: installment_,
        })
        .execute();
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETE FROM products");
  }
}
