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
//json
  images: Images;

  skus: Sku[];

  auditInfo:AuditInfo;

  details:Details;

  categories: Category[];

  extraInfo: ExtraInfo;

  installment: Installment;

}
interface ExtraInfo {
  hash: string;
}
interface Details {
  name: string;
  brand: string;
  rating: string;
  cod_venda: string;
  precoavista: string;
}
interface AuditInfo {
  updatedBy: string;
  updatedThrough: string;
}
interface Installment {
  count: number;
  price: number;
}
interface Sku {
  sku: string;
  properties: {
    name: string;
    installment: Installment;
    images: Images;
    price: number;
    url: string;
    status: string;
    oldPrice: number;
  };
}
interface Images {
  default: string;
}
interface Category {
  id: string;
  name: string;
  parents: string[];
}
interface Response {
  mostPopularProducts: Complete[];
  priceReductionProducts: Complete[];
}

const endpoint = "complete";

export default class FilterProductsCatalogoService {
  public async execute({
    mostPopular,
    priceReduction,
  }: Request): Promise<Response> {
    var popProducts = <Complete[]>[];
    var redProducts = <Complete[]>[];
    console.log("BUSCANDO: "+mostPopular.length+" products")

    for (let index = 0; index < mostPopular.length; index++) {
      var { id } = mostPopular[index].recommendedProduct;
      var { id: id2 } = priceReduction[index].recommendedProduct;

        var el=await api_catalogo.get<Complete>(`products/${id}/${endpoint}`)
        var el2=await api_catalogo.get<Complete>(`products/${id2}/${endpoint}`)


      console.log("STATUS: el = "+el.status+"  el2 = "+el2.status)
      console.log("PopProduct["+id+"]: "+el.data.name)
      console.log("PopProduct["+id2+"]: "+el2.data.name)
      if (el.status == 200 && el.data.status == "AVAILABLE") {
        popProducts.push(el.data);
      }

      if (el2.status == 200 && el2.data.status == "AVAILABLE") {
        redProducts.push(el2.data);
      }
    }
    console.log("PEGOU "+popProducts.length+" products popular")
    console.log("PEGOU "+redProducts.length+" products reduction")
    return {
      mostPopularProducts: popProducts,
      priceReductionProducts: redProducts,
    };
  }
}
