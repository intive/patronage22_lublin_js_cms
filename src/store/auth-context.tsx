import React, { useState, useEffect } from "react";

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

  // const websocketConn = new WebSocket("ws://localhost:3000/ws");

  // websocketConn.onopen = (e: Event) => {
  //   e.preventDefault();
  //   console.log("Connected!");
  // };

  // websocketConn.onclose = (e: Event) => {
  //   e.preventDefault();
  //   logoutHandler();
  //   console.log("Disconnected!");
  // };

  const contextValue = {
    token,
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
