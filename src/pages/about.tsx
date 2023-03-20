import { motion as m } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";

import AboutParagraph from "@/components/AboutParagraph";
import TechIcon from "@/components/UI/TechIcon";
import { useNavbar } from "@/hooks/useNavbar";
import { Page } from "@/templates/Page";

const About = () => {
  const { setIsActive } = useNavbar();
  useEffect(() => {
    setIsActive(false);
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>udborets/about</title>
      </Head>
      <Page className="aboutPage flex items-center gap-[50px] justify-center" movingFromTop>
        <div className="aboutParagraphs w-[90%] flex flex-col gap-[20px]">
          <AboutParagraph
            transitionDelay={1}
            transitionDuration={0.5}
          >
            My name is Yury, I&apos;m 18 year old
          </AboutParagraph>
          <AboutParagraph
            transitionDelay={2}
            transitionDuration={0.5}
          >
            I started my frontend career in the very beginning of 2023
          </AboutParagraph>
          <AboutParagraph
            transitionDelay={3}
            transitionDuration={0.5}
          >
            I love learning new technologies and exploring frameworks
          </AboutParagraph>
          <AboutParagraph
            transitionDelay={4}
            transitionDuration={0.5}
          >
            I speak English and Russian, and currently I&apos;m learning Dutch
          </AboutParagraph>
        </div>
        <m.div
          className="flex gap-[0.5rem] flex-col items-center w-max-full"
          initial={{ translateY: "-20%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 5 }}>
          <span className="text-[1.5rem] flex-wrap flex w-max-full text-center text-white mb-4">
            My favorite technologies that I use in projects
          </span>
          <div className="flex flex-row items-center justify-center w-full flex-wrap text-white">
            <TechIcon iconClass="devicon-nextjs-original" text="Next" />
            <TechIcon iconClass="devicon-tailwindcss-plain colored" text="Tailwind" />
            <TechIcon iconClass="devicon-redux-original colored" text="Redux" />
            <TechIcon iconClass="devicon-react-original colored" text="React" />
            <TechIcon iconClass="devicon-typescript-plain colored" text="TypeScript" />
          </div>
          <m.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 8 }}
            className="text-[1.5rem] flex-wrap flex w-max-full text-center text-white my-4"
          >
            I also use
          </m.span>
          <m.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 9 }}
            className="flex flex-row items-center justify-center w-full flex-wrap max-w-full"
          >
            <TechIcon iconClass="devicon-sass-original colored" text="Sass" />
            <TechIcon iconClass="devicon-firebase-plain colored" text="Firebase" />
            <TechIcon iconClass="devicon-express-original" text="Express" />
            <TechIcon iconClass="devicon-nodejs-plain colored" text="NodeJS" />
            <TechIcon iconClass="devicon-postgresql-plain colored" text="PostgreSQL" />
          </m.section>
        </m.div>
      </Page>
    </>
  )
}

export default About