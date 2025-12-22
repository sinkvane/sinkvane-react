import { Button } from '@/components/ui/button/Button';
import { Icon } from '@/components/ui/icon/Icon';
import styles from '@/pages/home/app.module.scss';
import { useTranslation } from 'react-i18next';
import ScrambleText from '@/components/gsap-animations/ScrambleText';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { useRef } from 'react';

function App() {

  const aboutRef = useRef(null);

  useRevealOnScroll(aboutRef, {
    selector: `.${styles.aboutCards}`
  });

  const { t } = useTranslation();

  return (
    <>
      <section className={styles.main}>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>{t('main.title')}</h1>
          <h2 className={styles.text}>{t('main.description')}.</h2>
          <Button text={t('buttons.seemore')} />
        </div>
      </section>

      <section
        ref={aboutRef}
        className={styles.about}
      >

        <div className={styles.aboutCards}>
          <ScrambleText
            as='div'
            text={t('whatIdo.card1.title')}
          />
          <p>{t('whatIdo.card1.description')}</p>
        </div>

        <div className={styles.aboutCards}>
          <ScrambleText
            as='div'
            text={t('whatIdo.card2.title')}
          />
          <p>{t('whatIdo.card2.description')}</p>
        </div>

        <div className={styles.aboutCards}>
          <ScrambleText
            as='div'
            text={t('whatIdo.card3.title')}
          />
          <p>{t('whatIdo.card3.description')}</p>
        </div>

        <div className={styles.aboutCards}>
          <ScrambleText
            as='div'
            text={t('whatIdo.card4.title')}
          />
          <p>{t('whatIdo.card4.description')}</p>
        </div>

      </section>

      <section className={styles.logotypes}>
        <Icon
          name='next'
          className={styles.svgLogotype}
        />
        <Icon
          name='react'
          className={styles.svgLogotype}
        />
        <Icon
          name='strapi'
          className={styles.svgLogotype}
        />
        <Icon
          name='figma'
          className={styles.svgLogotype}
        />
      </section>

    </>
  )
}

export default App
