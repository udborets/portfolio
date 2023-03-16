import { motion as m } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

import TechIcon from "@/components/UI/TechIcon";
import { Page } from "@/templates/Page";

const About = () => {
  const [isAlsoVisible, setIsAlsoVisible] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>/about</title>
      </Head>
      <Page className="flex items-center justify-center gap-[50px]">
        <m.p
          className="text-[1.5rem] text-white w-[80%] mt-[100px]"
          initial={{ translateY: "-20%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {"My name is Yura, \
            I'm 18 year old, I was born in Russia and I live there to this day. \
            I started my frontend career in the very beginning of 2023. \
            I love learning new technologies and exploring frameworks. "}
        </m.p>
        <m.div className="flex gap-[0.5rem] flex-col flex-wrap items-center">
          <span className="text-[1.5rem] w-fit text-white mb-4">
            In my projects I use
          </span>
          <div className="flex flex-row items-center justify-center w-full flex-wrap text-white">
            <TechIcon iconClass="devicon-react-original colored" text="React," />
            <TechIcon iconClass="devicon-typescript-plain colored" text="TypeScript," />
            <TechIcon iconClass="devicon-nextjs-original" text="Next," />
            <TechIcon iconClass="devicon-tailwindcss-plain colored" text="Tailwind," />
          </div>
        </m.div>
        <m.div
          className="flex gap-[0.5rem] flex-col flex-wrap justify-center items-center mt-[30px] w-max h-[100px]"
          onMouseEnter={() => setIsAlsoVisible(true)}
          onMouseLeave={() => setIsAlsoVisible(false)}
        >
          {isAlsoVisible
            ?
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-row items-center justify-center w-full flex-wrap text-white">
              <TechIcon iconClass="devicon-redux-original colored" text="Redux" />
              <TechIcon iconClass="devicon-redux-original colored" text="Redux" />
              <TechIcon iconClass="devicon-redux-original colored" text="Redux" />
              <TechIcon iconClass="devicon-redux-original colored" text="Redux" />
            </m.div>
            :
            <m.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[1.5rem] w-full p-[2rem] text-white hover:opacity-0 transition-all duration-500 ease"
            >
              {"I'm also familiar with"}
            </m.span>
          }

        </m.div>
      </Page>
    </>
  )
}

export default About