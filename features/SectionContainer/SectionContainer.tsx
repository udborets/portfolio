import { ISectionContainerProps } from "./models"

const SectionContainer = ({ children, className }: ISectionContainerProps) => {
  return (
    <section className={`${className ?? ""} SectionContainer h-screen min-h-screen w-full p-2 flex`}>
      {children}
    </section>
  )
}

export default SectionContainer