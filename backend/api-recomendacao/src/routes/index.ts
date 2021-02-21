import { Router } from "express";
import AppError from "../errors/AppError";
import { api_catalogo } from "../service/connection/api";
import productsRoutes from "./products.routes";

const routes = Router();
/**
 * Use routes
 */
routes.use("/products", productsRoutes);
routes.get("/", async (req, res) => {
  const p = await api_catalogo.get("/products/1001/complete");
  if (!p) {
    throw new AppError("Cannot to find Product", 404);
  }
  return res.json(p.data);
});

export default routes;
