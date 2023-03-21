import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useNavbar } from "@/hooks/useNavbar";
import { usePage } from "@/hooks/usePage";

interface NavbarButtonProps {
  text: string;
  navPath: string;
  img: StaticImageData;
  imgActive: StaticImageData;
  className?: string;
}

const NavbarButton = ({ text, navPath, img, imgActive, className }: NavbarButtonProps) => {
  const { page, setCurrent } = usePage();
  const { setIsActive } = useNavbar();
  const { asPath } = useRouter();
  useEffect(() => {
    if (asPath !== page.current) {
      setCurrent(asPath)
    }
  })
  return (
    <li className="navbarButton p-2 bg-opacity-0 w-[130px]">
      <Link
        href={navPath}
        onClick={() => setCurrent(navPath)}
        className={`w-full text-[1.2rem] items-center flex gap-[0.5rem] font-bold 
        ${page.current === navPath ? "text-sky" :
            "theme-text hover:tracking-[0.12rem]"} transition-all duration-[0.5s] ease-out ${className ?? ""}`}
      >
        <Image
          src={page.current === navPath ? imgActive : img}
          className="w-[29px] h-[29px] flex"
          alt="*"
        />
        {text}
      </Link>
    </li>
  )
}

export default NavbarButton