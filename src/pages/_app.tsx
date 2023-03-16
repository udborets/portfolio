import type { AppProps } from 'next/app';

import aboutIcon from '@/assets/aboutIcon.png';
import homeIcon from '@/assets/homeIcon.png';
import projectsIcon from '@/assets/projectsIcon.png';
import Navbar from "@/components/Navbar";
import NavbarButton from "@/components/UI/NavbarButton";
import "@/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar>
        <NavbarButton text='Home' navPath='/' img={homeIcon} />
        <NavbarButton text="About" navPath="about" img={aboutIcon} />
        <NavbarButton text="Projects" navPath="projects" img={projectsIcon} />
      </Navbar>
      <Component {...pageProps} />
    </>
  )
}
