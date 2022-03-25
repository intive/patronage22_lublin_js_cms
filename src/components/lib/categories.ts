import axios from "axios";
import {CONSTANTS} from "../../types/constants";

const token = window.localStorage.getItem("token");

const getCategories = async () => {
  return await axios(`${CONSTANTS.URL}/api/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default getCategories;
