import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Products {
  @PrimaryColumn("varchar")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  status: string;

  @Column("varchar")
  price: string;

  @Column("varchar")
  oldPrice: string;

  @Column("text")
  description: string;

  @Column("varchar")
  apiKey: string;

  @Column("varchar")
  type: string;

  @Column("varchar")
  brand: string;

  @Column("varchar")
  created: string;

  @Column("varchar")
  clientLastUpdated: string;

  @Column("varchar")
  version: string;

  @Column("varchar")
  url: string;
  //jsons

  @Column("text")
  images: string;
  @Column("text")
  skus: string;

  @Column("text")
  auditInfo: string;

  // @Column("text")
  // specs: string;

  @Column("text")
  details: string;

  @Column("text")
  categories: string;

  @Column("text")
  extraInfo: string;

  @Column("text")
  installment: string;
}

// class Sku {
//   sku: string;

//   specs: JSON;

//   properties: {
//     name: string;

//     installment: {
//       count: number;
//       price: number;
//     };

//     images: {
//       imagem1: string;
//       default: string;
//     };

//     price: number;
//     url: string;
//     details: {
//       precoavista: number;
//     };

//     status: string;

//     oldPrice: number;

//     customBusiness: JSON;
//   };
// }
