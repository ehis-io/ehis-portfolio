'use client'
import Link from 'next/link'
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
            <Link href="/projects" className={styles.projectsButton}>
              Projects
            </Link>
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
                backend systems, infrastructure, and applied AI. I primarily
                work with NestJS, Go, and Python—building APIs, distributed
                microservices, and automation tools that need to scale reliably.
              </p>
              <p>
                My experience spans building real estate auction platforms with
                dynamic bidding logic, and leading the backend and AI pipelines
                for HerSync, an AI-powered menstrual health app. I&rsquo;ve also
                written custom scrapers and automation tools using Puppeteer,
                and deployed them on Google Cloud with thoughtful resource and
                security configurations.
              </p>
              <p>
                On a daily basis, I work with Docker, PostgreSQL, Redis, and
                GitHub Actions. I design CI/CD workflows, monitor system
                performance, implement failover strategies, and write
                production-ready code that can handle high concurrency and
                complex business logic.
              </p>
              <p>
                Outside of software, I explore audio Enginering , play guitar
                and I&rsquo;m always learning something new. Lately, I&rsquo;ve
                been diving into financial markets, cybersecurity (especially
                ethical hacking), philosophy, and blockchain systems. I enjoy
                exploring systems and finding patterns that make things work
                better.
              </p>
              <p>
                I&rsquo;m not trying to sound impressive. I just like building
                things that work, that are cleanly designed, and that hold up
                when things get chaotic. That&rsquo;s what excites me most about
                engineering.
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
