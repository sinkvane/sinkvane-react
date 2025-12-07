import styles from './themeBtn.module.scss';
import { useTheme } from "@/hooks/useTheme";

export function ThemeBtn() {
  const { theme, toggleTheme } = useTheme();
return (
    <button
      onClick={toggleTheme}
      className={styles.themeBtn}
    >
      {theme === 'dark' ? '☀️' : '🌑'}
    </button>
  )
}
