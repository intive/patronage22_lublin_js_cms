import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const token = window.localStorage.getItem("token");

const uploadRequest = async (formData: FormData) => {
  return axios(`${CONSTANTS.URL}/uploadPhotos`, {
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default uploadRequest;
