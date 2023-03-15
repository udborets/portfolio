import Tech from "@/components/Tech"
import { Page } from "@/templates/Page"
import Image from "next/image"
import photo from '../assets/photo.jpg'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["developer", "human", "programmer"],
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
        <Image src={photo} alt="portrait" className="w-[250px] h-[250px] rounded-[50%]" />
        <div className="flex flex-col ml-[4rem]">
          <span className="flex text-[3rem] text-white font-bold w-fit h-fit">YURY BORETS</span>
          <div className="typewriter">
            <span>{"I'm a "}</span>
            &nbsp;&nbsp;
            <span className="typewriter__text flex text-[2rem] font-bold w-fit h-fit" ref={typedRef} />
          </div>
        </div>
        {/* <div className="flex gap-[0.5rem] flex-col flex-wrap">
          <div className="flex flex-row items-center justify-start text-[1.5rem] flex-wrap text-white">
            In my projects I use:
            <Tech iconClass="devicon-typescript-plain colored" text="TypeScript," />
            <Tech iconClass="devicon-react-original colored" text="React," />
            <Tech iconClass="devicon-nextjs-original" text="Next," />
            <Tech iconClass="devicon-tailwindcss-plain colored" text="Tailwind," />
            <Tech iconClass="devicon-redux-original colored" text="Redux" />
          </div>
        </div> */}
      </div>
    </Page>
  )
}

export default Home
