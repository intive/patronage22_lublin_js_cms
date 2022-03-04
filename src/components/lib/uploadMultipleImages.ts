import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const uploadImagesRequest = async (formData: any) => {
  return axios(`${CONSTANTS.URL}/api/photos/multiple`, {
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default uploadImagesRequest;
