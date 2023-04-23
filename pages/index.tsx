import Head from "next/head";

import { outfit } from "@/fonts/index";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          Yury Borets
        </title>
      </Head>
      <main className="HomePage w-full h-full flex flex-col justify-center items-center">
        <h1 className={`HomePage__title font-bold text-main text-[3rem] sm:text-[5rem] w-fit ${outfit.className}`}>
          Yury Borets
        </h1>
        <h2 className={`HomePage__subTitle font-bold text-main inline text-[2rem] sm:text-[3.5rem] mt-8 ${outfit.className}`}>
          Frontend Developer
        </h2>
      </main>
    </>
  )
}

export default HomePage;