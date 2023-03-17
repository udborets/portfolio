import type { AppProps } from 'next/app';

import aboutIcon from '@/assets/aboutIcon.png';
import aboutIconActive from '@/assets/aboutIconActive.png';
import homeIcon from '@/assets/homeIcon.png';
import homeIconActive from '@/assets/homeIconActive.png';
import Navbar from "@/components/Navbar";
import NavbarButton from "@/components/UI/NavbarButton";
import "@/styles/global.scss";
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar>
        <NavbarButton text='Home' navPath='/' img={homeIcon} imgActive={homeIconActive} />
        <NavbarButton text="About" navPath="/about" img={aboutIcon} imgActive={aboutIconActive} />
      </Navbar>
      <Component {...pageProps} />
    </Provider>
  )
}
