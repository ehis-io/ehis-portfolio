'use client';
import { motion } from 'framer-motion';
import styles from './about.module.css';
import { RESUME_LINK } from '../config/constants';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className={styles.mainContainer}>
      {/* Stars can be removed or kept as subtle texture over shared background */}
      {/* <div className={styles.stars}></div> */}

      <div className={styles.home}>
        <motion.section
          id="about"
          className={styles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className={styles.sectionTitle}>
            About Me
          </motion.h2>

          <div className={styles.about}>
            <motion.div variants={itemVariants} className={styles.card}>
              <p>
                I’m <strong>Ehis Fidelis</strong>, a software engineer
                specializing in{' '}
                <strong>
                  backend systems, cloud infrastructure, and applied AI
                </strong>
                . I build{' '}
                <strong>
                  scalable APIs, microservices, and automation tools
                </strong>{' '}
                using <strong>NestJS, Go, and Python</strong>, with
                experience in{' '}
                <strong>healthtech, fintech, and blockchain</strong>.
              </p>
              <p>
                I’ve developed platforms like{' '}
                <strong>real estate auction systems</strong> and an{' '}
                <strong>AI-powered health app</strong>, handling both
                backend architecture and machine learning pipelines. I focus
                on{' '}
                <strong>
                  reliability, performance, and clean architecture
                </strong>
                , creating software that scales and works seamlessly under
                load.
              </p>
              <p>
                Outside of coding, I enjoy{' '}
                <strong>
                  playing guitar, exploring financial markets,
                  cybersecurity, ethical hacking, philosophy, and blockchain
                  systems
                </strong>
                . I’m passionate about building tools and systems that{' '}
                <strong>
                  make sense, solve real problems, and just work
                </strong>
                .
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className={styles.buttonGroup}>
            <a
              href={RESUME_LINK}
              className={styles.resumeButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume →
            </a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
