import axios from "axios";

export const api_catalogo = axios.create({
  baseURL: "http://localhost:3333",
});

export const api_algoritmo = axios.create({
  baseURL: "https://wishlist.neemu.com/onsite/impulse-core/ranking", //get mostpopular.json , pricereduction.json
});
