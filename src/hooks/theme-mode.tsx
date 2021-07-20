import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type ThemeModeContextType = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

const ThemeModeContext = createContext<ThemeModeContextType>({
  theme: 'light',
  setTheme: () => {},
});

export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeModeContextType['theme']>('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme as 'light' | 'dark');
    }
  }, [setTheme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  return useContext(ThemeModeContext);
}
