import { Outlet, useLocation } from "react-router";
import { useMemo } from "react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ThemeBtn } from "@/components/ui/themeBtn/ThemeBtn";
import '@/styles/global.scss';
 

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
    <div className='wrapper'>
      <Header activeTab={activeTab} />
      <div className='content'>
        <Outlet />
      </div>
      <ThemeBtn/>
      <Footer />
    </div>
  )
}
