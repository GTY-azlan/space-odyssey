"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Launch {
  name: string;
  date_utc: string;
  details: string;
  rocket: string;
  launchpad: string;
}

export default function LaunchCountdown() {
  const [launch, setLaunch] = useState<Launch | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const fetchLaunch = async () => {
      try {
        const res = await fetch(
          "https://api.spacexdata.com/v4/launches/upcoming"
        );
        const data = await res.json();
        const nextLaunch = data[0];

        if (nextLaunch) {
          setLaunch({
            name: nextLaunch.name,
            date_utc: nextLaunch.date_utc,
            details: nextLaunch.details || "Details TBD",
            rocket: nextLaunch.rocket?.name || "Unknown",
            launchpad: nextLaunch.launchpad?.name || "Unknown",
          });
          setError(false);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLaunch();
  }, []);

  useEffect(() => {
    if (!launch?.date_utc) return;

    const updateCountdown = () => {
      const launchDate = new Date(launch.date_utc);
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();

      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [launch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-2 text-gray-400">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full"
          />
          <span>Loading next launch...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-red-400">
        Unable to fetch launch data
      </div>
    );
  }

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <motion.div
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-white font-mono bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-3 md:p-4 border border-gray-700 min-w-[60px] md:min-w-[80px]"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <span className="text-xs text-gray-400 mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse" />
        <h3 className="text-lg font-semibold text-white">Next Launch</h3>
        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
          LIVE
        </span>
      </div>

      {/* Launch Info */}
      {launch && (
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-white mb-2">{launch.name}</h4>
          <p className="text-gray-400 text-sm mb-1">{launch.details}</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <span>🚀 {launch.rocket}</span>
            <span>📍 {launch.launchpad}</span>
            <span>
              📅{" "}
              {new Date(launch.date_utc).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      )}

      {/* Countdown */}
      <div className="flex gap-3 md:gap-4 justify-center">
        <TimeBlock value={countdown.days} label="Days" />
        <TimeBlock value={countdown.hours} label="Hours" />
        <TimeBlock value={countdown.minutes} label="Minutes" />
        <TimeBlock value={countdown.seconds} label="Seconds" />
      </div>
    </div>
  );
}
