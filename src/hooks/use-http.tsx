import { useState, useCallback, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const loginUserRequest = useCallback(
    async (email, password) => {
      setIsLoading(true);
      axios("http://localhost:8080/api/auth/login", {
        method: "POST",
        data: {
          email: email,
          password: password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            authCtx.login(response.data.token);
            history.replace("/dashboard");
          } else {
            throw new Error("Authenfication Fail!");
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            setError(error.response.data.msg);
          } else {
            setError(error.response.data.errors[0].msg);
          }
          console.log(error)
          setIsLoading(false);
        });
    },
    [authCtx, history]
  );

  return {
    isLoading,
    loginUserRequest,
    error,
  };
};

export default useHttp;
