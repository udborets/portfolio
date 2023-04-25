import { useState } from "react";

import SectionContainer from "@/features/SectionContainer/SectionContainer";
import FieldSelect from "./FieldSelect/FieldSelect";
import SkillsList from "./SkillsList/SkillsList";
import { ISkillsSectionProps } from "./models";

const SkillsSection = ({ skills }: ISkillsSectionProps) => {
  const [chosenField, setChosenField] = useState<string>(skills[0].fieldName);
  return (
    <SectionContainer className="SkillsSection flex flex-col justify-evenly items-center">
      <h2 className={`SkillsSection__title font-bold text-main inline text-center text-[2rem] w-fit sm:text-[3.5rem] }`}>
        My skills
      </h2>
      <div className="SkillsSection__body flex w-5/6 h-5/6 sm:h-4/5 flex-col sm:flex-row items-center justify-evenly sm:justify-between sm:gap-8">
        <FieldSelect
          selectFieldFunction={setChosenField}
          selectedField={chosenField}
          fields={skills.map(({ fieldName }) => fieldName)}
        />
        <SkillsList {...skills.filter(({ fieldName }) => fieldName === chosenField)[0]} />
      </div>
    </SectionContainer>
  )
}

export default SkillsSection