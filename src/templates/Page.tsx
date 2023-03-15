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
      <div className="flex flex-col h-[100vh] p-5">
        <div className='flex w-full h-full flex-col flex-grow'>
          <div className={`flex w-full h-full ${className ?? ""}`} >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
