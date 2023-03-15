import Tech from "@/components/Tech"
import { Page } from "@/templates/Page"
import Image from "next/image"
import photo from '../assets/photo.jpg'

const Home = () => {
  return (
    <Page className="items-center justify-center">
      <div className="flex gap-4">
        <Image src={photo} alt="portrait" className="w-[250px] h-[250px] rounded-[50%]" />
        <div className="flex">
          <span className="flex text-[3rem] text-white font-bold w-fit h-fit">YURY BORETS</span>
        </div>
        {/* <div className="flex gap-[0.5rem] flex-col flex-wrap">
          <div className="flex flex-row align-center justify-start text-[1.5rem] flex-wrap text-white">
            In my projects I use:
            <Tech iconClass="devicon-typescript-plain colored" text="TypeScript," />
            <Tech iconClass="devicon-react-original colored" text="React," />
            <Tech iconClass="devicon-nextjs-original" text="Next," />
            <Tech iconClass="devicon-tailwindcss-plain colored" text="Tailwind," />
            <Tech iconClass="devicon-redux-original colored" text="Redux" />
          </div>
        </div> */}
      </div>
    </Page>
  )
}

export default Home
