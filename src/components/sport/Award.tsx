import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SPECIAL_AWARDS } from "../../constants";
import { AWARDS } from "../../constants";

const Awards = () => {
  return (
    <div className="border-b border-neutral-900 pb-14">
      {/* Special Awards Section */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Special Awards
      </motion.h2>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SPECIAL_AWARDS.map((award, index) => (
          <motion.div
            key={index}
            className="relative bg-neutral-900/50 p-6 rounded-lg border border-neutral-900 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <Trophy className="mr-3 h-6 w-6  text-red-500" />
              <h3 className="text-xl font-semibold  text-red-500">
                {award.title}
              </h3>
            </div>
            <div className="flex items-center text-neutral-400 mb-2">
              <span className="text-sm font-medium">{award.year}</span>
            </div>
            <div className="flex items-center text-neutral-300 mb-2">
              <span className="text-sm font-medium">{award.tournament}</span>
            </div>
            <p className="text-neutral-400">{award.description}</p>
          </motion.div>
        ))}
      </div>
      {/* Awards Section */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Awards
      </motion.h2>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AWARDS.map((award, index) => (
          <motion.div
            key={index}
            className="relative bg-neutral-900/50 p-6 rounded-lg border border-neutral-900 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <Trophy className="mr-3 h-6 w-6 text-red-400" />
              <h3 className="text-xl font-semibold text-red-400">
                {award.title}
              </h3>
            </div>
            <div className="flex items-center text-neutral-400 mb-2">
              <span className="text-sm font-medium">{award.year}</span>
            </div>
            <div className="flex items-center text-neutral-300 mb-2">
              <span className="text-sm font-medium">{award.tournament}</span>
            </div>
            <p className="text-neutral-400">{award.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
