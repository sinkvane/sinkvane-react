import Spline from "@splinetool/react-spline";
import { useState } from "react"
import styles from '@/components/ui/splineFigure/splineFigure.module.scss';

export function SplineFigure() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.splineContainer}>

      {!loaded && (
        <div style={{ textAlign: 'center' }}>
          loading..
        </div>
      )}

      <Spline
        scene='/main_screen.spline'
        onLoad={() => setLoaded(true)}
      />
    </div >
  )
}
