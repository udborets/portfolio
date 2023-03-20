import { motion as m } from "framer-motion";
import { useState } from "react";

import { Repo } from "@/models/GithubApi";

interface ProjectItemProps {
  transitionDelayIndex: number;
  repo: Repo
}
const ProjectItem = ({ repo, transitionDelayIndex }: ProjectItemProps) => {
  const [isShowingDescription, setIsShowingDescription] = useState(false);
  return (
    <m.div
      className="projectItem align-center justify-center flex h-[300px] p-4 border-white border-2 rounded-lg bg-black"
      initial={{ translateY: "-20%", opacity: 0 }}
      animate={{ translateY: "0", translateX: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1, delay: transitionDelayIndex * 0.5 }}
      onMouseEnter={() => setIsShowingDescription(true)}
      onMouseLeave={() => setIsShowingDescription(false)}
    >
      <div
        className="projectItem-wrapper flex w-full h-full align-center justify-center flex-col"
      >
        {repo.homepage
          ? <a
            href={repo.homepage}
            className="absolute left-0 top-0 z-[2] text-sky w-[5rem] h-[1.6rem] text-[0.8rem] flex items-center justify-center
            bg-white rounded-br-[0.6rem] ease-out duration-[1s]"
          >
            Hosting 🔥
          </a>
          : <></>}
        {isShowingDescription
          ?
          <>
            <m.p
              className="text-white text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
            >
              {repo.description}
            </m.p>
            <m.a
              href={repo.html_url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="text-white absolute self-center bottom-[20px] text-[0.8rem] hover:text-sky transition-all duration-500 ease-out"
            >
              Visit Github repository
            </m.a>
          </>
          : <m.span
            className="projectItem-title text-white self-center capitalize font-bold text-[1.2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            {repo.name}
          </m.span>
        }
      </div>
    </m.div>
  )
}

export default ProjectItem