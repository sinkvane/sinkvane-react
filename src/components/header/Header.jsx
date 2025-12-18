import { Link } from 'react-router'
import { PAGES } from '@/config/pages.config';
import { NavLink } from '@/components/ui/navLink/NavLink';
import { LanguageChoose } from '@/components/ui/languageChoose/LanguageChoose';
import styles from '@/components/header/header.module.scss';
import { useTranslation } from 'react-i18next';

export function Header({ activeTab }) {

  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <nav className={styles.headerLeft}>
        <Link
          to={'/'}
          className={styles.title}
        >
          sinkvane
        </Link>
        <LanguageChoose/>
      </nav>
      <nav className={styles.navigation}>
        <ul className={styles.navigationWrapper}>
          {PAGES.map(link => (
            <li
              key={link.key}
            >
              <NavLink
                path={link.path}
                name={t(link.i18key)}
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
