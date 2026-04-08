"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { missions } from "@/data/missions";
import { Search, Calendar, Users, CheckCircle, XCircle, AlertCircle, ExternalLink } from "lucide-react";

export default function MissionEncyclopedia() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [expandedMission, setExpandedMission] = useState<string | null>(null);

  const filteredMissions = useMemo(() => {
    return missions.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.objective.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.agency.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "all" || m.type === selectedType;
      const matchesStatus = selectedStatus === "all" || m.status === selectedStatus;
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchTerm, selectedType, selectedStatus]);

  const missionTypes = ["all", ...Array.from(new Set(missions.map((m) => m.type)))];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "failure":
        return <XCircle className="w-5 h-5 text-red-400" />;
      case "partial":
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-400 bg-green-400/10 border-green-400/30";
      case "failure":
        return "text-red-400 bg-red-400/10 border-red-400/30";
      case "partial":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/30";
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 rounded-xl p-4 border border-gray-800"
        >
          <p className="text-3xl font-bold text-white font-mono">{missions.length}</p>
          <p className="text-sm text-gray-400">Featured Missions</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/50 rounded-xl p-4 border border-gray-800"
        >
          <p className="text-3xl font-bold text-green-400 font-mono">
            {missions.filter((m) => m.status === "success").length}
          </p>
          <p className="text-sm text-gray-400">Successful</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 rounded-xl p-4 border border-gray-800"
        >
          <p className="text-3xl font-bold text-blue-400 font-mono">
            {missions.reduce((sum, m) => sum + m.crew, 0)}
          </p>
          <p className="text-sm text-gray-400">Total Crew Flown</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 rounded-xl p-4 border border-gray-800"
        >
          <p className="text-3xl font-bold text-purple-400 font-mono">
            {missions.reduce((sum, m) => sum + m.year, 0) / missions.length}
          </p>
          <p className="text-sm text-gray-400">Avg Year</p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search missions, agencies, objectives..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-3">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
          >
            {missionTypes.map((type) => (
              <option key={type} value={type}>
                {type === "all" ? "All Types" : type}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="success">Success</option>
            <option value="failure">Failure</option>
            <option value="partial">Partial</option>
          </select>
        </div>
      </div>

      {/* Mission Timeline */}
      <div className="space-y-4">
        {filteredMissions.map((mission, index) => (
          <motion.div
            key={mission.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors overflow-hidden"
          >
            <button
              onClick={() => setExpandedMission(expandedMission === mission.id ? null : mission.id)}
              className="w-full p-6 text-left"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {getStatusIcon(mission.status)}
                    <h3 className="text-xl font-bold text-white">{mission.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded border ${getStatusColor(mission.status)}`}
                    >
                      {mission.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{mission.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{mission.crew} crew members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🏢</span>
                      <span>{mission.agency}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🎯</span>
                      <span>{mission.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-300">{mission.objective}</p>
                </div>

                <ExternalLink
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedMission === mission.id ? "rotate-45" : ""
                  }`}
                />
              </div>
            </button>

            {/* Expanded Details */}
            {expandedMission === mission.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-6 pb-6 border-t border-gray-800"
              >
                <div className="pt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Outcome</h4>
                      <p className="text-gray-300">{mission.outcome}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Duration</h4>
                      <p className="text-white font-mono">{mission.duration}</p>
                    </div>
                  </div>

                  <div className="h-48 rounded-lg overflow-hidden">
                    <img
                      src={mission.image}
                      alt={mission.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {filteredMissions.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No missions found matching your criteria</p>
          <p className="text-sm mt-2">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
