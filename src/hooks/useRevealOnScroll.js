import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useRevealOnScroll(scopeRef, {
  selector,
  start = 'top center+=300',
  y = 30,
  duration = 1,
  toggleActions = 'play none none none',
}) {
  useGSAP(() => {
    if (!scopeRef.current) return;

    const elements = gsap.utils.toArray(scopeRef.current.querySelectorAll(selector));

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y
        },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          ease: 'none',
          scrollTrigger: {
            id: `reveal-${index}`,
            trigger: el,
            start,
            toggleActions,
          }
        }
      )
    })
  }, { scope: scopeRef })
}