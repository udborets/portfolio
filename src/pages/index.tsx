import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import LinkIcon from "@/components/LinkIcon";
import LinkIconRow from "@/components/LinkIconRow";
import { Page } from "@/templates/Page";
import avatar from '../assets/avatar.jpg';
import githubIcon from "../assets/githubIcon.png";
import telegramIcon from "../assets/telegramIcon.png";
import vkIcon from "../assets/vkIcon.png";

const Home = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedArray = [
    "18 y.o. dev from Russia",
    "programmer",
    "frontend developer",
    "student",
    "human",
    "newbie developer",
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
    })
    return () => {
      typed.destroy();
    }
  });
  return (
    <Page className="items-center justify-center">
      <div className="flex">
        <Image priority src={avatar} alt="portrait" className="w-[250px] h-[250px] rounded-[50%]" />
        <div className="flex flex-col ml-[4rem]">
          <span className="flex text-[3rem] text-white font-bold w-fit h-fit">Yury Borets</span>
          <div className="typewriter w-[500px]">
            <span>{"I'm a "}</span>
            &nbsp;&nbsp;
            <span className="typewriter__text flex text-[2rem] font-bold w-fit h-fit" ref={typedRef} />
          </div>
          <LinkIconRow>
            <LinkIcon alt="Github" link="https://github.com/udborets/" icon={githubIcon} />
            <LinkIcon alt="Telegram" link="https://t.me/udborets" icon={telegramIcon} />
            <LinkIcon alt="VK" link="https://vk.com/udborets" icon={vkIcon} />
          </LinkIconRow>
        </div>
        {/* <div className="flex gap-[0.5rem] flex-col flex-wrap"> */}
        {/* <div className="flex flex-row items-center justify-start text-[1.5rem] flex-wrap text-white"> */}
        {/* In my projects I use: */}
        {/* <TechIcon iconClass="devicon-typescript-plain colored" text="TypeScript," /> */}
        {/* <TechIcon iconClass="devicon-react-original colored" text="React," /> */}
        {/* <TechIcon iconClass="devicon-nextjs-original" text="Next," /> */}
        {/* <TechIcon iconClass="devicon-tailwindcss-plain colored" text="Tailwind," /> */}
        {/* <TechIcon iconClass="devicon-redux-original colored" text="Redux" /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </Page>
  )
}

export default Home
