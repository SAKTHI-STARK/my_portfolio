import { Link } from "react-router-dom";
import { SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Footer
const Footer = () => {
  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full py-8 bg-primary border-t border-t-secondary/5"
      )}
    >

      <div className="w-full flex items-center justify-between max-w-7xl mx-auto " id="contact">
        <h2 className={cn(styles.sectionHeadText, "text-left")}>
          Contact Me
        </h2>
        <div className="flex items-center gap-6">
          <a
            href="mailto:sakthi492003@gmail.com"
            className="bg-transparent text-white px-6 py-2 rounded-full font-poppins font-semibold border-2 border-cyan-400 transition-colors hover:border-purple-500 hover:bg-purple-500/20"
          >
            Let's Connect
          </a>
          <ul className="list-none flex flex-row  gap-6">
            {SOCIALS.map((social) => (
              <li
                key={social.name}
                className="text-secondary font-poppins font-medium cursor-pointer text-md opacity-80 hover:opacity-100 transition"
              >
                <Link to={social.link} target="_blank" rel="noreferrer noopener">
                  <img src={social.icon} alt={social.name} className="h-8 w-8" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
