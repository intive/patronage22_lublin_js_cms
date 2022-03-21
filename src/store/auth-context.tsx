import React, { useEffect, useState } from "react";

type AuthContextObj = {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextObj>({
  token: "",
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC = (props) => {
  const getInitialToken = () => window.localStorage.getItem("token");

  const [token, setToken] = useState(getInitialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (userIsLoggedIn) {
      let timer = 900000; //15 minutes
      let logoutTimer = setTimeout(() => {
        logoutHandler();
      }, timer);
      ["click", "keydown", "keyup", "keypress", "scroll"].forEach((evt) =>
        window.addEventListener(evt, () => {
          console.log("wdw");
          clearTimeout(logoutTimer);
          logoutTimer = setTimeout(() => {
            logoutHandler();
          }, timer);
        })
      );
    }
  }, [userIsLoggedIn]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
