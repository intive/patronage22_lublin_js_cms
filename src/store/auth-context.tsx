import React, { useState } from 'react';


type AuthContextObj = {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextObj>({
  token: '',
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC = (props) => {
  const getInitialToken = () => window.localStorage.getItem('token')
  
  const [token, setToken] = useState(getInitialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token: string ) => {
    setToken(token);
    localStorage.setItem('token', token)
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token')
  };

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