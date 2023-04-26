import { useState } from "react";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ThemeColors } from "./models";

const ThemeButton = () => {
  const [theme, setTheme] = useLocalStorage({ key: 'theme', initValue: ThemeColors.DARK });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setTheme((oldThemeState: string) => oldThemeState === ThemeColors.DARK ? ThemeColors.LIGHT : ThemeColors.DARK)}
      className="ThemeButton bg-inverse hover:cursor-pointer flex justify-center items-center fixed w-[30px] h-[30px] right-[30px] top-[30px] rounded-[50%] hover:rounded-[10px] duration-300 transition-all sm:w-[40px] sm:h-[40px]"
    >
      <input
        className={`ThemeButton__input bg-main appearance-none hover:cursor-pointer rounded w-3/5 h-3/5 transition-all duration-300 ${isHovered
          ? 'rounded-[50%]'
          : 'rounded-[5px]'}`}
        id="theme-button"
        type="checkbox"
        checked={theme === ThemeColors.LIGHT}
        readOnly
      />
    </div>
  )
}

export default ThemeButton