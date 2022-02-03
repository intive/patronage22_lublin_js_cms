import { useState, useCallback, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      axios(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        data: requestConfig.data ? JSON.stringify(requestConfig.data) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            authCtx.login(response.data.idToken);
            history.replace("/dashboard");
          } else {
            throw new Error("Authenfication Fail!");
          }
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data.error.message);
          setIsLoading(false);
        });
    },
    [authCtx, history]
  );

  return {
    isLoading,
    sendRequest,
  };
};

export default useHttp;
