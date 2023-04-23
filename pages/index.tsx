import Head from "next/head";

import ThemeButton from "@/features/ThemeButton/ThemeButton";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          Yury Borets
        </title>
      </Head>
      <main
        className="HomePage w-full h-full bg-main theme-transition"
      >
        <ThemeButton />
      </main>
    </>
  )
}

export default HomePage;