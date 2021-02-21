import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import { Products } from "../models/Products";

interface Request {
  id: string;
}
interface Response {
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
//json
  images: Images;

  skus: Sku[];

  auditInfo:AuditInfo;

  details:Details;

  categories: Category[];

  extraInfo: ExtraInfo;

  installment: Installment;

}
interface ExtraInfo {
  hash: string;
}
interface Details {
  name: string;
  brand: string;
  rating: string;
  cod_venda: string;
  precoavista: string;
}
interface AuditInfo {
  updatedBy: string;
  updatedThrough: string;
}
interface Installment {
  count: number;
  price: number;
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
interface Images {
  default: string;
}
interface Category {
  id: string;
  name: string;
  parents: string[];
}

export default class CompleteProductService {
  public async execute({ id }: Request): Promise<Response> {


    const productsRepository = getRepository(Products);
    const product = await productsRepository.findOne({ where: { id } });

    if (!product) {
      throw new AppError("Product not found!", 204);
    }

    return { ...product,
      images: JSON.parse(product.images),
       skus:JSON.parse(product.skus),
       auditInfo:JSON.parse(product.auditInfo),details:JSON.parse(product.details), categories: JSON.parse(product.categories),
      extraInfo:JSON.parse(product.extraInfo),
    installment:JSON.parse(product.installment) };
  }
}
