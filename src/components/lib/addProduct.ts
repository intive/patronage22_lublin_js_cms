import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const addProductRequest = async (product: any) => {
  const token = window.localStorage.getItem("token");

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
