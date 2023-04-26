import Head from "next/head";
import { useRef } from "react";

import AboutSection from "@/features/HomePageSections/AboutSection/AboutSection";
import MainSection from "@/features/HomePageSections/MainSection/MainSection";
import SkillsSection from "@/features/HomePageSections/SkillsSection/SkillsSection";
import { ISkillsSectionProps } from "@/features/HomePageSections/SkillsSection/models";
import ScrollProgressBar from "@/features/ScrollProgressBar/ScrollProgressBar";

const skillsSectionProps: ISkillsSectionProps = {
  skills:
    [
      {
        list: ["React", "NextJS", "TypeScript", "Redux Toolkit", "SCSS", "Styled Components",
          "TailwindCSS", "tRPC", "Zustand", "React Router DOM", "Astro", "React Query", "Axios", "React Hook Form", "Framer Motion"],
        fieldName: "Frontend",
      },
      {
        list: ["NodeJS", "ExpressJS", "tRPC"],
        fieldName: "Backend",
      },
      {
        list: ['PostgreSQL', "MongoDB", "Prisma ORM"],
        fieldName: "Databases",
      },
      {
        list: ['Python', "Go"],
        fieldName: "Other",
      },
    ]
}

const HomePage = () => {
  const scrollContainerRef = useRef<HTMLElement>(null);
  return (
    <>
      <Head>
        <title>
          Yury Borets
        </title>
      </Head>
      <main ref={scrollContainerRef} className={`HomePage flex flex-col flex-grow scrollContainer justify-start overflow-y-scroll snap-y snap-mandatory scroll-smooth h-screen min-h-screen items-center`}>
        <MainSection />
        {/* <AboutSection /> */}
        <SkillsSection {...skillsSectionProps} />
      </main>
      <ScrollProgressBar containerRef={scrollContainerRef} />
    </>
  )
}

export default HomePage;