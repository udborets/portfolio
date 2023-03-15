const Navbar = ({ children, className }: { children: JSX.Element | JSX.Element[], className?: string }) => {
  return (
    <div className={`flex gap-[10%] aling-center h-fit justify-center ${className ?? ""}`}>
      {children}
    </div>
  )
}

export default Navbar