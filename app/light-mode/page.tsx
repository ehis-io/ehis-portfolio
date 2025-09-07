'use client';
import { useState, useEffect } from 'react';
import styles from './light-mode.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function LightModeSection() {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [count, setCount] = useState(0); // count how many times they've tried

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const router = useRouter();

  // moves button randomly
  const moveButton = () => {
    // only move while count < 10
    if (count < 10) {
      const randomTop = Math.floor(Math.random() * 70) + 10; // 10% to 80%
      const randomLeft = Math.floor(Math.random() * 70) + 10; // 10% to 80%
      setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
      setCount((prev) => prev + 1); // increment count
    }
  };

  const handleClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    // Update document class
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);

    // Save preference
    localStorage.setItem('theme', newTheme);

    // Update local state
    setTheme(newTheme);

    // Optional: redirect after short delay to let user see effect
    setTimeout(() => router.push('/'), 200); // 200ms delay
  };

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.textArea}>
        <div className={styles.stars}></div>

        <p className={styles.text}>
          “Behold the dreaded light mode. Only the worthy may click the sun to
          awaken it.”
        </p>

        <button
          className={styles.button}
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
          }}
          onMouseEnter={moveButton} // will move only if count < 10
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faLightbulb : faMoon} />{' '}
        </button>
      </div>
    </main>
  );
}
