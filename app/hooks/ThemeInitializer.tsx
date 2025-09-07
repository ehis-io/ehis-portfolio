'use client';

import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    const applyTheme = () => {
      // only run system-theme logic on mobile
      const isMobile = window.matchMedia('(max-width: 1080px)').matches;

      if (isMobile) {
        // use system theme
        const prefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
      } else {
        // optional: force one theme on desktop
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add('dark');
      }
    };

    const mediaQueryDark = window.matchMedia('(prefers-color-scheme: dark)');
    const mediaQueryMobile = window.matchMedia('(max-width: 768px)');

    applyTheme(); // initial call

    mediaQueryDark.addEventListener('change', applyTheme);
    mediaQueryMobile.addEventListener('change', applyTheme);

    return () => {
      mediaQueryDark.removeEventListener('change', applyTheme);
      mediaQueryMobile.removeEventListener('change', applyTheme);
    };
  }, []);

  return null;
}
