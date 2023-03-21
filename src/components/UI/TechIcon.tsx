interface TechIconProps {
  text: string;
  iconClass: string;
}

const TechIcon = ({ text, iconClass }: TechIconProps) => {
  return (
    <span className="techIcon flex justify-center items-center text-[1.5rem] theme-text font-bold">
      <i
        className={`${iconClass} mt-[4px] mx-[1rem]`}
      />
      {text}
    </span>
  )
}

export default TechIcon