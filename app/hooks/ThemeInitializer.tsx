'use client';

import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    const applyTheme = () => {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    applyTheme(); // Initial call
    mediaQuery.addEventListener('change', applyTheme); // Listen to changes

    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, []);

  return null;
}
