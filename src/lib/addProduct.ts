import axios from "axios";
import { CONSTANTS } from "../types/constants";

const addProduct = async (product: any, token: string | null) => {
  return axios(`${CONSTANTS.URL}/api/products/addProduct`, {
    method: "POST",
    data: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default addProduct;
