import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const getPhotos = async () => {
  return axios(`${CONSTANTS.URL}/api/photos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default getPhotos;
