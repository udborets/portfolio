import { Page } from "@/templates/Page"

const Home = () => {
  return (
    <Page className="items-center justify-center">
      <div className="flex flex-col gap-[1.5rem]">
        <span className="text-[3rem]">
          Hi, my name is Yura,
        </span>
        <span className="text-[2rem]">
          and I am a frontend developer!
        </span>
        <div className="flex gap-[0.5rem]">
          <span className="flex flex-row align-center justify-center text-[1.5rem]">
            In my projects I use
            &nbsp; <i className="devicon-typescript-plain colored mt-[9px]" /> &nbsp; TypeScript,
            &nbsp; <i className="devicon-react-original colored mt-[9px]" /> &nbsp; React,
            &nbsp; <i className="devicon-express-original colored mt-[9px]" /> &nbsp; Express,
            &nbsp; <i className="devicon-nextjs-original colored mt-[9px]" /> &nbsp; Next,
            &nbsp; <i className="devicon-tailwindcss-plain colored mt-[9px]" /> &nbsp; Tailwind,
            &nbsp; <i className="devicon-redux-original colored mt-[9px]" /> &nbsp; Redux
          </span>
        </div>
      </div>
    </Page>
  )
}

export default Home
