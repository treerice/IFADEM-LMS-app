import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage<'dark' | 'light'>('theme', 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-gray-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-400" />
      )}
    </button>
  );
};

export default ThemeToggle;