import styles from './navLink.module.scss';
import { Link } from 'react-router';

export function NavLink({ activeTab, path, name, linkKey }) {
  return (
    <Link
      to={path}
      className={`${styles.navigationLink} ${activeTab === linkKey ? styles.navigationLinkActive : ''}`}
      href="#"
    >
      {name}
    </Link>
  )
}
