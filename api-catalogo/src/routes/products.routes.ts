import { Router } from "express";
import { getRepository } from "typeorm";
import AppError from "../errors/AppError";

import { Products } from "../models/Products";
import CompactProductService from "../service/CompactProductService";

const productsRoutes = Router();

productsRoutes.get("/:id/complete", async (req, res) => {
  const { id } = req.params;
  const completeProductService = new CompactProductService();
  const product = await completeProductService.execute({ id });
  return res.status(200).json(product);
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
