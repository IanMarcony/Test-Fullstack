import { Router } from "express";
import AppError from "../errors/AppError";
import FilterProductsCatalogoService from "../service/FilterProductsCatalogoService";
import GetAllProductsService from "../service/GetAllProductsService";

const productsRoutes = Router();

productsRoutes.get("/", async (req, res) => {
  const { maxProducts } = req.query;
  if (!maxProducts) {
    throw new AppError("MaxProducts is missing");
  }
  var max = Number(maxProducts);
  if (max < 10) {
    max = 10;
  }

  const getAllProductsService = new GetAllProductsService();
  const { mostPopular, priceReduction } = await getAllProductsService.execute({
    maxProducts: max,
  });

  const filterProductsCatalogoService = new FilterProductsCatalogoService();
  const {
    mostPopularProducts,
    priceReductionProducts,
  } = await filterProductsCatalogoService.execute({
    mostPopular,
    priceReduction,
  });

  return res.json({ mostPopularProducts, priceReductionProducts });
});

export default productsRoutes;
