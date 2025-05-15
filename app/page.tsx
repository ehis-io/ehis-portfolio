'use client'
import styles from './home.module.css'
import { useLoopingTypingEffect } from './hooks/useTypingEffect'

export default function Home() {
  const typingText = useLoopingTypingEffect(
    'Typing my way through the internet, one line of code at a time...',
    100,
    2000
  )

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <main className={styles.textArea}>
          <h1 className={styles.headingOne}>Hey, I&apos;m Ehis Fidelis</h1>{' '}
          <h2 className={styles.headingTwo}>I&apos;m a software engineer.</h2>
          <h3 className={styles.headingThree}>
            I build systems that make sense — even when the world doesn&rsquo;t.
          </h3>
          <p className={styles.description}>
            {typingText}
            <span className={styles.cursor}>|</span>
          </p>
          <button className={styles.resumeButton}> Projects</button>
        </main>
      </div>
    </div>
  )
}
