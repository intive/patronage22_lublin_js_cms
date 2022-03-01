import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const addProductRequest = async (product: any, token: any | null) => {
  return axios(`${CONSTANTS.URL}/api/products/addProduct`, {
    method: "POST",
    data: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default addProductRequest;
