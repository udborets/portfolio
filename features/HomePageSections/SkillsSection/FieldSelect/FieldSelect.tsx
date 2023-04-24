import { IFieldSelectProps } from "./models";

const FieldSelect = ({ fields, selectFieldFunction }: IFieldSelectProps) => {
  return (
    <ul className="FieldSelect flex flex-col justify-center gap-2 text-[1.3rem] sm:text-[1.7rem]">
      {fields.map((fieldName) => (
        <li key={fieldName} className="FieldSelect__item">
          <button
            className="FieldSelect__button"
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