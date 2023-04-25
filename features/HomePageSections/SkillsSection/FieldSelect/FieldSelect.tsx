import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { IFieldSelectProps } from "./models";

const FieldSelect = ({ fields, selectFieldFunction, selectedField }: IFieldSelectProps) => {
  const fieldsListRef = useRef<HTMLUListElement>(null);
  const isInView = useInView(fieldsListRef, { once: true });
  return (
    <ul ref={fieldsListRef} className="FieldSelect flex flex-row flex-wrap sm:flex-col font-[600] justify-center gap-2 sm:gap-8 text-[1.3rem] sm:text-[2rem]">
      {fields.map((fieldName, index) => (
        <motion.li
          key={fieldName}
          initial={{
            translateX: "-100%",
            opacity: 0,
          }}
          animate={{
            translateX: isInView ? "0" : "-100%",
            opacity: isInView ? 1 : 0,
          }}
          transition={{ ease: "easeOut", duration: 1, delay: index * 0.3 }}
        >
          <button
            className={`FieldSelect__button duration-500 sm:py-3 sm:px-4 ${selectedField === fieldName
              ? "opacity-100"
              : "opacity-40 hover:opacity-70"}`}
            onClick={() => selectFieldFunction(fieldName)}
          >
            {fieldName}
          </button>
        </motion.li>
      ))}
    </ul>
  )
}

export default FieldSelect;