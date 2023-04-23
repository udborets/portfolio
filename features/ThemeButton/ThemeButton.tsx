import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ThemeColors } from "./models";

import styles from "./styles.module.scss";

const ThemeButton = () => {
  const [theme, setTheme] = useLocalStorage({ key: 'theme', initValue: ThemeColors.DARK });
  return (
    <input
      className={`${styles.ThemeButton} absolute hover:cursor-pointer right-[5px] top-[5px] theme-transition rounded-[10px] w-[20px] h-[20px]`}
      id="theme-button"
      type="checkbox"
      checked={theme === ThemeColors.LIGHT}
      onClick={() => setTheme((oldThemeState: string) => oldThemeState === ThemeColors.DARK ? ThemeColors.LIGHT : ThemeColors.DARK)}
      readOnly
    />
  )
}

export default ThemeButton