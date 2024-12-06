import { useState, useCallback } from 'react';
import { User } from '../types';
import { login as authLogin, logout as authLogout, getCurrentUser } from '../utils/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(getCurrentUser());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await authLogin(email, password);
      setUser(user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await authLogout();
      setUser(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    user,
    loading,
    error,
    login,
    logout
  };
};