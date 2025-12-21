import { useRef } from 'react';
import gsap from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import i18next from 'i18next';

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

export default function ScrambleText({
  text,
  as = 'div',
  className = '',
  duration = 1,
  speed = 2,
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
}) {

  const elRef = useRef(null);
  const Tag = as;

  useGSAP(() => {
    if (!elRef.current) return;
    gsap.to(elRef.current, {
      scrambleText: {
        text,
        chars,
        speed
      },
      duration,
      scrollTrigger: {
        trigger: elRef.current,
        scroller: '#smooth-wrapper',
        start: 'top 95%',
        toggleActions: 'play none none none'
      }
    });
  }, {
    dependencies: [text, i18next.language]
  })

  return (
    <Tag ref={elRef} className={className}>
      {text}
    </Tag>
  )
}