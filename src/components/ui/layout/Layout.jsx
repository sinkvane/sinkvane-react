import { Outlet, useLocation } from "react-router";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import styles from './layout.module.scss';
import { useMemo } from "react";
import { ThemeBtn } from "../themeBtn/ThemeBtn";


export function Layout() {
  const { pathname } = useLocation();

  const activeTab = useMemo(() => {
    if (pathname.startsWith('/works')) return 'works';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/socials')) return 'socials';
    if (pathname.startsWith('/')) return 'home';
    return '';
  }, [pathname])

  return (
    <div className={styles.wrapper}>
      <Header activeTab={activeTab} />
      <div className={styles.content}>
        <Outlet />
      </div>
      <ThemeBtn/>
      <Footer />
    </div>
  )
}
