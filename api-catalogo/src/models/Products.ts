import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Products {
  @PrimaryColumn({ type: "varchar" })
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "varchar" })
  price: string;

  @Column({ type: "varchar" })
  oldPrice: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "varchar" })
  apiKey: string;

  @Column({ type: "varchar" })
  type: string;

  @Column({ type: "varchar" })
  brand: string;

  @Column({ type: "varchar" })
  created: string;

  @Column({ type: "varchar" })
  clientLastUpdated: string;

  @Column({ type: "varchar" })
  version: string;

  @Column({ type: "varchar" })
  url: string;

  // @Column("json")
  // skus: JSON[];

  // @Column("json")
  // auditInfo: JSON;

  // @Column("json")
  // specs: JSON;

  // @Column("json")
  // details: JSON;

  // @Column("json")
  // categories: JSON[];

  // @Column("json")
  // extraInfo: JSON;

  // @Column("json")
  // installment: JSON;
}

// class Category {
//   id: string;
//   name: string;
//   parents: string[];
// }

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
