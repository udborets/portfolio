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
      <main className="page flex flex-col w-full h-full p-5 bg-[#111111]">
        <div className='page-container flex h-full flex-col flex-grow'>
          <div className={`content-wrapper flex flex-grow ${className ?? ""}`} >
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
