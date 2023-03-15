const Tech = ({ text, iconClass }: { text: string; iconClass: string }) => {
  return (
    <span className="flex justify-center align-center text-white"><i className={`${iconClass} mt-[9px] mx-[1rem]`} />{text}</span>
  )
}

export default Tech