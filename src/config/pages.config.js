import App from "@/pages/home/App";
import { Works } from "@/pages/works/Works";
import { About } from "@/pages/about/About";
import { Socials } from "@/pages/socials/Socials";

export const PAGES = [
  {
    path: '/',
    component: App,
    i18key: 'navigation.home',
    key: 'home'
  },
  {
    path: '/works',
    component: Works,
    i18key: 'navigation.works',
    key: 'works'
  },
  {
    path: '/about',
    component: About,
    i18key: 'navigation.about',
    key: 'about'
  },
  {
    path: '/socials',
    component: Socials,
    i18key: 'navigation.socials',
    key: 'socials'
  },
];