import styles from '@/components/ui/navLink/navLink.module.scss';
import { Link } from 'react-router';

export function NavLink({ activeTab, path, name, linkKey }) {
  return (
    <Link
      to={path}
      className={`${styles.navigationLink} ${activeTab === linkKey ? styles.navigationLinkActive : ''}`}
      href="#"
    >
      <svg className={styles.navOutline} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect className={styles.navRect} x="0" y="0" rx="20" ry="20" width="100%" height="100%" />
      </svg>
      {name}
    </Link>
  )
}
