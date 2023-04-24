import Head from "next/head";

import SkillsSection from "@/features/HomePageSections/SkillsSection/SkillsSection";
import MainSection from "@/features/HomePageSections/MainSection/MainSection";
import { ISkillsSectionProps } from "@/features/HomePageSections/SkillsSection/models";

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
      <main className="HomePage h-fit flex flex-col flex-grow justify-center items-center">
        <MainSection />
        <SkillsSection {...skillsSectionProps} />
      </main>
    </>
  )
}

export default HomePage;