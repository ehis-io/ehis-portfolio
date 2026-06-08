'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './project.module.css';

const projects = [
  {
    title: 'Dutchman Bridge',
    description:
      'A non-custodial conversion rail providing the fastest protocol for individuals and businesses to liquidate digital assets directly to local bank accounts with enterprise-grade security.',
    stack: ['NodeJS', 'React', 'Web3', 'Blockchain'],
    imageUrl:
      'https://res.cloudinary.com/podcast-file/image/upload/v1747432797/web-image_bl8bk2.png',
    link: 'https://dutchmannetwork.online',
  },
  {
    title: 'HerSync',
    description:
      'AI-powered menstrual health app with a NestJS + Python backend. Features personalized cycle prediction, anomaly detection.',
    stack: ['NodeJS', 'Python', 'PostgreSQL'],
    imageUrl:
      'https://res.cloudinary.com/podcast-file/image/upload/v1747433667/hersync_lb32te.jpg',
    link: 'https://hersync.app',
  },
  {
    title: 'Wasset',
    description:
      'Architected and built the backend for a real estate platform using NestJS, supporting real-time bidding and notifications.',
    stack: ['NodeJS', 'PostgreSQL', 'HTML', 'CSS'],
    imageUrl:
      'https://res.cloudinary.com/podcast-file/image/upload/v1747434729/logo-new_ye2pth.webp',
    link: 'https://thewaseet.com',
  },

  {
    title: 'Trade Assist',
    description:
      'A Flutter-based trading companion app with stop-loss, take-profit, and position size calculators. Includes performance analytics and a Go backend for sync and authentication.',
    stack: ['Flutter', 'Go'],
    imageUrl:
      'https://res.cloudinary.com/podcast-file/image/upload/v1747434923/Untitled_b5mv3u.png',
    link: '',
  },

  {
    title: 'MomentsX',
    description:
      'Developed MomentsX, an AI-powered SaaS hosting and ticketing platform for managing special experiences and social events. Integrated AI features for personalized recommendations.',
    stack: ['NodeJS', 'PostgreSQL', 'HTML', 'CSS'],
    imageUrl: 'https://momentsxnately.com/wp-content/uploads/2025/02/MS1.png',
    link: 'https://momentsxnately.com',
  },
  {
    title: 'Abaru Logistics',
    description:
      'Built scalable APIs for order management handling 4,000+ shipments/month. Developed real-time shipment tracking with WebSockets and Redis, reducing ETA errors by 35%. Implemented secure authentication and integrated payment systems.',
    stack: ['NodeJS', 'PostgreSQL', 'HTML', 'CSS'],
    imageUrl:
      'https://res.cloudinary.com/podcast-file/image/upload/v1747433153/abaru_logo_ixflzf.jpg',
    link: 'https://abaru.io',
  },
  {
    title: 'Tafipal',
    description:
      'Developed Tafipal, a ticketing platform for managing special experiences like tours and social events.',
    stack: ['NodeJS', 'PostgreSQL', 'HTML', 'CSS'],
    imageUrl:
      'https://res.cloudinary.com/tafi-cloud/image/upload/v1672161120/email-template/Tafipal_ALONE_rvgoi1.png',
    link: 'https://tafipal.com',
  },
  {
    title: 'Dutch Token Swap',
    description:
      'Full-stack DeFi staking app for yield farming, borrowing, lending. Allows users to stake tokens, add approved tokens, track total value via Chainlink Price Feeds, and issue rewards.',
    stack: ['Solidity', 'Python', 'React', 'Material UI'],
    imageUrl:
      'https://res.cloudinary.com/podcast-file/image/upload/v1747432797/web-image_bl8bk2.png',
    link: 'https://github.com/ehis-io/dutch_token_farm',
  },


  {
    title: 'native-app',
    description: 'Mg30 screen compatible with v5',
    stack: ['JavaScript'],
    imageUrl: '',
    link: 'https://github.com/ehis-io/native-app',
  },
  {
    title: 'web3.py',
    description: 'A python interface for interacting with the Ethereum blockchain and ecosystem.',
    stack: ['Python'],
    imageUrl: '',
    link: 'https://github.com/ehis-io/web3.py',
  },
  {
    title: 'chat-assistan-frontend',
    description: 'Frontend for AI chat assistant.',
    stack: ['TypeScript'],
    imageUrl: '',
    link: 'https://github.com/ehis-io/chat-assistan-frontend',
  },
  {
    title: 'streaming-mobile',
    description: 'Mobile interface for streaming application.',
    stack: ['HTML'],
    imageUrl: '',
    link: 'https://github.com/ehis-io/streaming-mobile',
  },
];

export default function ProjectsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
      },
    },
  };

  return (
    <section className={styles.section} id="projects">
      <div className={styles.mainContainer}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.title}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              aria-label={`Visit ${project.title} project`}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <article className={styles.card}>
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className={styles.image}
                  loading="lazy"
                />
                <h3 className={styles.titleCard}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.stack.map((tech, i) => (
                    <span key={i} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
                <button className={styles.viewButton}>View Project</button>
              </article>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className={styles.more}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="#" className={styles.secondaryBtn}>
            View More →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
