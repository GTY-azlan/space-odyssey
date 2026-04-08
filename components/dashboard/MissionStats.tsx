"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { launchStats, budgetData, missionTypes } from "@/data/missions";
import { TrendingUp, DollarSign, Rocket, CheckCircle } from "lucide-react";

const COLORS = ["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#EF4444", "#6366F1"];

const COLORS_SIMPLE = ["#3B82F6", "#8B5CF6", "#EC4899"];

export default function MissionStats() {
  const totalLaunches = launchStats.reduce((sum, y) => sum + y.launches, 0);
  const totalSuccessful = launchStats.reduce((sum, y) => sum + y.successful, 0);
  const successRate = ((totalSuccessful / totalLaunches) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl p-4 border border-blue-700/30"
        >
          <Rocket className="w-8 h-8 text-blue-400 mb-2" />
          <p className="text-3xl font-bold text-white font-mono">{totalLaunches}</p>
          <p className="text-sm text-gray-400">Total Launches (2015-2025)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-xl p-4 border border-green-700/30"
        >
          <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
          <p className="text-3xl font-bold text-white font-mono">{totalSuccessful}</p>
          <p className="text-sm text-gray-400">Successful</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl p-4 border border-purple-700/30"
        >
          <TrendingUp className="w-8 h-8 text-purple-400 mb-2" />
          <p className="text-3xl font-bold text-white font-mono">{successRate}%</p>
          <p className="text-sm text-gray-400">Success Rate</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-pink-900/40 to-pink-800/20 rounded-xl p-4 border border-pink-700/30"
        >
          <DollarSign className="w-8 h-8 text-pink-400 mb-2" />
          <p className="text-3xl font-bold text-white font-mono">$25.1B</p>
          <p className="text-sm text-gray-400">2025 Budget</p>
        </motion.div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Launch Trend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Launch Trend (2015-2025)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={launchStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="launches" stroke="#3B82F6" strokeWidth={2} dot={{ fill: "#3B82F6" }} />
              <Line type="monotone" dataKey="successful" stroke="#10B981" strokeWidth={2} dot={{ fill: "#10B981" }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Budget Trend */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-4">NASA Budget (Billions USD)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={budgetData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                formatter={(value: any) => [`$${value}B`, "Budget"]}
              />
              <Bar dataKey="budget" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Mission Types Pie Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Mission Types Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={missionTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry: any) => `${entry.type} ${(entry.percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
              >
                {missionTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="space-y-3">
            {missionTypes.map((type, index) => (
              <div key={type.type} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-gray-300">{type.type}</span>
                </div>
                <span className="text-white font-mono">{type.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
