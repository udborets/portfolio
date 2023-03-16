interface TechIconProps {
  text: string;
  iconClass: string;
}

const TechIcon = ({ text, iconClass }: TechIconProps) => {
  return (
    <span className="flex justify-center items-center text-white"><i className={`${iconClass} mt-[4px] mx-[1rem]`} />{text}</span>
  )
}

export default TechIcon