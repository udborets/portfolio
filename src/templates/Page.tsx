import { motion as m } from "framer-motion";

interface PageProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}
export const Page = ({ className, children }: PageProps) => {
  return (
    <m.main
      className="page flex flex-col w-full h-full p-5 main-bg z-[1]"
      initial={{ opacity: 0, translateX: "-20%"  }}
      animate={{ opacity: 1, translateX: "0%"  }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className='page-container flex h-full flex-col flex-grow'>
        <div className={`content-wrapper flex flex-grow flex-col h-full ${className ?? ""}`} >
          {children}
        </div>
      </div>
    </m.main>
  )
}
