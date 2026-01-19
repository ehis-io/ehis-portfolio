import { motion, Variants } from "framer-motion";
import styles from "../../home.module.css";

interface StatsProps {
    experiences: number;
    projects: number;
}

const Stats = ({ experiences, projects }: StatsProps) => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className={styles.stats}>
            <motion.div
                className={styles.statItem}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className={styles.statNumber}>{experiences}+</div>
                <div className={styles.statLabel}>Years Experience</div>
            </motion.div>

            <motion.div
                className={styles.statItem}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <div className={styles.statNumber}>{projects}+</div>
                <div className={styles.statLabel}>Projects</div>
            </motion.div>
        </div>
    );
};

export default Stats;
