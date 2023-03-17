import { motion as m } from "framer-motion";

interface AboutParagraphProps {
  children: string;
  transitionDuration: number;
  transitionDelay: number;
}

const AboutParagraph = ({ children: text, transitionDuration, transitionDelay }: AboutParagraphProps) => {
  return (
    <m.p
      className="aboutParagraph text-[1.5rem] text-white w-full text-center"
      initial={{ translateY: "-100%", opacity: 0 }}
      animate={{ translateY: "0%", opacity: 1 }}
      transition={{ duration: transitionDuration, ease: "easeOut", delay: transitionDelay }}>
      {text}
    </m.p >
  )
}

export default AboutParagraph