import { motion } from "framer-motion";

import { ISkillsListProps } from "./models";

const SkillsList = ({ fieldName, list }: ISkillsListProps) => {
  return (
    <motion.div
      className="SkillsList flex flex-col w-full h-fit min-h-[130px] sm:w-1/2 items-start justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      key={fieldName}
    >
      <h4 className="SkillsList__name font-[600] text-[1.5rem] sm:text-[3rem]">
        {fieldName}
      </h4>
      <p className="SkillsList__list h-full text-[1.3rem] sm:text-[2rem]">
        {list.join(', ')}
      </p>
    </motion.div>
  )
}

export default SkillsList;