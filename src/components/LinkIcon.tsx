import Image, { StaticImageData } from "next/image";

interface LinkIconProps {
  icon: string | StaticImageData;
  link: string;
  alt: string;
}

const LinkIcon = ({ link, icon, alt }: LinkIconProps) => {
  return (
    <div>
      <a href={link} className="w-fit h-fit">
        <Image alt={alt} title={alt} src={icon} className="w-[60px] h-[60px] dev-icon-effect" />
      </a>
    </div>
  )
}

export default LinkIcon