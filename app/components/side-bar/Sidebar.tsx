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
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faMedium} />
        <FontAwesomeIcon icon={faXTwitter} />
      </div>
    </div>
  )
}
