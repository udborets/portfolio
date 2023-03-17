import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import githubIcon from "@/assets/githubIcon.png";
import telegramIcon from "@/assets/telegramIcon.png";
import vkIcon from "@/assets/vkIcon.png";
import LinkIconRow from "@/components/LinkIconRow";
import LinkIcon from "@/components/UI/LinkIcon";
import avatarStyles from "@/styles/avatar.module.scss";
import { Page } from "@/templates/Page";

const Home = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedArray = [
    "18 y.o. dev",
    "programmer",
    "web dev newbie",
    "frontend developer",
    "first-year univ. student",
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
      <Page className="homePage items-center justify-center">
        <div className="homePage__wrapper flex flex-wrap items-center justify-center flex-col xl:flex-row">
          <div className={"rotatingAvatar " + avatarStyles.container}>
            <div className={avatarStyles.box}>
              <div className={avatarStyles["spin-container"]}>
                <div className={avatarStyles.shape}>
                  <div className={avatarStyles.bd}>
                    <Link className={avatarStyles.blur} href="/about"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainContent flex flex-col items-center justify-center w-full">
            <span className="myName flex text-[4rem] text-white font-bold w-fit h-fit">Yury Borets</span>
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
