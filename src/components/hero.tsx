import { motion } from "framer-motion";
import AnimatedBar from "./canvas/animationbar";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" id="home">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5",
        )}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] animate-fade-in" />
        <AnimatedBar/>
        </div>

        {/* About Me */}
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white animate-fade-in")}>
            Hi, I'm <span className="text-[#915eff] ">Sakthivel</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100 sm:pb-4 animate-fade-in")}>
            I develop AI Models,  <br className="sm:block hidden" />
            user interfaces and web applications
          </p>
        </div>
      </div>

      {/* Computer Model */}
      <ComputersCanvas />

    </section>
  );
};
