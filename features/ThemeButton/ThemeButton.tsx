import styles from "./styles.module.scss";

const ThemeButton = () => {
  return (
    <input
      className={`ThemeButton ${styles.ThemeButton} bg-black theme-transition`}
      id="theme-button"
      type="checkbox"
    />
  )
}

export default ThemeButton