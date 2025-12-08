import { Button } from '@/components/ui/button/Button';
import styles from '@/pages/home/app.module.scss';
import { SplineFigure } from '@/components/ui/splineFigure/SplineFigure';

function App() {

  return (
    <>
      <section className={styles.main}>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>From Concept to Live Server</h1>
          <h2 className={styles.text}>Full-cycle web development for founders. <br /> I transform ideas into production-ready, scalable websites and tools, handling every step from UI/UX to deployment.</h2>
          <Button text={'see more'} />
        </div>
        {/* <div className={styles.mainImage}>
          <SplineFigure />
        </div> */}
      </section>
    </>
  )
}

export default App
