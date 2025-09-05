"use client";
import { useEffect } from "react";
import styles from "./about.module.css";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    // Add .visible to all elements immediately on load
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

      <div className={styles.home}>
        <section id="about" className={styles.sectionTwo}>
          <div>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <div className={styles.about}>
                <div className={`fade-in ${styles.card}`}>
                  <p>
                    I’m <strong>Ehis Fidelis</strong>, a software engineer
                    specializing in{" "}
                    <strong>
                      backend systems, cloud infrastructure, and applied AI
                    </strong>
                    . I build{" "}
                    <strong>
                      scalable APIs, microservices, and automation tools
                    </strong>{" "}
                    using <strong>NestJS, Go, and Python</strong>, with
                    experience in{" "}
                    <strong>healthtech, fintech, and blockchain</strong>.
                  </p>
                  <p>
                    I’ve developed platforms like{" "}
                    <strong>real estate auction systems</strong> and an{" "}
                    <strong>AI-powered health app</strong>, handling both
                    backend architecture and machine learning pipelines. I focus
                    on{" "}
                    <strong>
                      reliability, performance, and clean architecture
                    </strong>
                    , creating software that scales and works seamlessly under
                    load.
                  </p>
                  <p>
                    Outside of coding, I enjoy{" "}
                    <strong>
                      playing guitar, exploring financial markets,
                      cybersecurity, ethical hacking, philosophy, and blockchain
                      systems
                    </strong>
                    . I’m passionate about building tools and systems that{" "}
                    <strong>
                      make sense, solve real problems, and just work
                    </strong>
                    .
                  </p>
                </div>
              </div>

              <div>
                <a
                  href="https://docs.google.com/document/d/e/2PACX-1vRkUMEkc1jwGwfeISJbb_wSct6qS4tiHxXxKkRgzEZ_cZvlmaxf4ZXahEm-eNULC-L8iq-aUZm-Vppo/pub"
                  className={styles.resumeButton}
                >
                  Resume →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
