import { Link } from 'react-router'
import styles from './header.module.scss';
import { PAGES } from '@/config/pages.config';
import { NavLink } from '../navLink/NavLink';

export function Header({ activeTab }) {
  return (
    <header className={styles.header}>
      <Link
        to={'/'}
        className={styles.title}
      >
        sinkvane
      </Link>
      <nav className={styles.navigation}>
        <ul className={styles.navigationWrapper}>
          {PAGES.map(link => (
            <li
              key={link.key}
            >
              <NavLink
                path={link.path}
                name={link.name}
                linkKey={link.key}
                activeTab={activeTab}
              />
            </li>
          ))}
        </ul>
      </nav >
    </header >
  )
}
