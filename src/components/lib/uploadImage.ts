import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const uploadRequest = async (formData: any) => {
  return axios(`${CONSTANTS.URL}/api/photos`, {
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default uploadRequest;
