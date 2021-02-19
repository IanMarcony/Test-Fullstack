import { Router } from "express";
import { getRepository } from "typeorm";

import { Products } from "../models/Products";

const productsRoutes = Router();

productsRoutes.get("/:id/complete", async (req, res) => {
  const { id } = req.params;
  // const productsRepository = getRepository(Product);

  return await res.json({ id });
});

productsRoutes.get("/:id/compact", async (req, res) => {
  const { id } = req.params;
  // const productsRepository = getRepository(Product);

  return await res.json({ id });
});

export default productsRoutes;
