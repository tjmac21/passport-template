import { useState, useContext, createContext, useEffect } from 'react';
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const getPaymentMethod = async () => {
    const response = await fetch('/api/payment-method');
    const data = await response.json();
    return data.paymentMethod;
  };

  const savePaymentMethod = async (paymentMethodId) => {
    await fetch('/api/payment-method', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentMethodId }),
    });
  };

  const login = async (email, password) => {
    const user = await Auth.signIn(email, password);
    setUser(user);
  };

  const signup = async (email, password) => {
    const user = await Auth.signUp(email, password);
    setUser(user);
  };

  const logout = async () => {
    await Auth.signOut();
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
    user,
    getPaymentMethod,
    savePaymentMethod,
    login,
    signup,
    logout,
    bookSession,
  };
}
