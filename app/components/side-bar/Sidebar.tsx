import styles from './sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faMedium,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarContent}>
        <a
          className={styles.icon}
          href="https://github.com/ehis-io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          // className={styles.icon}
          href="https://linkedin.com/in/ehis-fidelis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className={styles.icon}
          href="https://medium.com/@ehis_io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a
          className={styles.icon}
          href="https://twitter.com/ehis_io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
    </div>
  )
}
