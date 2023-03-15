const Navbar = ({ children, className }: { children: JSX.Element | JSX.Element[], className?: string }) => {
  return (
    <header className="flex align-center justify-center">
      <nav className={`flex w-[90%] aling-center h-fit justify-around ${className ?? ""}`}>
        {children}
      </nav>
    </header>
  )
}

export default Navbar