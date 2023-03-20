import { useNavbar } from "@/hooks/useNavbar";
import { motion as m } from "framer-motion";

interface NavbarProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const LeftNavbar = ({ children, className }: NavbarProps) => {
  const { navbar, setIsActive } = useNavbar()
  return (
    <>
      <span
        onClick={() => setIsActive(!navbar.isActive)}
        className="absolute z-[100] right-0 top-0 text-white select-none"
      >
        &#10006;
      </span>
      {navbar.isActive
        ? <m.aside className="navbar flex nav xl:hidden 2xl:hidden h-full min-h-full w-full min-w-full absolute 
      items-center flex-col justify-center overflow-hidden
    bg-black px-2 z-[2] 
    "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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