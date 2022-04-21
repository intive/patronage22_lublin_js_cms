import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const token = window.localStorage.getItem("token");

const getPages = async () => {
  return axios(`${CONSTANTS.URL}/api/pages`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const addPageRequest = async (payload: any) => {
  return axios(`${CONSTANTS.URL}/api/pages/addPage`, {
    method: "POST",
    data: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getPages, addPageRequest };
