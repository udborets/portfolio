import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ThemeColors } from "./models";

const ThemeButton = () => {
  const [theme, setTheme] = useLocalStorage({ key: 'theme', initValue: ThemeColors.DARK });
  return (
    <input
      className="ThemeButton bg-inverse fixed appearance-none hover:cursor-pointer right-[20px] top-[20px] theme-transition rounded-[10px] w-[30px] h-[30px]"
      id="theme-button"
      type="checkbox"
      checked={theme === ThemeColors.LIGHT}
      onClick={() => setTheme((oldThemeState: string) => oldThemeState === ThemeColors.DARK ? ThemeColors.LIGHT : ThemeColors.DARK)}
      readOnly
    />
  )
}

export default ThemeButton