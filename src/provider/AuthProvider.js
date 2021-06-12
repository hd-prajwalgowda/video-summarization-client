import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignin] = useState(false);
  const [apiUrl, setApiUrl] = useState('http://localhost:8080/');

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      // let user = localStorage.getItem('user');
      // setUser(JSON.parse(user));
      setSignin(true);
    }
  }, []);

  const login = async ({ user, access_token,refresh_token }, cb) => {
    setUser(user);
    setSignin(true);
    console.log(user, access_token, refresh_token)
    storeUserDetailsAndToken(user, access_token, refresh_token);
  };

  const logout = async (cb) => {
    setUser(null);
    setSignin(false);
    localStorage.clear();
  };

  const storeUserDetailsAndToken = async (user, access_token,refresh_token) => {
    localStorage.setItem('accessToken', access_token);
    localStorage.setItem('refreshToken', refresh_token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const refreshToken = async () => {
    //
  };

  const isLoggedIn = () => {
    console.log(!!localStorage.getItem('accessToken'))
    return !!localStorage.getItem('accessToken');
  };

  return {
    user,
    signedIn,
    apiUrl,
    isLoggedIn,
    setApiUrl,
    login,
    refreshToken,
    logout,
  };
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
