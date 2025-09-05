import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Stars background */}
      <div className={styles.stars}></div>

      {/* Glow gradient */}
      <div className={styles.gradient}></div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.rating}>★★★★★ 4.9/5</div>
        <h1>Forging the Future of Digital Solutions</h1>
        <p>
          At Vision Trail Forge, we craft powerful websites, web applications,
          and mobile solutions that help businesses innovate, scale, and lead
          their industries.
        </p>
        <div className={styles.actions}>
          <a href="#" className={styles.primaryBtn}>
            Build With Us Today 🚀
          </a>
          <a href="#" className={styles.secondaryBtn}>
            Get Started →
          </a>
        </div>
      </div>
    </section>
  );
}
