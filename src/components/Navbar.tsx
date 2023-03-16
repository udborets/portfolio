interface NavbarProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <aside className="nav flex w-[150px] h-full min-w-[150px] flex-col justify-center bg-black px-2 z-[2]">
      <nav className={"nav__menu flex flex-col aling-center h-fit justify-around gap-5" + className ?? ""}>
        <ul>
          {children}
        </ul>
      </nav>
    </aside>
  )
}

export default Navbar