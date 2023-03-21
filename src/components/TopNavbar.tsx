import { useNavbar } from "@/hooks/useNavbar";
import { motion as m } from "framer-motion";

import menuButtonStyles from "../styles/menubutton.module.scss";

interface NavbarProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const LeftNavbar = ({ children, className }: NavbarProps) => {
  const { navbar, setIsActive } = useNavbar()
  return (
    <>
      <label htmlFor="checkbox"
        className={menuButtonStyles.main + " xl:hidden"}
      >
        <input
          onClick={() => setIsActive(!navbar.isActive)}
          type="checkbox"
          id="checkbox"
          className={menuButtonStyles.checkbox} />
        <span className={menuButtonStyles.line}></span>
        <span className={menuButtonStyles.line}></span>
        <span className={menuButtonStyles.line}></span>
      </label>
      {navbar.isActive
        ? <m.aside className="navbar flex nav xl:hidden 2xl:hidden h-full min-h-full w-full min-w-full absolute 
            items-center flex-col justify-center overflow-hidden
          bg-secondary px-2 z-[2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
        >
          <nav>
            <ul className={"nav__menu flex flex-col aling-center h-fit justify-around gap-8 " + className ?? ""}>
              {children}
            </ul>
          </nav>
        </m.aside>
        : <></>}
    </>
  )
}

export default LeftNavbar