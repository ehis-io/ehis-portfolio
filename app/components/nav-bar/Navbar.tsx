'use client';

import { useState } from 'react';
import styles from './nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.name}>
        <Link className={styles.nameLink} href="/">
          <h1 className={styles.header}>Ehis Fidelis</h1>
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

      <Link className={styles.lightMode} href="/light-mode">
        <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
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
        {' '}
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
    </main>
  );
}
