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
import Logo from './Logo';
import { RESUME_LINK } from '../../config/constants';

export default function Navbar() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // optional: also check whenever the page gains focus
    // window.addEventListener('focus', checkTheme);

    // return () => window.removeEventListener('focus', checkTheme);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <main className={styles.main}>
      <Logo />

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
          href={RESUME_LINK}
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
