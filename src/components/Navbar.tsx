const Navbar = ({ children, className }: { children: JSX.Element | JSX.Element[], className?: string }) => {
  return (
    <aside className="nav flex w-[150px] flex-col items-center justify-center bg-black px-2">
      <nav className={`nav__menu flex flex-col aling-center h-fit justify-around gap-5 ${className ?? ""}`}>
        {children}
      </nav>
    </aside>
  )
}

export default Navbar