import { useState } from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SkillsList from "./SkillsList/SkillsList";
import { ISkillsSectionProps } from "./models";

const SkillsSection = ({ skills }: ISkillsSectionProps) => {
  const [chosenField, setChosenField] = useState<string>(() => skills[0].fieldName);
  return (
    <SectionContainer className="SkillsSection flex flex-col justify-center items-center gap-10">
      <h2 className={`SkillsSection__title font-bold text-main inline text-center text-[1.8rem] w-fit sm:text-[3.5rem] }`}>
        My skills
      </h2>
      <ul className="SkillsSection__list flex flex-col gap-2 text-[1.7rem]">
        {skills.map((skill) => (
          <li key={skill.fieldName}>
            <button
              onClick={() => setChosenField(skill.fieldName)}
            >
              {skill.fieldName}
            </button>
          </li>
        ))}
      </ul>
      <SkillsList
        {...skills.filter(({ fieldName }) => fieldName === chosenField)[0]}
      />
    </SectionContainer>
  )
}

export default SkillsSection