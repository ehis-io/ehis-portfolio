"use client";
import styles from "./home.module.css";
import { useLoopingTypingEffect } from "./hooks/useTypingEffect";
import { useCountUp } from "./hooks/countUp";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { TYPING_TEXT, EXPERIENCE_YEARS, PROJECT_COUNT } from "./config/constants";
import HeroSection from "./components/home/HeroSection";
import Stats from "./components/home/Stats";

export default function Home() {
  useScrollAnimation();

  const typingText = useLoopingTypingEffect(
    TYPING_TEXT,
    100,
    2000
  );
  const experiences = useCountUp(EXPERIENCE_YEARS, 3500);
  const projects = useCountUp(PROJECT_COUNT, 4000);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.home}>
        <section id="home" className={styles.sectionOne}>
          <div className={styles.stars}></div>
          <div className={styles.container}>
            <HeroSection typingText={typingText} />
            <Stats experiences={experiences} projects={projects} />
          </div>
        </section>
      </div>
    </div>
  );
}
