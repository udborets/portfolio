import { ISkillsListProps } from "./models"

const SkillsList = ({ fieldName, list }: ISkillsListProps) => {
  return (
    <div className="SkillsList flex flex-col items-start text-[2rem] justify-center gap-8">
      <h4 className="SkillsList__name font-bold">
        {fieldName}
      </h4>
      <ul className="SkillList__list flex flex-col">
        {list.map((skill) => (
          <li
            className="SkillList__item text-[1.2rem]"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsList