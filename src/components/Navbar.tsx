interface NavbarProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <aside className="nav flex w-full h-[100px] min-h-[100px] items-center xl:items-start flex-row justify-center bg-black px-2 z-[2] xl:flex-col xl:w-[150px] xl:h-full xl:min-w-[150px]">
      <nav>
        <ul className={"nav__menu flex flex-row xl:flex-col aling-center h-fit justify-around gap-8 " + className ?? ""}>
          {children}
        </ul>
      </nav>
    </aside>
  )
}

export default Navbar