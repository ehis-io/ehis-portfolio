'use client'
import { useEffect } from 'react'
import styles from './about.module.css'

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in')

    // Add .visible to all elements immediately on load
    elements.forEach((el) => el.classList.add('visible'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <section id="about" className={styles.sectionTwo}>
          <div>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <div className={styles.about}>
                <div className={`fade-in ${styles.card}`}>
                  <p>
                    I&rsquo;m Ehis Fidelis, a software engineer who focuses on
                    backend systems, infrastructure, and applied AI. I work
                    mostly with NestJS, Go, and Python, building APIs,
                    microservices, and automation tools.
                  </p>
                  <p>
                    I&rsquo;ve built systems like real estate auction platforms
                    and an AI-powered health app, where I handled both the
                    backend and the machine learning pipeline.
                  </p>
                  <p>
                    My day-to-day includes working with containers, setting up
                    CI/CD workflows, monitoring performance, and writing code
                    that doesn&rsquo;t fall apart under load.
                  </p>
                  <p>
                    Outside of software, I play guitar and spend time learning
                    about financial markets, cybersecurity and ethical hacking,
                    philosophy, and blockchain systems. I like anything that
                    makes me think in systems and patterns. I&rsquo;m not trying
                    to sound impressive. I just like building things that work
                    and make sense.
                  </p>
                </div>
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
    </div>
  )
}
