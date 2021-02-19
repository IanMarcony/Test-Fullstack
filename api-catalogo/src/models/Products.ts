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
  // @Column("varchar")
  // skus: string;

  // @Column("varchar")
  // auditInfo: string;

  // @Column("varchar")
  // specs: string;

  // @Column("varchar")
  // details: string;

  @Column("text")
  categories: string;

  // @Column("varchar")
  // extraInfo: string;

  // @Column("varchar")
  // installment: string;
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
