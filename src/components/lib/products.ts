import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const getProducts = async (token: string | null) => {
  const products = axios(`${CONSTANTS.URL}/api/products/getAllProducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return products;
};

export default getProducts;
