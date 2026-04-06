"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🌍",
    title: "Life on Earth",
    description:
      "Our pale blue dot—the only home we've ever known. A world teeming with life, where the story of humanity begins.",
    gradient: "from-blue-500 to-green-500",
  },
  {
    icon: "🚀",
    title: "The Space Race",
    description:
      "In 1957, Sputnik changed everything. The race to space ignited innovation and pushed humanity beyond the atmosphere.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: "👨‍🚀",
    title: "First Humans in Space",
    description:
      "Yuri Gagarin became the first human to orbit Earth in 1961, proving that space travel was possible.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "🌙",
    title: "Apollo 11 Moon Landing",
    description:
      "July 20, 1969. Neil Armstrong and Buzz Aldrin walked on the Moon. 'One small step for man, one giant leap for mankind.'",
    gradient: "from-gray-400 to-gray-600",
  },
  {
    icon: "🛰️",
    title: "NASA's Legacy",
    description:
      "Over 60 years of exploration: Hubble Telescope, Mars rovers, International Space Station, and the James Webb Space Telescope.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🔭",
    title: "The Future: Mars & Beyond",
    description:
      "Artemis program aims to return humans to the Moon. Mars colonization is next. The cosmos await.",
    gradient: "from-red-500 to-orange-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
            The Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            From{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Earth
            </span>{" "}
            to the{" "}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Moon
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The greatest adventure in human history—from our first steps into
            space to walking on another world
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-colors"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
