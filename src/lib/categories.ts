import axios from "axios";
import { CONSTANTS } from "../types/constants";

const getCategories = async () => {
  return axios(`${CONSTANTS.URL}/api/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default getCategories;
