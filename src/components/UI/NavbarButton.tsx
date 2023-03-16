import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import useCurrentPage from "@/hooks/useCurrentPage";

interface NavbarButtonProps {
  text: string;
  navPath: string;
  img: StaticImageData;
  imgActive: StaticImageData;
  className?: string;
}

const NavbarButton = ({ text, navPath, img, imgActive, className }: NavbarButtonProps) => {
  const { currentPage, updateCurrentPage } = useCurrentPage();
  return (
    <li className="p-2 bg-opacity-0 w-full">
      <Link
        href={navPath}
        onClick={() => updateCurrentPage(navPath)}
        className={`w-full text-[1.2rem] items-center flex gap-[0.5rem] font-bold 
        ${currentPage.value === navPath ? "text-sky" :
            "text-white hover:tracking-[0.12rem]"} transition-all duration-[.5s] ease-out ${className ?? ""}`}
      >
        <Image
          src={currentPage.value === navPath ? imgActive : img}
          className="w-[29px] h-[29px] flex"
          alt="*"
        />
        {text}
      </Link>
    </li>
  )
}

export default NavbarButton