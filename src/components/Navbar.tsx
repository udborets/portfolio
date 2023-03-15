const Navbar = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className='flex gap-2'>
      {children}
    </div>
  )
}

export default Navbar