import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const token = window.localStorage.getItem("token")

const editCategory = async () => {
  return axios(`${CONSTANTS.URL}/api/categories/:id`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  });
};

const editCategoryRequest = async (title: string, description: string) => {
    return axios(`${CONSTANTS.URL}/api/categories/:id`, {
    method: "PUT",
    data: { title, description },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  });
}
  
export default editCategory;
export { editCategoryRequest };
  