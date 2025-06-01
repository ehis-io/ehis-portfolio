'use client'

import { useState } from 'react'
import styles from './nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <main className={styles.main}>
      <div className={styles.name}>
        <Link className={styles.nameLink} href="/">
          <h1>Ehis Fidelis</h1>
        </Link>
      </div>

      <nav
        className={`${styles.navbar} ${menuOpen ? styles.open : styles.close}`}
      >
        <ul className={styles.links}>
          <li>
            <Link href="/about" className={styles.linkItem}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={styles.linkItem}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.linkItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

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
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
    </main>
  )
}
