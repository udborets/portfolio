import { outfit } from "@/fonts"

const Greeting = () => {
  return (
    <section className="Greeting w-full h-screen flex flex-col justify-center items-center">
      <h1 className={`Greeting__title font-bold text-main text-center text-[2.8rem] sm:text-[5rem] w-fit ${outfit.className}`}>
        Yury Borets
      </h1>
      <h2 className={`Greeting__subTitle font-bold text-main inline text-center text-[1.8rem] w-fit sm:text-[3.5rem] ${outfit.className}`}>
        Frontend Developer
      </h2>
    </section>
  )
}

export default Greeting