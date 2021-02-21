import { Router } from "express";
import AppError from "../errors/AppError";

import CompactProductService from "../service/CompactProductService";
import CompleteProductService from "../service/CompleteProductService";

const productsRoutes = Router();

productsRoutes.get("/:id/complete", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new AppError("Product Id is missing");
  }

  const completeProductService = new CompleteProductService();
  const product = await completeProductService.execute({ id });
  return res.status(200).json(product);
});

productsRoutes.get("/:id/compact", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new AppError("Product Id is missing");
  }
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
