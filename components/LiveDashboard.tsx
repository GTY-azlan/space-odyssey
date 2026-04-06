"use client";

import { motion } from "framer-motion";
import ISSTracker from "./ISSTracker";
import LaunchCountdown from "./LaunchCountdown";
import SpaceWeather from "./SpaceWeather";

export default function LiveDashboard() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Live Data
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Real-Time{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Space Dashboard
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Track the International Space Station, countdown to the next launch,
            and monitor space weather — all updated in real-time
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* ISS Tracker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-colors"
          >
            <ISSTracker />
          </motion.div>

          {/* Launch Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-colors"
          >
            <LaunchCountdown />
          </motion.div>
        </div>

        {/* Space Weather - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-colors"
        >
          <SpaceWeather />
        </motion.div>

        {/* Data Sources */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-500">
            Data sources:{" "}
            <a
              href="http://open-notify.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Open Notify (ISS)
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/r-spacex/SpaceX-API"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              SpaceX API
            </a>{" "}
            •{" "}
            <a
              href="https://www.swpc.noaa.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              NOAA SWPC
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
