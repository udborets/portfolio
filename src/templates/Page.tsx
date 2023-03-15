import Navbar from "@/components/Navbar"
import NavbarButton from "@/components/UI/NavbarButton"
import homeIcon from '../assets/homeIcon.png'
import aboutIcon from '../assets/aboutIcon.png'
import projectsIcon from '../assets/projectsIcon.png'

export const Page = ({ className, children }:
  { className?: string, children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Navbar>
        <NavbarButton text='Home' navPath='/' img={homeIcon} />
        <NavbarButton text="About" navPath="about" img={aboutIcon} />
        <NavbarButton text="Projects" navPath="projects" img={projectsIcon} />
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
