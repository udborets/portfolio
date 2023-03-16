import { motion as m } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import styles from "../../styles/components/UI/LinkIcon.module.scss";

interface LinkIconProps {
  icon: string | StaticImageData;
  link: string;
  alt: string;
  index: number;
}

const LinkIcon = ({ link, icon, alt, index }: LinkIconProps) => {
  return (
    <m.a
      href={link}
      className="w-fit h-fit"
      initial={{ opacity: 0, translateY: `-${index}%` }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      <Image alt={alt} title={alt} src={icon} className={`w-[40px] h-[40px] ${styles['link-icon-effect']}`} />
    </m.a>
  )
}

export default LinkIcon