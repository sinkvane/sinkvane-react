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
          <Button text={t('buttons.seemore')} />
        </div>
      </section>
      <section className={styles.mainlogotypes}>
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
