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
        <h1 className={`Title font-bold text-main inline text-[5rem] ${outfit.className}`}>
          Yury Borets
        </h1>
      </main>
    </>
  )
}

export default HomePage;