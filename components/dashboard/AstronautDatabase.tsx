"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { astronauts, eraStats } from "@/data/astronauts";
import { Search, Filter, User, Clock, Rocket, Footprints } from "lucide-react";

export default function AstronautDatabase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEra, setSelectedEra] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filteredAstronauts = useMemo(() => {
    return astronauts.filter((a) => {
      const matchesSearch =
        a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.bio.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesEra = selectedEra === "all" || a.era === selectedEra;
      const matchesStatus = selectedStatus === "all" || a.status === selectedStatus;
      return matchesSearch && matchesEra && matchesStatus;
    });
  }, [searchTerm, selectedEra, selectedStatus]);

  const eras = ["all", "1960s", "1970s", "1980s", "1990s", "2000s-2010s", "2010s", "2020s"];
  const statuses = ["all", "active", "retired", "deceased"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-400 bg-green-400/10 border-green-400/30";
      case "retired":
        return "text-blue-400 bg-blue-400/10 border-blue-400/30";
      case "deceased":
        return "text-gray-400 bg-gray-400/10 border-gray-400/30";
    }
  };

  return (
    <div className="space-y-6">
      {/* Era Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {eraStats.map((era) => (
          <motion.div
            key={era.era}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900/50 rounded-lg p-3 border border-gray-800 text-center"
          >
            <p className="text-lg font-bold text-white font-mono">{era.era}</p>
            <p className="text-xs text-gray-400">{era.astronauts} astronauts</p>
            <p className="text-xs text-gray-500">{era.missions} missions</p>
          </motion.div>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search astronauts, countries, bios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={selectedEra}
              onChange={(e) => setSelectedEra(e.target.value)}
              className="pl-9 pr-8 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
            >
              {eras.map((era) => (
                <option key={era} value={era}>
                  {era === "all" ? "All Eras" : era}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="pl-9 pr-8 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status === "all" ? "All Status" : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-400">
        Showing <span className="text-white font-semibold">{filteredAstronauts.length}</span> of{" "}
        <span className="text-white font-semibold">{astronauts.length}</span> astronauts
      </p>

      {/* Astronaut Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAstronauts.map((astronaut, index) => (
          <motion.div
            key={astronaut.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors overflow-hidden"
          >
            {/* Header */}
            <div className="h-24 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-pink-900/50 relative">
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <h3 className="text-lg font-bold text-white">{astronaut.name}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded border ${getStatusColor(astronaut.status)}`}
                >
                  {astronaut.status.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <p className="text-sm text-gray-400">{astronaut.bio}</p>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Rocket className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-500">Missions:</span>
                  <span className="text-white font-mono">{astronaut.missions}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Footprints className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-500">Spacewalks:</span>
                  <span className="text-white font-mono">{astronaut.eva}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span className="text-gray-500">Days:</span>
                  <span className="text-white font-mono">{astronaut.daysInSpace}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-500">Country:</span>
                  <span className="text-white font-mono">{astronaut.country}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-800">
                <p className="text-xs text-gray-500">
                  Active: {astronaut.firstFlight} - {astronaut.lastFlight} | Era: {astronaut.era}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredAstronauts.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <User className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No astronauts found matching your criteria</p>
          <p className="text-sm mt-2">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
