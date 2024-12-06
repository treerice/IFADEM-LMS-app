import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get initial value from localStorage or use provided initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    return storage.get(key, initialValue);
  });

  // Update localStorage when value changes
  useEffect(() => {
    storage.set(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}