import { Button } from '@/components/ui/button/Button';
import { Icon } from '@/components/ui/icon/Icon';
import styles from '@/pages/home/app.module.scss';
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (
    <>
      <section className={styles.main}>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>{t('main.title')}</h1>
          <h2 className={styles.text}>{t('main.description')}.</h2>
          <div className={styles.mainButtons}>
            <Button text={t('buttons.seemore')} />
            <Button anchor={'./works'} text={t('buttons.works')} />
          </div>
        </div>
      </section>

      <section className={styles.about}>

        <div className={styles.aboutCards}>
          <div>{t('whatIdo.card1.title')}</div>
          <p>{t('whatIdo.card1.description')}</p>
        </div>

        <div className={styles.aboutCards}>
          <div>{t('whatIdo.card2.title')}</div>
          <p>{t('whatIdo.card2.description')}</p>
        </div>

        <div className={styles.aboutCards}>
          <div>{t('whatIdo.card3.title')}</div>
          <p>{t('whatIdo.card3.description')}</p>
        </div>

        <div className={styles.aboutCards}>
          <div>{t('whatIdo.card4.title')}</div>
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