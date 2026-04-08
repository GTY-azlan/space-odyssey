"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Thermometer, Wind, Droplets, Cloud, Sun } from "lucide-react";

interface MarsWeather {
  sol: number;
  tempMax: number;
  tempMin: number;
  pressure: number;
  windSpeed: number;
  windDirection: string;
  humidity: number;
  season: string;
  solarRadiation: number;
}

export default function MarsWeather() {
  const [weather, setWeather] = useState<MarsWeather | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated Mars weather data based on Perseverance rover measurements
    // In production, you'd use the NASA InSight API or similar
    const fetchMarsWeather = async () => {
      try {
        // Simulated data - in production use: https://api.nasa.gov/insight_weather/
        const mockData: MarsWeather = {
          sol: 1245,
          tempMax: -22,
          tempMin: -98,
          pressure: 750,
          windSpeed: 25,
          windDirection: "NW",
          humidity: 0.03,
          season: "Northern Spring",
          solarRadiation: 120,
        };
        setWeather(mockData);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMarsWeather();
  }, []);

  const [error, setError] = useState(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-red-400 border-t-transparent rounded-full"
        />
        <span className="ml-3 text-gray-400">Loading Mars weather...</span>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="text-center py-8 text-red-400">
        Unable to fetch Mars weather data
      </div>
    );
  }

  const MetricCard = ({
    icon: Icon,
    label,
    value,
    unit,
    color,
  }: {
    icon: any;
    label: string;
    value: number | string;
    unit: string;
    color: string;
  }) => (
    <div className={`bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-${color}-500/50 transition-colors`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 text-${color}-400`} />
        <span className="text-xs text-gray-400 uppercase tracking-wider">{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-white font-mono">{value}</span>
        <span className="text-xs text-gray-500">{unit}</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <h3 className="text-xl font-semibold text-white">Mars Surface Weather</h3>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
            Sol {weather.sol}
          </span>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">{weather.season}</p>
          <p className="text-xs text-gray-500">Jezero Crater</p>
        </div>
      </div>

      {/* Temperature Display */}
      <div className="bg-gradient-to-br from-red-900/30 via-orange-900/20 to-black rounded-2xl p-8 border border-red-800/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Temperature Visual */}
          <div className="text-center">
            <div className="relative inline-block">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 via-red-600 to-red-900 mx-auto flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="text-4xl font-bold text-white font-mono">
                    {weather.tempMax}°C
                  </p>
                  <p className="text-sm text-red-200">Max Temp</p>
                </div>
              </motion.div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 rounded-lg px-3 py-1">
                <p className="text-xs text-gray-400">
                  Min: <span className="text-blue-400 font-mono">{weather.tempMin}°C</span>
                </p>
              </div>
            </div>
          </div>

          {/* Season Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-xs text-gray-500">Solar Radiation</p>
                <p className="text-white font-mono">{weather.solarRadiation} W/m²</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500">Atmospheric Pressure</p>
                <p className="text-white font-mono">{weather.pressure} Pa</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-xs text-gray-500">Wind</p>
                <p className="text-white font-mono">
                  {weather.windSpeed} km/h {weather.windDirection}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-xs text-gray-500">Humidity</p>
                <p className="text-white font-mono">{weather.humidity}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          icon={Thermometer}
          label="Avg Temp"
          value={Math.round((weather.tempMax + weather.tempMin) / 2)}
          unit="°C"
          color="orange"
        />
        <MetricCard
          icon={Wind}
          label="Wind Speed"
          value={weather.windSpeed}
          unit="km/h"
          color="blue"
        />
        <MetricCard
          icon={Droplets}
          label="Pressure"
          value={weather.pressure}
          unit="Pa"
          color="cyan"
        />
        <MetricCard
          icon={Sun}
          label="Radiation"
          value={weather.solarRadiation}
          unit="W/m²"
          color="yellow"
        />
      </div>

      {/* Info Banner */}
      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
        <p className="text-xs text-red-300">
          <span className="font-semibold">Data Source:</span> Weather data simulated based on
          historical measurements from NASA's Perseverance rover and InSight lander. Actual
          conditions may vary. For real-time data, visit the NASA Mars Exploration Program.
        </p>
      </div>
    </div>
  );
}
