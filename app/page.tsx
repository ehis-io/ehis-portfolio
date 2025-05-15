'use client'
import styles from './home.module.css'
import { useSequentialTyping } from './hooks/useTypingEffect'

export default function Home() {
  const lines = [
    "I'm a software engineer.",
    'I build systems that make sense — even when the world doesn’t.',
    'I am currently typing my way through the internet, one line of code at a time...',
  ]

  const typedLines = useSequentialTyping(lines, 60, 2000, 3000, true)

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <main className={styles.textArea}>
          <h1 className={styles.headingOne}>Hey, I'm Ehis Fidelis</h1>

          {typedLines.map((line, index) => {
            const isLastLine = index === typedLines.length - 1
            const contentWithCursor = (
              <>
                {line}
                {isLastLine && <span className={styles.cursor}>|</span>}
              </>
            )

            if (index === 0)
              return (
                <h2 key={index} className={styles.headingTwo}>
                  {contentWithCursor}
                </h2>
              )
            if (index === 1)
              return (
                <h3 key={index} className={styles.headingThree}>
                  {contentWithCursor}
                </h3>
              )
            return (
              <p key={index} className={styles.description}>
                {contentWithCursor}
              </p>
            )
          })}

          <button className={styles.resumeButton}>Projects</button>
        </main>
      </div>
    </div>
  )
}
