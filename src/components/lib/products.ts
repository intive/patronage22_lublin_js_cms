import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const getProducts = async () => {
  const token = window.localStorage.getItem("token");

  return axios(`${CONSTANTS.URL}/api/products/getAllProducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default getProducts;
