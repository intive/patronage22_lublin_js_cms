import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const token = window.localStorage.getItem("token");

type EditCategoryRequestData = {
  title: string;
  description: string;
};

const getCategory = async (id: string) => {
  return axios(`${CONSTANTS.URL}/api/categories/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const editCategoryRequest = async (
  id: string,
  data: EditCategoryRequestData,
) => {
  return axios(`${CONSTANTS.URL}/api/categories/${id}`, {
    method: "PUT",
    data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
export { getCategory, editCategoryRequest };
