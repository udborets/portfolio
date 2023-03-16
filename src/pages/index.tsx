import Head from "next/head";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import LinkIcon from "@/components/UI/LinkIcon";
import LinkIconRow from "@/components/LinkIconRow";
import { Page } from "@/templates/Page";
import avatarStyles from "../styles/avatar.module.scss"
import githubIcon from "../assets/githubIcon.png";
import telegramIcon from "../assets/telegramIcon.png";
import vkIcon from "../assets/vkIcon.png";

const Home = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedArray = [
    "18 y.o. dev from Russia",
    "programmer",
    "frontend developer",
    "Russian university student",
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
        <title>udborets</title>
      </Head>
      <Page className="items-center justify-center">
        <div className="flex flex-wrap items-center justify-center">
          <div className={avatarStyles.container}>
            <div className={avatarStyles.box}>
              <div className={avatarStyles["spin-container"]}>
                <div className={avatarStyles.shape}>
                  <div className={avatarStyles.bd}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[600px]">
            <span className="flex text-[4rem] text-white font-bold w-fit h-fit">Yury Borets</span>
            <div className="typewriter w-full justify-center">
              <span className="typewriter__text flex text-[2rem] w-fit font-bold h-fit" ref={typedRef} />
            </div>
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
