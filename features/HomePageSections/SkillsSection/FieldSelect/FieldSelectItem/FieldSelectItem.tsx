import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { IFieldSelectItemProps } from "../models";
import styles from './styles.module.scss';

const FieldSelectItem = ({ fieldName, index, selectedField, selectFieldFunction }: IFieldSelectItemProps) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(itemRef, { once: true });
  return (
    <motion.li
      className="w-fit h-fit"
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
        className={`${styles.FieldSelectItem} text-main text-[1.5rem] sm:text-[2rem] sm:py-3 sm:px-4 ${selectedField === fieldName
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