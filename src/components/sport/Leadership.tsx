import { motion } from "framer-motion"
import { Star } from 'lucide-react'
import { LEADERSHIP_EXPERIENCES } from "../../constants" 




const Leadership = () => {
  return (
    <div className="border-b border-neutral-900 pb-14 flex flex-col justify-center items-center">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Leadership Experiences
      </motion.h2>

      <div className="container mx-auto px-6 flex justify-center items-center flex-col gap-2">
        {LEADERSHIP_EXPERIENCES.map((experience, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-6 text-center"
          >
            <div className="flex justify-center items-center mb-2">
              <Star className="mr-3 h-6 w-6 text-red-500" />
              <h3 className="text-xl font-semibold text-red-500">{experience.title}</h3>
            </div>
            <div className="text-sm font-medium text-neutral-400 mb-2">
              <span>{experience.year}</span> | <span className="text-neutral-300">{experience.organization}</span>
            </div>
            <p className="text-neutral-400">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Leadership
