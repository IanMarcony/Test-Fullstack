import AppError from "../errors/AppError";
import { api_algoritmo } from "./connection/api";

interface Request {
  maxProducts: number;
}

interface ApiResponse {
  weight: number;
  recommendedProduct: {
    id: string;
  };
}

interface Response {
  mostPopular: ApiResponse[];
  priceReduction: ApiResponse[];
}

export default class GetAllProductsService {
  public async execute({ maxProducts = 10 }: Request): Promise<Response> {
    const [
      popularProductsResponse,
      reductionProductsResponse,
    ] = await Promise.all([
      api_algoritmo.get("/mostpopular.json"),
      api_algoritmo.get("/pricereduction.json"),
    ]);
    if (!popularProductsResponse || !reductionProductsResponse) {
      throw new AppError("Error to get most popular/ price reduction products");
    }
    // console.log("Got ID's to filter")


    const popProducts = [];
    const redProducts = [];

    for (let index = 0; index < maxProducts; index++) {
      if (
        !popularProductsResponse.data[index] ||
        !reductionProductsResponse.data[index]
      ) {
        throw new AppError(
          "Error to get most popular/ price reduction products"
        );
      }
      redProducts.push(reductionProductsResponse.data[index]);

      popProducts.push(popularProductsResponse.data[index]);
    }



    return { mostPopular: popProducts, priceReduction: redProducts };
  }
}
