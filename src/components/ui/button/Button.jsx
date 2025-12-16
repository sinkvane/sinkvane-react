import styles from './button.module.scss';
import { Link } from 'react-router';

export function Button({ text, anchor, onClick }) {
  return (
    <>
      {anchor ? (
        <Link
          to={anchor}
          className={styles.buttonAnchor}
        >
          <button onClick={onClick} className={styles.button}>
            {text}
          </button>
        </Link>) :
        (<button onClick={onClick} className={styles.button}>
          {text}
        </button>)}
    </>
  )
}
