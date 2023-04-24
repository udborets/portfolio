import Head from "next/head";

import SectionContainer from "@/features/SectionContainer/SectionContainer";
import { outfit } from "@/fonts";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          Yury Borets
        </title>
      </Head>
      <main className="HomePage h-fit flex flex-col flex-grow justify-center items-center">
        <SectionContainer className="Main flex flex-col justify-center items-center">
          <h1 className={`Main__title font-bold text-main text-center text-[2.8rem] sm:text-[5rem] w-fit ${outfit.className}`}>
            Yury Borets
          </h1>
          <h2 className={`Main__subtitle font-bold text-main inline text-center text-[1.8rem] w-fit sm:text-[3.5rem] ${outfit.className}`}>
            Frontend Developer
          </h2>
        </SectionContainer>
      </main>
    </>
  )
}

export default HomePage;