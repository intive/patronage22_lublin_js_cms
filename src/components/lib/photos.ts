import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const token = window.localStorage.getItem("token");

const getPhotos = async () => {
  return await axios(`${CONSTANTS.URL}/api/photos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

const getAllPhotosByProductId = async (productId: string) => {
  return await axios(
    `${CONSTANTS.URL}/api/photos/getAllPhotosByProductId/${productId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const deletePhoto = async (photoId: number) => {
  return await axios(`${CONSTANTS.URL}/api/photos/deletePhotoById/${photoId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getPhotos, deletePhoto, getAllPhotosByProductId };
