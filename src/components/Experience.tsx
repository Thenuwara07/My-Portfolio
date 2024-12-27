// import { EXPERIENCES } from "../constants";
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <motion.h2 whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: -100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Experience</motion.h2>
//       <div>
//         {EXPERIENCES.map((experience, index) => (
//           <motion.div whileInView={{ opacity: 1, x: 0}} initial={{ opacity: 0, x: 100}} transition={{duration:0.5, delay:0.5}} key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <div className="w-full lg:w-1/4">
//               <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
//             </div>
//             <div className="w-full max-w-xl lg:w-3/4">
//               <h6 className="mb-2 font-semibold">
//                 {experience.role} -{" "}
//                 <span className="text-sm text-purple-100">
//                   {experience.company}
//                 </span>
//               </h6>
//               <p className="mb-4 text-neutral-400">{experience.description}</p>
//               <div className="mt-4">
//                 {experience.technologies.map((tech, index) => (
//                   <motion.span whileInView={{ opacity: 1}} initial={{ opacity: 0}} transition={{duration:0.5, delay: 1}}
//                     key={index}
//                     className="rounded bg-neutral-900 text-sky-300 px-2 py-1 mr-2 mb-2 inline-block text-sm font-medium"
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;

import { LEARNING_EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const LearningJourney = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 0.5 }} 
        className="my-20 text-center text-4xl"
      >
        Learning Journey
      </motion.h2>
      <div>
        {LEARNING_EXPERIENCES.map((experience, index) => (
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: 100 }} 
            transition={{ duration: 0.5, delay: 0.5 }} 
            key={index} 
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.title} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.type}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="mt-4">
                {experience.technologies.map((tech, index) => (
                  <motion.span 
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }} 
                    transition={{ duration: 0.5, delay: 1 }}
                    key={index}
                    className="rounded bg-neutral-900 text-sky-300 px-2 py-1 mr-2 mb-2 inline-block text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LearningJourney;

