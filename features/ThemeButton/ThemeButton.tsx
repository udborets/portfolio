import { motion } from "framer-motion";
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
      <motion.input
        className="ThemeButton__input w-4/5 h-4/5 bg-main appearance-none"
        animate={{ scale: isHovered ? 1 : 0.5, borderRadius: isHovered ? "50%" : "10px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        id="theme-button"
        type="checkbox"
        checked={theme === ThemeColors.LIGHT}
        readOnly
      />
    </div>
  )
}

export default ThemeButton