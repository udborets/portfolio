import SectionContainer from "../SectionContainer/SectionContainer";

const MainSection = () => {
  return (
    <SectionContainer className="MainSection flex flex-col justify-center items-center">
      <h1 className={`MainSection__title font-bold text-main text-center text-[2.8rem] sm:text-[5rem] w-fit`}>
        Yury Borets
      </h1>
      <h2 className={`MainSection__subtitle font-bold text-main inline text-center text-[1.8rem] w-fit sm:text-[3.5rem]`}>
        Frontend Developer
      </h2>
    </SectionContainer>
  )
}


export default MainSection

