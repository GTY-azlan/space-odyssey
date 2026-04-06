"use client";

import { motion } from "framer-motion";

const missions = [
  {
    name: "Sputnik 1",
    year: "1957",
    description: "The first artificial satellite launched by the Soviet Union, igniting the Space Race.",
    image: "🛰️",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Vostok 1",
    year: "1961",
    description: "Yuri Gagarin becomes the first human to orbit Earth—a 108-minute flight that changed history.",
    image: "👨‍🚀",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Apollo 11",
    year: "1969",
    description: "Neil Armstrong & Buzz Aldrin walk on the Moon. 600 million people watch live on TV.",
    image: "🌙",
    gradient: "from-gray-400 to-gray-600",
  },
  {
    name: "Hubble Telescope",
    year: "1990",
    description: "Launched into orbit, Hubble revealed the universe in ways never seen before.",
    image: "🔭",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Mars Rover",
    year: "2012",
    description: "Curiosity lands on Mars, beginning years of exploration on the Red Planet.",
    image: "🚀",
    gradient: "from-red-600 to-orange-600",
  },
  {
    name: "James Webb",
    year: "2021",
    description: "The most powerful space telescope ever built, peering into the dawn of time.",
    image: "✨",
    gradient: "from-yellow-400 to-orange-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
            Historic Missions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Milestones of{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Space Exploration
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Six decades of pushing the boundaries of what's possible
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

          {missions.map((mission, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} md:px-12 mb-4 md:mb-0`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block p-8 rounded-2xl bg-gray-900/80 border border-gray-700 hover:border-gray-500 transition-colors"
                >
                  <div className="text-5xl mb-4">{mission.image}</div>
                  <span className="text-sm font-bold text-blue-400">
                    {mission.year}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                    {mission.name}
                  </h3>
                  <p className="text-gray-400">{mission.description}</p>
                </motion.div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center z-10 shadow-lg shadow-purple-500/50">
                <span className="text-white text-lg">{mission.image}</span>
              </div>

              {/* Spacer */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
