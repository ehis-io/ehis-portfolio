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
      <section id="home" className={styles.sectionOne}>
        <div className={styles.container}>
          <main className={styles.textArea}>
            <h1 className={styles.headingOne}>Hey, I&apos;m Ehis Fidelis</h1>{' '}
            <h2 className={styles.headingTwo}>I&apos;m a software engineer.</h2>
            <h3 className={styles.headingThree}>
              I build systems that make sense — even when the world
              doesn&rsquo;t.
            </h3>
            <p className={styles.description}>
              {typingText}
              <span className={styles.cursor}>|</span>
            </p>
            <button className={styles.projectsButton}> Projects</button>
          </main>
        </div>
      </section>

      <section id="about" className={styles.sectionTwo}>
        <div>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.about}>
              <p>
                I&rsquo;m Ehis Fidelis, a software engineer who focuses on
                backend systems, infrastructure, and applied AI. I work mostly
                with NestJS, Go, and Python, building APIs, microservices, and
                automation tools.
              </p>
              <p>
                I&rsquo;ve built systems like real estate auction platforms and
                an AI-powered health app, where I handled both the backend and
                the machine learning pipeline.
              </p>
              <p>
                My day-to-day includes working with containers, setting up CI/CD
                workflows, monitoring performance, and writing code that
                doesn&rsquo;t fall apart under load.
              </p>
              <p>
                Outside of software, I play guitar and spend time learning about
                financial markets, cybersecurity and ethical hacking,
                philosophy, and blockchain systems. I like anything that makes
                me think in systems and patterns. I&rsquo;m not trying to sound
                impressive. I just like building things that work and make
                sense.
              </p>
            </div>

            <div>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vRkUMEkc1jwGwfeISJbb_wSct6qS4tiHxXxKkRgzEZ_cZvlmaxf4ZXahEm-eNULC-L8iq-aUZm-Vppo/pub"
                className={styles.resumeButton}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
