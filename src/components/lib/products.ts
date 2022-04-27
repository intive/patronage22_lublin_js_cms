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

const addProductRequest = async (product: any) => {
  return axios(`${CONSTANTS.URL}/api/products/addProduct`, {
    method: "POST",
    data: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const editProductRequest = async (editedProduct: {}, id: number) => {
  return axios(`${CONSTANTS.URL}/api/products/${id}`, {
    method: "PUT",
    data: JSON.stringify(editedProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getProducts, addProductRequest, editProductRequest };
