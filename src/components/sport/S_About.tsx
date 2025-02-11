import aboutImg from "../../assets/s_about.png";
import { S_ABOUT_TEXT } from "../../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="mt-20 text-center text-4xl">
        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.span>
        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-neutral-500"
        >
          {" "}
          Me
        </motion.span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 1}}
          className="w-full lg:w-3/5 flex justify-center items-center "
        >
          <div className="flex justify-center  w-[80%]">
            <div>
              <p className="my-2 py-6">{S_ABOUT_TEXT}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 150 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-2/5 lg:p-10"
        >
          <div className="flex items-center justify-center  p-14 mx-auto ">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
