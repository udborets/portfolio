import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { currentPage, updateCurrentPage } from "@/store/currentPage";

interface NavbarButtonProps {
  text: string;
  navPath: string;
  img: StaticImageData;
  className?: string;
}

const NavbarButton = ({ text, navPath, img, className }: NavbarButtonProps) => {
  const selectedPage = currentPage;
  return (
    <div className="p-2 bg-opacity-0 w-full">
      <Link
        href={navPath}
        onClick={() => updateCurrentPage(navPath)}
        className={`w-full text-[1rem] items-center flex gap-[0.5rem] 
        ${selectedPage.value === navPath ? "text-sky" :
            "text-white hover:tracking-[0.08rem] transition-all duration-[0.5s] ease-out"} ${className ?? ""}`}
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