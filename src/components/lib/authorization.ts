import axios from "axios";
import { CONSTANTS } from "../../types/constants";

const loginUserRequest = async (email: string, password: string) => {
  const loginUser = axios(`${CONSTANTS.URL}/api/auth/login`, {
    method: "POST",
    data: { email, password },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return loginUser;
};

export default loginUserRequest;
