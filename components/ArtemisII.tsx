"use client";

import { motion } from "framer-motion";

const crew = [
  {
    name: "Reid Wiseman",
    role: "Commander",
    agency: "NASA",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Gregory_R._Wiseman%2C_official_portrait.jpg",
    flag: "US",
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    agency: "NASA",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Victor_Glover_official_portrait_2020.jpg",
    flag: "US",
  },
  {
    name: "Christina Koch",
    role: "Mission Specialist",
    agency: "NASA",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Christina_Koch_official_portrait_in_an_EMU.jpg",
    flag: "US",
  },
  {
    name: "Jeremy Hansen",
    role: "Mission Specialist",
    agency: "CSA",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Jeremy_Hansen_official_portrait.jpg",
    flag: "CA",
  },
];

const missionTimeline = [
  { day: "Apr 1", event: "Launch from Kennedy Space Center", time: "18:35 EDT" },
  { day: "Apr 3", event: "Translunar Injection Burn", time: "~14 hrs into flight" },
  { day: "Apr 6", event: "Crewed Lunar Flyby — closest approach to Moon", time: "6,450 km altitude" },
  { day: "Apr 7", event: "Far-side Solar Eclipse Observation", time: "Deep space orbit" },
  { day: "Apr 10", event: "Splashdown — Pacific Ocean, San Diego", time: "~20:07 EDT" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ArtemisII() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-orange-400 font-semibold text-xs uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            April 1 — April 10, 2026
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Artemis{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              II
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            First crewed mission to the Moon in over 50 years. Four astronauts aboard the Orion spacecraft on a 10-day journey around the lunar surface.
          </p>
        </motion.div>

        {/* Crew Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {crew.map((member, index) => (
            <motion.div
              key={member.name}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-xl overflow-hidden bg-gray-900/60 border border-gray-800 hover:border-orange-500/40 transition-colors"
            >
              {/* Crew Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=1a1a2e&color=c084fc&bold=true&font-size=0.35`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

                {/* Agency Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md backdrop-blur-md ${
                    member.agency === "CSA"
                      ? "bg-red-500/20 text-red-300 border border-red-500/30"
                      : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  }`}>
                    {member.agency}
                  </span>
                </div>

                {/* Country Flag */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs px-1.5 py-0.5 rounded bg-black/40 backdrop-blur-sm text-gray-300 font-mono">
                    {member.flag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm md:text-base truncate">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Stats Row */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            { value: "10", unit: "Days", label: "Mission Duration" },
            { value: "252,756", unit: "mi", label: "Farthest Distance from Earth" },
            { value: "6,450", unit: "km", label: "Closest Lunar Approach" },
            { value: "50+", unit: "yrs", label: "Since Last Crewed Lunar Mission" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="text-center p-6 rounded-xl bg-gray-900/40 border border-gray-800"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                className="text-3xl md:text-4xl font-bold text-white font-mono"
              >
                {stat.value}
              </motion.div>
              <span className="text-xs text-orange-400 font-mono mt-1 block">
                {stat.unit}
              </span>
              <p className="text-gray-500 text-xs mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-center text-white text-2xl font-bold mb-10">
            Mission Timeline
          </h3>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-amber-400/30 to-transparent" />

            <div className="space-y-8">
              {missionTimeline.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex items-start gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row"
                  }`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 border-2 border-orange-500/50 flex items-center justify-center">
                    <span className="text-[8px] text-orange-400 font-bold">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 -mt-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                        {item.day}
                      </span>
                      <span className="text-xs text-gray-600 font-mono">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Significance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-800"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Artemis II marks the first time a woman, a Black astronaut, and a Canadian have traveled to the lunar environment. The mission validates Orion for deep-space crewed flights and paves the way for Artemis III, which will return humans to the lunar surface.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
