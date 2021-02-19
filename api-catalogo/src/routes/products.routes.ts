import { Router } from "express";
import { getRepository } from "typeorm";
import AppError from "../errors/AppError";

import { Products } from "../models/Products";
import CompactProductService from "../service/CompactProductService";

const productsRoutes = Router();

productsRoutes.get("/:id/complete", async (req, res) => {
  const { id } = req.params;
  const productsRepository = getRepository(Products);
  const product = await productsRepository.findOne({ where: { id } });

  if (!product) {
    throw new AppError("Product not found!", 404);
  }

  return res
    .status(200)
    .json({ ...product, categories: JSON.parse(product.categories) });
});

productsRoutes.get("/:id/compact", async (req, res) => {
  const { id } = req.params;
  const compactProductService = new CompactProductService();
  const {
    name,
    price,
    status,
    categories,
  } = await compactProductService.execute({ id });

  return res.status(200).json({ name, price, status, categories });
});

export default productsRoutes;
