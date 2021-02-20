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

  categories: Category[];
}
interface Category {
  id: string;
  name: string;
  parents: string[];
}

export default class CompleteProductService {
  public async execute({ id }: Request): Promise<Response> {
    console.log("Procurando produto: " + id);

    const productsRepository = getRepository(Products);
    const product = await productsRepository.findOne({ where: { id } });

    if (!product) {
      throw new AppError("Product not found!", 404);
    }

    return { ...product, categories: JSON.parse(product.categories) };
  }
}
