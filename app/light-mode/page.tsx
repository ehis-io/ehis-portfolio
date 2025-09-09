'use client';
import { useState, useEffect } from 'react';
import styles from './light-mode.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { useTheme } from '../hooks/theme-context'; // assuming you have ThemeContext

export default function LightModeSection() {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [count, setCount] = useState(0);
  const router = useRouter();

  // Get theme from context
  const { theme, setTheme } = useTheme();

  // Move button randomly
  const moveButton = () => {
    if (count < 15) {
      const randomTop = Math.floor(Math.random() * 70) + 10;
      const randomLeft = Math.floor(Math.random() * 70) + 10;
      setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
      setCount((prev) => prev + 1);
    }
  };

  // Toggle theme
  const handleClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    router.push('/');
  };

  // Always default to dark on load
  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  }, [setTheme]);

  return (
    <main className={styles.main}>
      <div className={styles.textArea}>
        <div className={styles.stars}></div>
        <p className={styles.text}>
          “Behold the dreaded light mode. Only the worthy may click the sun to
          awaken it.”
        </p>

        <button
          aria-label={
            theme === 'dark' ? 'Enable light mode' : 'Enable dark mode'
          }
          className={styles.button}
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
          }}
          onMouseEnter={moveButton}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
      </div>
    </main>
  );
}
