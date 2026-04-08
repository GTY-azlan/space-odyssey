"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Planet {
  name: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  description: string;
  distance: string;
  diameter: string;
  moons: number;
  dayLength: string;
  yearLength: string;
}

const planets: Planet[] = [
  {
    name: "Mercury",
    color: "#A0522D",
    size: 8,
    orbitRadius: 60,
    orbitSpeed: 20,
    description: "Smallest planet, closest to the Sun",
    distance: "57.9 million km",
    diameter: "4,879 km",
    moons: 0,
    dayLength: "59 Earth days",
    yearLength: "88 Earth days",
  },
  {
    name: "Venus",
    color: "#FFD700",
    size: 12,
    orbitRadius: 90,
    orbitSpeed: 15,
    description: "Hottest planet, rotates backwards",
    distance: "108.2 million km",
    diameter: "12,104 km",
    moons: 0,
    dayLength: "243 Earth days",
    yearLength: "225 Earth days",
  },
  {
    name: "Earth",
    color: "#3B82F6",
    size: 13,
    orbitRadius: 130,
    orbitSpeed: 12,
    description: "Our home, the only known planet with life",
    distance: "149.6 million km",
    diameter: "12,742 km",
    moons: 1,
    dayLength: "24 hours",
    yearLength: "365.25 days",
  },
  {
    name: "Mars",
    color: "#EF4444",
    size: 10,
    orbitRadius: 170,
    orbitSpeed: 10,
    description: "The Red Planet, target for human colonization",
    distance: "227.9 million km",
    diameter: "6,779 km",
    moons: 2,
    dayLength: "24.6 hours",
    yearLength: "687 Earth days",
  },
  {
    name: "Jupiter",
    color: "#F59E0B",
    size: 24,
    orbitRadius: 220,
    orbitSpeed: 6,
    description: "Largest planet, Great Red Spot storm",
    distance: "778.5 million km",
    diameter: "139,820 km",
    moons: 95,
    dayLength: "9.9 hours",
    yearLength: "11.9 Earth years",
  },
  {
    name: "Saturn",
    color: "#FCD34D",
    size: 20,
    orbitRadius: 270,
    orbitSpeed: 4.5,
    description: "Famous for its beautiful ring system",
    distance: "1.4 billion km",
    diameter: "116,460 km",
    moons: 146,
    dayLength: "10.7 hours",
    yearLength: "29.5 Earth years",
  },
  {
    name: "Uranus",
    color: "#06B6D4",
    size: 16,
    orbitRadius: 310,
    orbitSpeed: 3,
    description: "Ice giant tilted on its side",
    distance: "2.9 billion km",
    diameter: "50,724 km",
    moons: 28,
    dayLength: "17.2 hours",
    yearLength: "84 Earth years",
  },
  {
    name: "Neptune",
    color: "#6366F1",
    size: 15,
    orbitRadius: 350,
    orbitSpeed: 2.5,
    description: "Farthest planet, strongest winds",
    distance: "4.5 billion km",
    diameter: "49,244 km",
    moons: 16,
    dayLength: "16.1 hours",
    yearLength: "165 Earth years",
  },
];

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTime((t) => t + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Interactive 3D Solar System • Click a planet to explore
        </p>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
        >
          {isPaused ? "▶ Play" : "⏸ Pause"}
        </button>
      </div>

      {/* Solar System Visualization */}
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden" style={{ height: "700px" }}>
        {/* Stars Background */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Solar System Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Sun */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute z-10"
            style={{ width: 40, height: 40 }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-2xl shadow-orange-500/50" />
          </motion.div>

          {/* Orbits and Planets */}
          {planets.map((planet) => {
            const angle = (time / planet.orbitSpeed) * (Math.PI / 180) * 360;
            const x = Math.cos(angle) * planet.orbitRadius;
            const y = Math.sin(angle) * planet.orbitRadius;

            return (
              <div key={planet.name}>
                {/* Orbit Path */}
                <div
                  className="absolute border border-gray-700/30 rounded-full"
                  style={{
                    width: planet.orbitRadius * 2,
                    height: planet.orbitRadius * 2,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                {/* Planet */}
                <motion.div
                  animate={{
                    x: [0, x],
                    y: [0, y],
                  }}
                  transition={{ type: "tween", ease: "linear", duration: 0.05 }}
                  className="absolute cursor-pointer"
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: -planet.size / 2,
                    marginTop: -planet.size / 2,
                  }}
                  onClick={() => setSelectedPlanet(planet)}
                >
                  {/* Saturn's Rings */}
                  {planet.name === "Saturn" && (
                    <div
                      className="absolute border-2 border-yellow-600/50 rounded-full"
                      style={{
                        width: planet.size * 2,
                        height: planet.size * 0.4,
                        left: -planet.size / 2,
                        top: planet.size / 2 - 2,
                      }}
                    />
                  )}

                  {/* Planet Body */}
                  <div
                    className="rounded-full shadow-lg"
                    style={{
                      width: planet.size,
                      height: planet.size,
                      backgroundColor: planet.color,
                      boxShadow: `0 0 ${planet.size}px ${planet.color}40`,
                    }}
                  />

                  {/* Label */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs text-gray-400">{planet.name}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Planet Info Panel */}
        <AnimatePresence>
          {selectedPlanet && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="absolute right-4 top-4 bottom-4 w-72 bg-gray-900/95 backdrop-blur-sm rounded-xl border border-gray-700 p-6 overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPlanet(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <div
                className="w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: selectedPlanet.color }}
              />

              <h3 className="text-2xl font-bold text-white mb-2">{selectedPlanet.name}</h3>
              <p className="text-gray-400 mb-6">{selectedPlanet.description}</p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Distance from Sun</p>
                  <p className="text-white font-mono">{selectedPlanet.distance}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Diameter</p>
                  <p className="text-white font-mono">{selectedPlanet.diameter}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Moons</p>
                  <p className="text-white font-mono">{selectedPlanet.moons}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Day Length</p>
                  <p className="text-white font-mono">{selectedPlanet.dayLength}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Year Length</p>
                  <p className="text-white font-mono">{selectedPlanet.yearLength}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
