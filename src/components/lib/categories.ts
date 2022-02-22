import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const getCategories = async () => {
  const categories = axios(`${CONSTANTS.URL}/api/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return categories;
};

export default getCategories;
