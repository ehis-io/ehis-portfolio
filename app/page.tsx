"use client";
import Link from "next/link";
import styles from "./home.module.css";
import { useLoopingTypingEffect } from "./hooks/useTypingEffect";
import { useCountUp } from "./hooks/countUp";
import { useEffect } from "react";

export default function Home() {
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
  const typingText = useLoopingTypingEffect(
    "Typing my way through the internet, one line of code at a time...",
    100,
    2000
  );
  const experiences = useCountUp(8, 3500);
  const projects = useCountUp(30, 4000);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.home}>
        <section id="home" className={styles.sectionOne}>
          <div className={styles.container}>
            <div className={`fade-in ${styles.serviceCard}`}>
              <main className={styles.textArea}>
                <h1 className={styles.headingOne}>
                  Hey, I&apos;m Ehis Fidelis
                </h1>{" "}
                <h2 className={styles.headingTwo}>
                  I&apos;m a software engineer.
                </h2>
                <h3 className={styles.headingThree}>
                  I build systems that make sense — even when the world
                  doesn&rsquo;t.
                </h3>
                <p className={styles.subtagline}>
                  Networking • System Architecture • Security{" "}
                </p>
                <p className={styles.description}>
                  {typingText}
                  <span className={styles.cursor}>|</span>
                </p>
                <Link href="/projects" className={styles.projectsButton}>
                  Projects
                </Link>
              </main>
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>{experiences}+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statNumber}>{projects}+</div>
                <div className={styles.statLabel}>Projects</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
