"use client"

import { SPORTS_JOURNEY } from "../../constants"
import { motion } from "framer-motion"
import { Medal, MapPin, Calendar } from 'lucide-react'

const Timeline = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Sports Journey
      </motion.h2>

      <div className="overflow-y-hidden relative container mx-auto px-6">
        {/* Main timeline line */}
        <div className="absolute z-0 w-0.5 h-full bg-red-500 left-1/2 transform -translate-x-1/2" />
        
        {SPORTS_JOURNEY.map((milestone, index) => (
          <motion.div
            key={index}
            className="relative z-10 mb-16 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Centered circle */}
            <div className="absolute z-20 top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-neutral-900 rounded-full border-4 border-red-500" />
            </div>

            {/* Content container */}
            <div className={`flex w-full ${index % 2 === 0 ? 'justify-end md:justify-start' : 'justify-start md:justify-end'}`}>
              <div 
                className={`relative bg-neutral-900/50 p-6 rounded-lg border border-neutral-900 shadow-md w-[calc(50%-2rem)] 
                  ${index % 2 === 0 ? 'md:mr-[50%] mr-8' : 'md:ml-[50%] ml-8'}`}
              >
                {/* Connecting line */}
                <div 
                  className={`absolute top-8 w-8 h-0.5 bg-red-500 ${
                    index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                  }`} 
                />

                <div className="flex flex-wrap gap-4 mb-3">
                  <div className="flex items-center text-red-500">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="font-medium">{milestone.year}</span>
                  </div>
                  <div className="flex items-center text-neutral-400">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{milestone.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                
                <div className="flex items-center mb-3 text-red-500">
                  <Medal className="mr-2 h-4 w-4" />
                  <span className="font-medium">{milestone.achievement}</span>
                </div>

                <p className="text-neutral-400">{milestone.description}</p>

                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="mt-4 h-1 w-20 bg-red-300/20"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
