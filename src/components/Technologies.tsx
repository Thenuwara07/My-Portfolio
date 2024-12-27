import { RiReactjsLine } from "react-icons/ri";
import { FaVuejs, FaLaravel } from "react-icons/fa";
import {SiSpringboot, SiFlutter, SiFirebase, SiMysql } from "react-icons/si";import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration: number, delay: number) => ({
    initial : { y: -10},
    animate : {
        y: [5, -5],
        transition: {
            duration: duration,
            delay: delay,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" as const,
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{ opacity: 1, y: 0}} initial={{ opacity: 0, y: -100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{ opacity: 1, y: 0}} initial={{ opacity: 0, y: 100}} transition={{duration:0.5, delay: 0.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(1,1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(1,1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaVuejs className="text-7xl text-green-300"/>
        </motion.div>
        <motion.div variants={iconVariants(1,2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLaravel className="text-7xl text-red-600"/>
        </motion.div>
        <motion.div variants={iconVariants(1,2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSpringboot className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div variants={iconVariants(1,3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-700"/>
        </motion.div>
        <motion.div variants={iconVariants(1,3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-slate-500"/>
        </motion.div>
        <motion.div variants={iconVariants(1,4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFirebase className="text-7xl text-amber-400"/>
        </motion.div>
        <motion.div variants={iconVariants(1,4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFlutter className="text-7xl text-sky-700"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
