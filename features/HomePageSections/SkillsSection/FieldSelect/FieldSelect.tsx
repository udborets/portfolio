import { useRef } from "react";

import FieldSelectItem from "./FieldSelectItem/FieldSelectItem";
import { IFieldSelectProps } from "./models";

const FieldSelect = ({ fields, selectFieldFunction, selectedField }: IFieldSelectProps) => {
  const fieldsListRef = useRef<HTMLUListElement>(null);
  return (
    <ul ref={fieldsListRef} className="FieldSelect flex flex-row flex-wrap sm:flex-col font-[600] justify-center gap-2 sm:gap-8 text-[1.3rem] sm:text-[2rem]">
      {fields.map((fieldName, index) => (
        <FieldSelectItem
          fieldName={fieldName}
          index={index}
          selectFieldFunction={selectFieldFunction}
          selectedField={selectedField}
          key={fieldName}
        />
      ))}
    </ul>
  )
}

export default FieldSelect;