import { Button } from '@/components/ui/button/Button';
import { Icon } from '@/components/ui/icon/Icon';
import styles from '@/pages/home/app.module.scss';

function App() {

  return (
    <>
      <section className={styles.main}>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>From Concept to Live Server</h1>
          <h2 className={styles.text}>Full-cycle web development for founders. <br /> I transform ideas into production-ready, scalable websites and tools, handling every step from UI/UX to deployment.</h2>
          <Button text={'see more'} />
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
