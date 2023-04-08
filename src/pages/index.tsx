import Head from "next/head";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import githubIcon from "@/assets/githubIcon.png";
import telegramIcon from "@/assets/telegramIcon.png";
import vkIcon from "@/assets/vkIcon.png";
import LinkIconRow from "@/components/LinkIconRow";
import RotatingAvatar from "@/components/RotatingAvatar";
import Typewriter from "@/components/Typewriter";
import LinkIcon from "@/components/UI/LinkIcon";
import { useNavbar } from "@/hooks/useNavbar";
import { Page } from "@/templates/Page";

const Home = () => {
  const { setIsActive } = useNavbar();
  useEffect(() => {
    setIsActive(false);
  }, [])
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedArray = [
    "programmer",
    "frontend developer",
    "quick learner",
    "people person",
    "music lover",
    "sports enthusiast",
  ].sort(() => Math.random() - 0.5);
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: typedArray,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loopCount: Infinity,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      startDelay: 1000,
    })
    return () => {
      typed.destroy();
    }
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>udborets</title>
      </Head>
      <Page className="homePage items-center justify-start xl:justify-center lg:justify-center">
        <div className="homePage__wrapper flex flex-wrap items-center justify-center flex-col xl:flex-row w-full gap-[20px]">
          <RotatingAvatar />
          <div className="mainContent flex flex-col items-center justify-center">
            <span className="myName flex text-[4rem] theme-text font-bold w-fit h-fit p-1">Yury Borets</span>
            <Typewriter typedRef={typedRef} />
            <LinkIconRow>
              <LinkIcon index={50 * 1} alt="Github" link="https://github.com/udborets/" icon={githubIcon} />
              <LinkIcon index={50 * 2} alt="Telegram" link="https://t.me/udborets" icon={telegramIcon} />
              <LinkIcon index={50 * 3} alt="VK" link="https://vk.com/udborets" icon={vkIcon} />
            </LinkIconRow>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Home
