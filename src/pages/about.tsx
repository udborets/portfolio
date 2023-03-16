import { motion as m } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

import textPulse from "@/styles/textPulse.module.scss";
import TechIcon from "@/components/UI/TechIcon";
import { Page } from "@/templates/Page";
import AboutParagraph from "@/components/AboutParagraph";

const About = () => {
  const [isAlsoVisible, setIsAlsoVisible] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>/about</title>
      </Head>
      <Page className="flex items-center justify-center gap-[50px]">
        <div className="about-bio w-[90%] flex flex-col gap-[20px] mt-[170px]">
          <AboutParagraph
            transitionDelay={1}
            transitionDuration={1}
          >
            My name is Yura, I&apos;m 18 year old, I was born in Russia and I live there to this day.
          </AboutParagraph>
          <AboutParagraph
            transitionDelay={2}
            transitionDuration={1}
          >
            I started my frontend career in the very beginning of 2023.
          </AboutParagraph>
          <AboutParagraph
            transitionDelay={3}
            transitionDuration={1}
          >
            I love learning new technologies and exploring frameworks.
          </AboutParagraph>
        </div>
        <m.div
          className="flex gap-[0.5rem] flex-col flex-wrap items-center"
          initial={{ translateY: "-20%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 4 }}>
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
          className="flex gap-[0.5rem] flex-col flex-wrap justify-center items-center w-max h-[100px]"
          initial={{ translateY: "-20%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 4 }}
          onMouseEnter={() => setIsAlsoVisible(true)}
          onMouseLeave={() => setIsAlsoVisible(false)}
        >
          {isAlsoVisible
            ?
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="flex flex-row items-center justify-center w-full flex-wrap text-white">
              <TechIcon iconClass="devicon-redux-original colored" text="Redux" />
              <TechIcon iconClass="devicon-sass-original colored" text="Sass" />
              <TechIcon iconClass="devicon-express-original" text="Express" />
            </m.div>
            :
            <m.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className={"text-[1.5rem] w-fit text-white p-[1rem] " + textPulse["textPulse"]}
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