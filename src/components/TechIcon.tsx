const TechIcon = ({ text, iconClass }: { text: string; iconClass: string }) => {
  return (
    <span className="flex justify-center items-center text-white"><i className={`${iconClass} mt-[4px] mx-[1rem]`} />{text}</span>
  )
}

export default TechIcon