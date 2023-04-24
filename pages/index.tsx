import Head from "next/head";

import SkillsSection from "@/features/HomePageSections/SkillsSection/SkillsSection";
import MainSection from "@/features/HomePageSections/MainSection/MainSection";
import { ISkillsSectionProps } from "@/features/HomePageSections/SkillsSection/models";

const HomePage = () => {
  const skillsSectionProps: ISkillsSectionProps = {
    skills:
      [
        {
          list: ["React", "NextJS", "tRPC"],
          fieldName: "Frontend"
        },
        {
          list: ["NodeJS", "Express", "tRPC"],
          fieldName: "Backend"
        },
        {
          list: ['PostgreSQL', "MongoDB"],
          fieldName: "Databases"
        },
        {
          list: ['Python', "Go"],
          fieldName: "Other"
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