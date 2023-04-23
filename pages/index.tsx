import Head from "next/head";

import Greeting from "@/features/Greeting/Greeting";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          Yury Borets
        </title>
      </Head>
      <main className="HomePage h-fit flex flex-col flex-grow justify-center items-center">
        <Greeting />
      </main>
    </>
  )
}

export default HomePage;