import Link from "next/link";
import Image, { StaticImageData } from "next/image"

const NavbarButton = ({ text, navPath, img }: { text: string; navPath: string, img: StaticImageData }) => {
  return (
    <div className="p-2 bg-opacity-0 w-full">
      <Link
        href={navPath}
        className="text-white w-full text-[1rem] items-center hover:tracking-[0.08rem] transition-all duration-[0.5s] ease-out flex gap-[0.5rem]"
      >
        <Image
          src={img}
          className="w-[15px] h-[15px] flex"
          alt="*"
        />
        {text}
      </Link>
    </div>
  )
}

export default NavbarButton