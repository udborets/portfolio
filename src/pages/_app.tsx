import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import aboutIcon from '@/assets/aboutIcon.png';
import aboutIconActive from '@/assets/aboutIconActive.png';
import homeIcon from '@/assets/homeIcon.png';
import homeIconActive from '@/assets/homeIconActive.png';
import projectsIcon from '@/assets/projectsIcon.png';
import projectsIconActive from '@/assets/projectsIconActive.png';
import Navbar from "@/components/Navbar";
import NavbarButton from "@/components/UI/NavbarButton";
import { store } from '@/store/store';
import "@/styles/global.scss";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navbar>
          <NavbarButton text='Home' navPath='/' img={homeIcon} imgActive={homeIconActive} />
          <NavbarButton text="About" navPath="/about" img={aboutIcon} imgActive={aboutIconActive} />
          <NavbarButton text="Projects" navPath="/projects" img={projectsIcon} imgActive={projectsIconActive} />
        </Navbar>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>

  )
}
