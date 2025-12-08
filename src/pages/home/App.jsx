import styles from '@/pages/home/app.module.scss';

function App() {
  
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerInfo}>
          <h1 className={styles.title}>From Concept to Live Server</h1>
          <h2 className={styles.text}>Full-cycle web development for founders. <br /> I transform ideas into production-ready, scalable websites and tools, handling every step from UI/UX to deployment.</h2>
        </div>
        <div className={styles.bannerImage}>
        </div>
      </section>
    </>
  )
}

export default App
