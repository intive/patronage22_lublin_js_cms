import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const getProducts = async (token: string | null) => {
  return axios(`${CONSTANTS.URL}/api/products/getAllProducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default getProducts;
