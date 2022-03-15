import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const token = window.localStorage.getItem("token");

const getPages = async () => {
  return await axios(`${CONSTANTS.URL}/api/pages`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const addPageRequest = async (page: {}) => {
  return await axios(`${CONSTANTS.URL}/api/pages/addPage`, {
    method: "POST",
    data: JSON.stringify(page),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getPages, addPageRequest };