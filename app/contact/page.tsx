'use client'

import { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import styles from './contact.module.css'

export default function ContactUs() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('+2348161331780')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // reset after 2s
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact me</h1>
        <p className={styles.subtitle}>
          I&rsquo;d love to hear from you. Reach out via any of the options
          below!
        </p>
      </div>

      <div className={styles.links}>
        <a
          href="https://wa.me/2347060464123"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} ${styles.whatsapp}`}
        >
          <FaWhatsapp className="text-2xl" />
          <span>Chat on WhatsApp</span>
        </a>

        <a
          href="mailto:meelisfidelis@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} ${styles.email}`}
        >
          <FaEnvelope className="text-2xl" />
          <span>Send us an Email</span>
        </a>

        {/* Click-to-copy phone number */}
        <button
          className={`${styles.link} ${styles.phone}`}
          onClick={handleCopy}
        >
          <FaPhoneAlt className="text-2xl text-yellow-500" />
          <span>{copied ? 'Copied!' : '+234 816 1331 780'}</span>
        </button>
      </div>
    </div>
  )
}
