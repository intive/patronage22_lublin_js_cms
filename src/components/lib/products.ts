import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const token = window.localStorage.getItem("token");

const getProducts = async () => {
  return axios(`${CONSTANTS.URL}/api/products/getAllProducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const addProductRequest = async (product: {}) => {
  return axios(`${CONSTANTS.URL}/api/products/addProduct`, {
    method: "POST",
    data: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};


export {getProducts, addProductRequest}


