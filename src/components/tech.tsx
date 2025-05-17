import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

const excludeTechNames = ["Three JS", "Tailwind CSS"];

export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="w-full flex flex-row flex-wrap justify-center gap-10">
        {TECHNOLOGIES.map((technology) => {
          // For the two excluded techs, add hidden on mobile classes
          const isExcluded = excludeTechNames.includes(technology.name);
          return (
            <div
              className={`w-28 h-28 ${isExcluded ? "hidden sm:block" : ""}`}
              key={technology.name}
            >
              <BallCanvas icon={technology.icon} />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
