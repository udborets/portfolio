import Tech from "@/components/Tech"
import { Page } from "@/templates/Page"

const Home = () => {
  return (
    <Page className="items-center justify-center">
      <div className="flex flex-col gap-[1.5rem]">
        <span className="text-[3rem] w-fit">
          Hi, my name is Yura,
        </span>
        <span className="text-[2rem] w-fit">
          and I am a frontend developer!
        </span>
        <div className="flex gap-[0.5rem] flex-col flex-wrap">
          <div className="flex flex-row align-center justify-start text-[1.5rem] flex-wrap">
            In my projects I use:
            <Tech iconClass="devicon-typescript-plain colored" text="TypeScript," />
            <Tech iconClass="devicon-react-original colored" text="React," />
            <Tech iconClass="devicon-nextjs-original colored" text="Next," />
            <Tech iconClass="devicon-tailwindcss-plain colored" text="Tailwind," />
            <Tech iconClass="devicon-express-original colored colored" text="Express," />
            <Tech iconClass="devicon-redux-original colored" text="Redux" />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Home
