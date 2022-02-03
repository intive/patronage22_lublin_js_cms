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
      axios(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB89swc_F8hFkPq8xqnZVhKGmv0MrXMkP4",
        {
          method: "POST",
          data: {
            email: email,
            password: password,
            returnSecureToken: true,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
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
          setError(error.response.data.error.message);
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
