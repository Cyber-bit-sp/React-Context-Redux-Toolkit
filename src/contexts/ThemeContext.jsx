import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children}) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );

  export function useTheme() {
    const context = useContext(ThemeContext);
    if(!context) {
      throw new Error('useTheme must be used within ThemeProvider');
    }

    return context;
  }
}