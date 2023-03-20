interface NavbarProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <aside className="navbar nav flex w-[150px] h-full min-w-[150px] 
        items-start flex-col justify-center 
      bg-black px-2 z-[2]">
      <nav>
        <ul className={"nav__menu flex flex-col aling-center h-fit justify-around gap-8 " + className ?? ""}>
          {children}
        </ul>
      </nav>
    </aside>
  )
}

export default Navbar