"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import styles from "./contact.module.css";

export default function ContactUs() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Obfuscated phone number
  const phoneNumber = `+234${"706"}${"046"}${"4123"}`;

  const handleCopy = async () => {
    if (!revealed) return;

    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el) => el.classList.add("visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.stars}></div>

      <div className={styles.container}>
        <div className={`fade-in ${styles.serviceCard}`}>
          <div className={styles.header}>
            <h1 className={styles.title}>Contact Me</h1>
            <p className={styles.subtitle}>
              Let’s get in touch! You can reach me via any of the methods
              below—I’d be happy to chat.
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
              <span>{revealed ? (copied ? "Copied!" : phoneNumber) : ""}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
