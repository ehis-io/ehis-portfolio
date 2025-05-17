'use client'

import { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import styles from './contact.module.css'

export default function ContactUs() {
  const [revealed, setRevealed] = useState(false)
  const [copied, setCopied] = useState(false)

  // Obfuscated phone number
  const phoneNumber = `+234${'706'}${'046'}${'4123'}`

  const handleCopy = async () => {
    if (!revealed) return

    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.subtitle}>
          I’d love to hear from you. Reach out via any of the options below!
        </p>
      </div>

      <div className={styles.links}>
        {/* WhatsApp */}
        <a
          href="https://wa.me/2347060464123"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} ${styles.whatsapp}`}
        >
          <FaWhatsapp className="text-2xl" />
          <span>Chat</span>
        </a>

        {/* Email */}
        <a
          href="mailto:meelisfidelis@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} ${styles.email}`}
        >
          <FaEnvelope className="text-2xl" />
          <span>Email</span>
        </a>

        {/* Reveal + Copy Phone Number */}
        <button
          className={`${styles.link} ${styles.phone}`}
          onClick={revealed ? handleCopy : () => setRevealed(true)}
        >
          <FaPhoneAlt className="text-2xl text-yellow-500" />
          <span>{revealed ? (copied ? 'Copied!' : phoneNumber) : ''}</span>
        </button>
      </div>
    </div>
  )
}
