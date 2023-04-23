import styles from "./styles.module.scss";

const ThemeButton = () => {
  return (
    <input
      className={`${styles.ThemeButton} absolute right-[5px] top-[5px] theme-transition rounded-[10px] w-[20px] h-[20px]`}
      id="theme-button"
      type="checkbox"
    />
  )
}

export default ThemeButton