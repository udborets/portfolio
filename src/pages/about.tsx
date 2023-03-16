import { motion as m } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

import AboutParagraph from "@/components/AboutParagraph";
import TechIcon from "@/components/UI/TechIcon";
import textPulse from "@/styles/textPulse.module.scss";
import { Page } from "@/templates/Page";

const About = () => {
  const [isAlsoVisible, setIsAlsoVisible] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>/about</title>
      </Head>
      <Page className="flex items-center justify-center gap-[50px]" movingFromTop>
        <div className="about-bio w-[90%] flex flex-col gap-[20px] mt-[170px]">
          <AboutParagraph
            transitionDelay={0}
            transitionDuration={0.5}
          >
            My name is Yury, I&apos;m 18 year old
          </AboutParagraph>
          <AboutParagraph
            transitionDelay={1}
            transitionDuration={0.5}
          >
            I started my frontend career in the very beginning of 2023
          </AboutParagraph>
          <AboutParagraph
            transitionDelay={2}
            transitionDuration={0.5}
          >
            I love learning new technologies and exploring frameworks
          </AboutParagraph>
          <AboutParagraph
            transitionDelay={3}
            transitionDuration={0.5}
          >
            I speak English and Russian, and currently I&apos;m learning Dutch
          </AboutParagraph>
        </div>
        <m.div
          className="flex gap-[0.5rem] flex-col flex-wrap items-center"
          initial={{ translateY: "-20%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 4 }}>
          <span className="text-[1.5rem] w-fit text-white mb-4">
            My favorite technologies that I use in projects
          </span>
          <div className="flex flex-row items-center justify-center w-full flex-wrap text-white">
            <TechIcon iconClass="devicon-react-original colored" text="React" />
            <TechIcon iconClass="devicon-typescript-plain colored" text="TypeScript" />
            <TechIcon iconClass="devicon-nextjs-original" text="Next" />
            <TechIcon iconClass="devicon-tailwindcss-plain colored" text="Tailwind" />
          </div>
          <div
            className="flex gap-[0.5rem] flex-col flex-wrap justify-center items-center w-max h-[100px]"
            onMouseEnter={() => setIsAlsoVisible(true)}
            onMouseLeave={() => setIsAlsoVisible(false)}
          >
            {isAlsoVisible
              ? <m.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-row items-center justify-center w-full flex-wrap text-white"
              >
                <TechIcon iconClass="devicon-redux-original colored" text="Redux" />
                <TechIcon iconClass="devicon-sass-original colored" text="Sass" />
                <TechIcon iconClass="devicon-express-original" text="Express" />
                <TechIcon iconClass="devicon-javascript-plain colored" text="JavaScript" />
                <TechIcon iconClass="devicon-postgresql-plain colored" text="PostgreSQL" />
              </m.section>
              : <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex px-[40px] flex-col items-center align-center text-[1.5rem] mt-[1.5rem] w-full h-full text-white "
              >
                I also use
                <span className={textPulse["textPulse"] + " text-[1rem]"}>hover me</span>
              </m.div>
            }
          </div>
        </m.div>
      </Page>
    </>
  )
}

export default About