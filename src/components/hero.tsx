import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBar from "./canvas/animationbar";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { FaReact, FaDatabase, FaLaptopCode, FaChartLine, FaRobot, FaPython} from "react-icons/fa";

const icons = [FaReact, FaPython, FaDatabase, FaLaptopCode, FaChartLine, FaRobot];
// Animated phrases
const phrases = [
  "AI Model Trainer",
  "Full Stack Web Developer",
  "Python Developer",
  "Data Analyst",
];

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile threshold
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Rotate phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto" id="home">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"
        )}
      >
        {/* Left Bar */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] animate-fade-in" />
          <AnimatedBar />
        </div>

        {/* Text Content */}
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white animate-fade-in")}>
            Hi, I'm <span className="text-[#915eff]">Sakthivel</span>
          </h1>
          <div className="h-[60px] mt-2 sm:pb-4 overflow-hidden relative ml-1">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                className={cn(styles.heroSubText, "text-white-100")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
              >
                {phrases[index]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 3D Model (Desktop Only) */}
      {!isMobile && <ComputersCanvas />}

      {/* Mobile Image */}
   

{isMobile && (
  <div className="absolute inset-0 flex justify-center items-end pb-20">
    <motion.div
      className="relative w-[200px] h-[200px]"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
    >
      {icons.map((IconComponent, i) => {
        const angle = (i * 360) / icons.length;
        const radius = 80;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <IconComponent className="text-[#915eff]" size={28} />
          </div>
        );
      })}
    </motion.div>
  </div>
)}

    </section>
  );
};
