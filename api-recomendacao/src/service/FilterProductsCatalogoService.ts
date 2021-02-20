import { api_catalogo } from "./connection/api";

interface Filter {
  weight: number;
  recommendedProduct: {
    id: string;
  };
}
interface Request {
  mostPopular: Filter[];
  priceReduction: Filter[];
}
interface Category {
  id: string;
  name: string;
  parents: string[];
}
interface Compact {
  name: string;
  price: string;
  status: string;
  categories: Category[];
}
interface Complete {
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

  // skus: JSON;

  // auditInfo: JSON;

  // specs: JSON;

  // details: JSON;

  categories: Category[];

  // extraInfo: JSON;

  // installment: JSON;
}
interface Response {
  mostPopularProducts: Compact[];
  priceReductionProducts: Compact[];
}

const endpoint = "compact";

export default class FilterProductsCatalogoService {
  public async execute({
    mostPopular,
    priceReduction,
  }: Request): Promise<Response> {
    var popProducts = <Compact[]>[];
    var redProducts = <Compact[]>[];

    for (let index = 0; index < mostPopular.length; index++) {
      var { id } = mostPopular[index].recommendedProduct;
      var { id: id2 } = priceReduction[index].recommendedProduct;

      var [el, el2] = await Promise.all([
        api_catalogo.get<Compact>(`products/${id}/${endpoint}`),
        api_catalogo.get<Compact>(`products/${id2}/${endpoint}`),
      ]);
      if (el.status < 300 && el.data.status == "AVAILABLE") {
        popProducts.push(el.data);
      }

      if (el2.status < 300 && el2.data.status == "AVAILABLE") {
        redProducts.push(el2.data);
      }
    }

    return {
      mostPopularProducts: popProducts,
      priceReductionProducts: redProducts,
    };
  }
}
