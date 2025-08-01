import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { safi, bwmap, worldmap } from "../assets";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      
      {/* Safi image positioned outside the section */}
      <div className="absolute bottom-0 right-[-100px] pointer-events-auto z-10" style={{ bottom: '-120px' }}>
        <img
          className="color-changing-image h-auto max-h-[100vh] w-auto max-w-[85%] object-contain"
          src={safi}
          alt="safi"
          style={{ marginBottom: 0 }}
        />
      </div>
      
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm{" "}
              <span
                style={{
                  background:
                    "linear-gradient(to top, rgb(85, 88, 218) 0%, rgb(19, 55, 115) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "90px", // Adjust as needed
                  fontWeight: "800", // Adjust as needed
                }}
                className=" sm:text-battleGray sm:text-[90px] 
                text-[50px] font-mova font-extrabold uppercase"
              >
                Safiullah
              </span>
            </h1>
            <TypingEffect />
          </div>

          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

      </section>
    </div>
  );
};

export default Hero;
