import React, { createContext, useContext, useEffect } from 'react';

const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ value, children }) => {
  const { theme, setTheme } = value;

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (typeof context === undefined) {
    throw Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
};
