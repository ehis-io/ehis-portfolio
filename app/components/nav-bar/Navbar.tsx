'use client';

import { useState, useEffect } from 'react';
import styles from './nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { useTheme } from '../../hooks/theme-context';

export default function Navbar() {
  const { theme } = useTheme();

  <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />;
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      setIsDark(savedTheme === 'dark');
    };

    // check initially
    checkTheme();

    // optional: also check whenever the page gains focus
    window.addEventListener('focus', checkTheme);

    return () => window.removeEventListener('focus', checkTheme);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  // toggle theme manually (optional)

  return (
    <main className={styles.main}>
      <div className={styles.name}>
        <Link className={styles.nameLink} href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="50" // adjust size as needed
            height="50"
            role="img"
            aria-label="Blue classy letter E"
          >
            <defs>
              <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E3C72" />
                <stop offset="100%" stopColor="#2A5298" />
              </linearGradient>

              <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="2"
                  floodColor="#000000"
                  floodOpacity="0.25"
                />
              </filter>
            </defs>

            <path
              d="M45 32 H138 V48 H72 V86 H132 V102 H72 V140 H138 V156 H45 Z"
              fill="url(#blueGrad)"
              filter="url(#shadow)"
            />
          </svg>
        </Link>
      </div>

      <nav
        className={`${styles.navbar} ${isOpen ? styles.open : styles.close}`}
      >
        <ul className={styles.links}>
          <li>
            <Link href="/" onClick={closeMenu} className={styles.linkItem}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={closeMenu} className={styles.linkItem}>
              About
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              onClick={closeMenu}
              className={styles.linkItem}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className={styles.linkItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* This button toggles theme & changes icon */}
      <Link href="/light-mode" className={styles.lightMode}>
        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
      </Link>

      <div className={styles.right}>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vRkUMEkc1jwGwfeISJbb_wSct6qS4tiHxXxKkRgzEZ_cZvlmaxf4ZXahEm-eNULC-L8iq-aUZm-Vppo/pub"
          className={styles.resumeButton}
        >
          <button className={styles.resumeButton}>Resume</button>
        </a>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
    </main>
  );
}
