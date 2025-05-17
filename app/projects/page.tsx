import React from 'react'
import styles from './project.module.css'

const projects = [
  {
    title: 'HerSync',
    description:
      'AI-powered menstrual health app with a NestJS + Python backend. Features personalized cycle prediction, anomaly detection, and Puppeteer automation deployed on Google Cloud.',
    stack: ['NodeJS', 'Python', 'postgreSQL'],
    imageUrl:
      'https://res.cloudinary.com/podcast-file/image/upload/v1747433667/hersync_lb32te.jpg',
    link: 'https://hersync.com.ng',
  },
  {
    title: 'wasset',
    description:
      'Architected and built the backend for a real estate platform using NestJS, supporting. Integrated payment gateways and implemented real-time bidding and notifications.',
    stack: ['NodeJs', 'PostgreSQL', 'HTML', 'CSS'],
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
    title: 'Tafipal',
    description:
      'Developed MomentsX, an AI-powered SaaS hosting and ticketing platform for managing special experiences like tours and social events. Integrated AI features for personalized recommendations.',
    stack: ['NodeJs', 'PostgreSQL', 'HTML', 'CSS'],
    imageUrl:
      'https://res.cloudinary.com/tafi-cloud/image/upload/v1672161120/email-template/Tafipal_ALONE_rvgoi1.png',
    link: 'https://tafipal.com',
  },
  {
    title: 'MomentsX',
    description:
      'Developed MomentsX, an AI-powered SaaS hosting and ticketing platform for managing special experiences like tours and social events. Integrated AI features for personalized recommendations.',
    stack: ['NodeJs', 'PostgreSQL', 'HTML', 'CSS'],
    imageUrl: 'https://momentsxnately.com/wp-content/uploads/2025/02/MS1.png',
    link: 'momentsxnately.com/',
  },
  {
    title: 'Abaru Logistics',
    description:
      'Built scalable APIs for order management handling 4,000+ shipments/month. Developed real-time shipment tracking with WebSockets and Redis, reducing ETA errors by 35%. Implemented secure authentication and integrated payment systems.',
    stack: ['NodeJs', 'PostgreSQL', 'HTML', 'CSS'],
    imageUrl:
      'https://res.cloudinary.com/podcast-file/image/upload/v1747433153/abaru_logo_ixflzf.jpg',
    link: 'https://abaru.io',
  },
  {
    title: 'Dutch Token Swap',
    description:
      'This is a full stack defi staking application for yield farming, borrowing and lending, or any other project you can think of. It allows you to stakeTokens, Add any approved token to the farming contract for yeild farming, collateral Remove your tokens from the contract. Get user total value, Get the total value that users have supplied based on calculations from the Chainlink Price Feeds. issueTokens: Issue a reward to the users staking on your platform!',

    stack: ['Solidity', 'Python', 'React', 'Material UI'],
    imageUrl:
      'https://res.cloudinary.com/podcast-file/image/upload/v1747432797/web-image_bl8bk2.png',
    link: 'https://github.com/ehis-io/dutch_token_farm',
  },
]

export default function ProjectsSection() {
  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink} // link wrapper styling
            aria-label={`Visit ${project.title} project`}
          >
            <div className={styles.card}>
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className={styles.image}
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
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
