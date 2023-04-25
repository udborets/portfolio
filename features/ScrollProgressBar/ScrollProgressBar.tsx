import { motion, useScroll } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className='w-full fixed top-0 left-0 bg-inverse h-[3px] sm:h-[4px]'
    />
  )
}

export default ScrollProgressBar