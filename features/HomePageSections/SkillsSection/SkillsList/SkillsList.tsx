import { ISkillsListProps } from "./models";

const SkillsList = ({ fieldName, list }: ISkillsListProps) => {
  return (
    <div className="SkillsList flex flex-col w-full sm:w-1/2 items-start justify-center">
      <h4 className="SkillsList__name font-[600] text-[2rem]">
        {fieldName}
      </h4>
      <p className=" text-[1.4rem]">
        {list.join(', ')}
      </p>
    </div>
  )
}

export default SkillsList;