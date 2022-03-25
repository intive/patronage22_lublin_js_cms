import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const token = window.localStorage.getItem("token");

const getOrders = async () => {
  return await axios(`${CONSTANTS.URL}/api/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default getOrders;
