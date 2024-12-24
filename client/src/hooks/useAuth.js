import { useState, useContext, createContext } from 'react';
import Auth from '../auth';

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

  const bookSession = async (sessionId) => {
    const response = await fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, userId: user.id }),
    });

    if (!response.ok) {
      throw new Error('Failed to book session');
    }
  };

  return {
    isAuthenticated,
    user,
    login,
    signup,
    logout,
    bookSession,
  };
}
