import App from "@/pages/home/App";
import { Works } from "@/pages/works/Works";
import { About } from "@/pages/about/About";
import { Socials } from "@/pages/socials/Socials";

export const PAGES = [
  {
    path: '/',
    component: App,
    name: 'Home',
    key: 'home'
  },
  {
    path: '/works',
    component: Works,
    name: 'Works',
    key: 'works'
  },
  {
    path: '/about',
    component: About,
    name: 'About',
    key: 'about'
  },
  {
    path: '/socials',
    component: Socials,
    name: 'Socials',
    key: 'socials'
  },
];