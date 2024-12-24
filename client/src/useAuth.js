import { useState, useContext, createContext } from 'react';
import Auth from './auth';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const user = await Auth.signIn(email, password);
    setIsAuthenticated(true);
    setUser(user);
  };

  const signup = async (email, password) => {
    const user = await Auth.signUp(email, password);
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = async () => {
    await Auth.signOut();
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    login,
    signup,
    logout,
  };
} 