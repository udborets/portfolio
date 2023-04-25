import Head from "next/head";

import MainSection from "@/features/HomePageSections/MainSection/MainSection";
import SkillsSection from "@/features/HomePageSections/SkillsSection/SkillsSection";
import { ISkillsSectionProps } from "@/features/HomePageSections/SkillsSection/models";

import styles from "./styles.module.scss";

const HomePage = () => {
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
  return (
    <>
      <Head>
        <title>
          Yury Borets
        </title>
      </Head>
      <main className={`${styles.HomePage} h-screen min-h-screen flex flex-col flex-grow justify-start items-center snap-y snap-mandatory overflow-y-scroll`}>
        <MainSection />
        <SkillsSection {...skillsSectionProps} />
      </main>
    </>
  )
}

export default HomePage;