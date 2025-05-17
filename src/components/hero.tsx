import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBar from "./canvas/animationbar";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";


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
          <div className="h-[60px] mt-2 sm:pb-4 overflow-hidden relative">
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
          <div className="absolute inset-0 flex justify-center items-end pb-10">
    <img
      src="src/assets/desktop_img.png"
      alt="Mobile Illustration"
      className="w-[100%] h-auto max-h-[100%] object-contain mb-20"
    />
  </div>
      )}
    </section>
  );
};
