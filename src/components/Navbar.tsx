const Navbar = ({ children, className }: { children: JSX.Element | JSX.Element[], className?: string }) => {
  return (
    <aside className="nav flex w-[150px] flex-col align-center justify-center bg-black px-5">
      <nav className={`nav__menu flex flex-col aling-center h-fit justify-around gap-5 ${className ?? ""}`}>
        {children}
      </nav>
    </aside>
  )
}

export default Navbar