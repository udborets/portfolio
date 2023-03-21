interface NavbarProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const LeftNavbar = ({ children, className }: NavbarProps) => {
  return (
    <aside className="navbar hidden nav xl:flex 2xl:flex w-[150px] h-full min-w-[150px] 
        items-start flex-col justify-center 
      bg-secondary px-2 z-[2] 
        xl:visible
      ">
      <nav>
        <ul className={"nav__menu flex flex-col aling-center h-fit justify-around gap-8 " + className ?? ""}>
          {children}
        </ul>
      </nav>
    </aside>
  )
}

export default LeftNavbar