import Navbar from "@/components/Navbar"
import NavbarButton from "@/components/UI/NavbarButton"

export const Page = ({ className, children }:
  { className?: string, children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Navbar>
        <NavbarButton text='Home' navPath='/' />
        <NavbarButton text="About" navPath="about" />
        <NavbarButton text="Projects" navPath="projects" />
      </Navbar>
      <div className="page">
        <div className='page__container'>
          <div className={`flex w-full h-full ${className ?? ""}`} >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
