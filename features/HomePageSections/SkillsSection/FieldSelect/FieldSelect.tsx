import { IFieldSelectProps } from "./models";

const FieldSelect = ({ fields, selectFieldFunction, selectedField }: IFieldSelectProps) => {
  return (
    <ul className="FieldSelect flex flex-row flex-wrap sm:flex-col font-[600] justify-center gap-2 sm:gap-8 text-[1.3rem] sm:text-[2rem]">
      {fields.map((fieldName) => (
        <li key={fieldName}>
          <button
            className={`FieldSelect__item duration-500 sm:py-3 sm:px-4 opacity-50
            ${selectedField === fieldName
                ? " opacity-100"
                : " hover:opacity-80"}`}
            onClick={() => selectFieldFunction(fieldName)}
          >
            {fieldName}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default FieldSelect;