import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import { Products } from "../models/Products";

interface Request {
  id: string;
}

interface Response {
  name: string;
  price: string;
  status: string;
  categories: string;
}

export default class CompactProductService {
  public async execute({ id }: Request): Promise<Response> {

    const productsRepository = getRepository(Products);
    const product = await productsRepository.findOne({ where: { id } });

    if (!product) {
      throw new AppError("Product not found!", 204);
    }
    const { name, price, status, categories } = product;
    return { ...product, categories: JSON.parse(categories) };
  }
}
