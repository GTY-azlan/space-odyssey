"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ISSPosition {
  latitude: number;
  longitude: number;
}

export default function ISSTracker() {
  const [position, setPosition] = useState<ISSPosition | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchISSPosition = async () => {
    try {
      const res = await fetch("http://api.open-notify.org/iss-now.json");
      const data = await res.json();
      if (data.message === "success") {
        setPosition({
          latitude: parseFloat(data.iss_position.latitude),
          longitude: parseFloat(data.iss_position.longitude),
        });
        setLastUpdate(new Date());
        setError(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchISSPosition();
    const interval = setInterval(fetchISSPosition, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate position on the map
  const mapX = position ? ((position.longitude + 180) / 360) * 100 : 50;
  const mapY = position ? ((90 - position.latitude) / 180) * 100 : 50;

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <h3 className="text-lg font-semibold text-white">
            Live ISS Position
          </h3>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
            REAL-TIME
          </span>
        </div>
        {lastUpdate && (
          <span className="text-xs text-gray-400">
            Updated: {lastUpdate.toLocaleTimeString()}
          </span>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center h-64">
          <div className="flex items-center gap-2 text-gray-400">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full"
            />
            <span>Tracking ISS...</span>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="flex items-center justify-center h-64 text-gray-400">
          <div className="text-center">
            <p className="text-red-400 mb-2">⚠ Unable to fetch ISS data</p>
            <button
              onClick={fetchISSPosition}
              className="text-sm text-blue-400 hover:text-blue-300 underline"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Map Visualization */}
      {position && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-gray-700"
        >
          {/* World Map Grid */}
          <div className="absolute inset-0 opacity-20">
            {/* Latitude Lines */}
            {[25, 50, 75].map((pos) => (
              <div
                key={`lat-${pos}`}
                className="absolute w-full border-t border-gray-500"
                style={{ top: `${pos}%` }}
              />
            ))}
            {/* Longitude Lines */}
            {[25, 50, 75].map((pos) => (
              <div
                key={`lon-${pos}`}
                className="absolute h-full border-l border-gray-500"
                style={{ left: `${pos}%` }}
              />
            ))}
          </div>

          {/* ISS Dot */}
          <motion.div
            animate={{
              left: `${mapX}%`,
              top: `${mapY}%`,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute"
          >
            {/* Pulse Ring */}
            <motion.div
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 rounded-full bg-green-400"
            />
            {/* Center Dot */}
            <div className="relative w-4 h-4 -ml-2 -mt-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
            {/* Label */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs font-mono text-green-400 bg-black/70 px-2 py-1 rounded">
                ISS
              </span>
            </div>
          </motion.div>

          {/* Coordinates Display */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-xs text-gray-400">Latitude</span>
              <p className="text-sm font-mono text-white">
                {position.latitude.toFixed(4)}°
              </p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-xs text-gray-400">Longitude</span>
              <p className="text-sm font-mono text-white">
                {position.longitude.toFixed(4)}°
              </p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-xs text-gray-400">Speed</span>
              <p className="text-sm font-mono text-white">27,600 km/h</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
