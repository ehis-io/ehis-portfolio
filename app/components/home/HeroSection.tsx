import Link from "next/link";
import { motion, Variants } from "framer-motion";
import styles from "../../home.module.css";
import { RESUME_LINK } from "../../config/constants";

interface HeroSectionProps {
    typingText: string;
}

const HeroSection = ({ typingText }: HeroSectionProps) => {
    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <motion.div
            className={styles.textArea}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.p variants={itemVariants} className={styles.subtagline}>
                Networking • System Architecture • Security
            </motion.p>

            <motion.h1 variants={itemVariants} className={styles.headingOne}>
                Hey, I&apos;m Ehis Fidelis
            </motion.h1>

            <motion.h2 variants={itemVariants} className={styles.headingTwo}>
                I&apos;m a software engineer.
            </motion.h2>

            <motion.h3 variants={itemVariants} className={styles.headingThree}>
                I build systems that make sense — even when the world doesn&rsquo;t.
            </motion.h3>

            <motion.div variants={itemVariants} className={styles.description}>
                {typingText}
                <span className={styles.cursor}></span>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.buttonGroup}>
                <Link href="/projects" className={styles.projectsButton}>
                    View Projects
                </Link>
                <a
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resumeButton}
                >
                    Resume
                </a>
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
