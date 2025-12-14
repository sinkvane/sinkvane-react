import styles from './button.module.scss';
import { Link } from 'react-router';

export function Button({ text, anchor }) {
  return (
    <>
      {anchor ? (
        <Link
          to={anchor}
          className={styles.buttonAnchor}
        >
          <button className={styles.button}>
            {text}
          </button>
        </Link>) :
        (<button className={styles.button}>
          {text}
        </button>)}
    </>
  )
}
