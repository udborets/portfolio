import { useState } from "react";

import SectionContainer from "../SectionContainer/SectionContainer";
import FieldSelect from "./FieldSelect/FieldSelect";
import SkillsList from "./SkillsList/SkillsList";
import { ISkillsSectionProps } from "./models";

const SkillsSection = ({ skills }: ISkillsSectionProps) => {
  const [chosenField, setChosenField] = useState<string>(() => skills[0].fieldName);
  return (
    <SectionContainer className="SkillsSection flex flex-col justify-center items-center gap-10">
      <h2 className={`SkillsSection__title font-bold mt-20 sm:mt-40 text-main inline text-center text-[1.8rem] w-fit sm:text-[3.5rem] }`}>
        My skills
      </h2>
      <div className="SkillsSection__body flex w-4/5 h-full flex-col sm:flex-row items-center justify-between gap-8">
        <FieldSelect
          selectFieldFunction={setChosenField}
          fields={skills.map(({ fieldName }) => fieldName)}
        />
        <SkillsList {...skills.filter(({ fieldName }) => fieldName === chosenField)[0]} />
      </div>
    </SectionContainer>
  )
}

export default SkillsSection