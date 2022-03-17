import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const token = window.localStorage.getItem("token");

const addCategory = async (payload: any) => {
  return axios(`${CONSTANTS.URL}/api/categories/addCategory`, {
    method: "POST",
    data: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default addCategory;