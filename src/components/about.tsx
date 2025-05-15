import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const defaultOptions = {
  reverse: true,         // reverse the tilt direction
  max: 25,                // max tilt rotation (degrees)
  perspective: 1000,      // Transform perspective, lower = more extreme tilt
  scale: 1.05,            // 2 = 200%, 1.5 = 150%, etc.
  speed: 1000,            // 👈 animation speed (lower = faster, higher = slower)
  transition: true,       // enable transition on enter/exit
  axis: null,             // null = both axis, 'x' or 'y'
  reset: true,            // reset on exit
  easing: "cubic-bezier(.03,.98,.52,.99)", // ease function
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
       defaultOptions
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          I'm a skilled full-stack developer with expertise in Python, JavaScript, React, Node.js, and Django. With a strong foundation in both backend and frontend technologies, I build scalable, efficient, and user friendly web applications. I also have experience in UI/UX design using Figma and data visualization with Power BI, enabling me to deliver visually compelling and data-driven solutions. I'm a fast learner and enjoy collaborating closely with clients to solve real-world problems through technology. Let’s work together to turn your ideas into reality!
        </motion.p>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
