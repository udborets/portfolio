import { ISkillsListProps } from "./models";

const SkillsList = ({ fieldName, list }: ISkillsListProps) => {
  return (
    <div className="SkillsList flex flex-col w-full min-h-[300px] h-fit sm:min-h-[400px] sm:w-1/2 items-start justify-start">
      <h4 className="SkillsList__name font-[600] text-[1.5rem] sm:text-[3rem]">
        {fieldName}
      </h4>
      <p className="SkillsList__list h-full text-[1.3rem] sm:text-[2rem]">
        {list.join(', ')}
      </p>
    </div>
  )
}

export default SkillsList;