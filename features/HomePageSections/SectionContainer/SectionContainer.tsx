import { outfit } from "@/fonts";
import { ISectionContainerProps } from "./models";

const SectionContainer = ({ children, className }: ISectionContainerProps) => {
  return (
    <section className={`${className ?? ""} SectionContainer snap-start text-main h-screen min-h-screen w-full p-2 flex ${outfit.className}`}>
      {children}
    </section>
  )
}

export default SectionContainer