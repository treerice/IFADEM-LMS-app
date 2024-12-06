const PREFIX = 'ifadem_';

export const storage = {
  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(`${PREFIX}${key}`);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(`${PREFIX}${key}`);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },

  clear: (): void => {
    try {
      Object.keys(localStorage)
        .filter(key => key.startsWith(PREFIX))
        .forEach(key => localStorage.removeItem(key));
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
};