import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { IFieldSelectItemProps } from "../models";

const FieldSelectItem = ({ fieldName, index, selectedField, selectFieldFunction }: IFieldSelectItemProps) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(itemRef, { once: true });
  return (
    <motion.li
      key={fieldName}
      initial={{
        translateX: "-50%",
        opacity: 0,
      }}
      animate={{
        translateX: isInView ? "0" : "-50%",
        opacity: isInView ? 1 : 0,
      }}
      transition={{ ease: "easeOut", duration: 1, delay: index * 0.3 }}
      ref={itemRef}
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
  )
}

export default FieldSelectItem