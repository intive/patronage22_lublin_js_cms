import axios from "axios";
import { CONSTANTS } from "../types/constants";

const loginUserRequest = async (email: string, password: string) => {
  return axios(`${CONSTANTS.URL}/api/auth/login`, {
    method: "POST",
    data: { email, password },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default loginUserRequest;
