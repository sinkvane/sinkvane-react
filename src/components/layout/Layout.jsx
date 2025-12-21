import { Outlet, useLocation } from "react-router";
import { useMemo } from "react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ThemeBtn } from "@/components/ui/themeBtn/ThemeBtn";
import '@/styles/global.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


export function Layout() {
  const { pathname } = useLocation();

  const activeTab = useMemo(() => {
    if (pathname.startsWith('/works')) return 'works';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/socials')) return 'socials';
    if (pathname.startsWith('/')) return 'home';
    return '';
  }, [pathname]);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      effects: true,
      normalizeScroll: true
    })
  }, [])

  return (
    <div id='smooth-wrapper'>
      <div className='wrapper' id='smooth-content'>
        <Header activeTab={activeTab} />
        <div className='content'>
          <Outlet />
        </div>
        <Footer />
      </div>
      <ThemeBtn />
    </div>
  )
}
