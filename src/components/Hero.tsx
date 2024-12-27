import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col item-center lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-6 text-6xl lg:text-7xl font-thin tracking-tight lg:mt-10 lg:ml-16">
              Pramukha Thenuwara
            </motion.h1>
            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-t from-sky-600 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:ml-16">
              <p>Seeking Internship Opportunities as a Fullstack Developer or Software Engineer</p>
            </motion.span>
            <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 tracking-tight lg:ml-16">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 lg:pt-2 h-auto">
          <div className="flex items-center justify-center opacity-50 p-[10%]">
            <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1}} transition={{duration: 1, delay: 1}} src={profilePic} alt="profile" className="rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
