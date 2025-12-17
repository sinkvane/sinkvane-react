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

      <section className={styles.about}>

        <div className={styles.aboutCards}>
          <h3>Frontend development</h3>
          <p>Building user interfaces with React, focusing on performance, clean code, and scalability</p>
        </div>

        <div className={styles.aboutCards}>
          <h3>Websites Turnkey</h3>
          <p>Landing pages, business websites, and portfolios with responsive layouts and basic SEO optimization</p>
        </div>

        <div className={styles.aboutCards}>
          <h3>Integrations</h3>
          <p>Integration of APIs, contact forms, analytics, and multilingual support</p>
        </div>

        <div className={styles.aboutCards}>
          <h3>Maintenance & Support</h3>
          <p>Bug fixing, ongoing project improvements, and code refactoring support</p>
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
