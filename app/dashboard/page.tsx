"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MissionStats from "@/components/dashboard/MissionStats";
import AstronautDatabase from "@/components/dashboard/AstronautDatabase";
import MissionEncyclopedia from "@/components/dashboard/MissionEncyclopedia";
import ImageGallery from "@/components/dashboard/ImageGallery";
import SolarSystem from "@/components/dashboard/SolarSystem";
import MarsWeather from "@/components/dashboard/MarsWeather";
import {
  BarChart3,
  Users,
  BookOpen,
  Image,
  Globe,
  CloudSun,
  ChevronDown,
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "astronauts", label: "Astronauts", icon: Users },
  { id: "missions", label: "Missions", icon: BookOpen },
  { id: "gallery", label: "Image Gallery", icon: Image },
  { id: "solar-system", label: "Solar System", icon: Globe },
  { id: "mars", label: "Mars Weather", icon: CloudSun },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeTabData = tabs.find((t) => t.id === activeTab);
  const Icon = activeTabData?.icon || BarChart3;

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
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

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                Enterprise Platform
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
                Space{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Real-time data, mission statistics, astronaut database, and interactive
                visualizations — your complete space exploration platform
              </p>
            </motion.div>
          </div>
        </div>

        {/* Tab Navigation - Desktop */}
        <div className="hidden md:block bg-gray-900/50 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 py-3 overflow-x-auto">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Navigation - Mobile Dropdown */}
        <div className="md:hidden bg-gray-900/50 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm px-4 py-3">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-800 rounded-lg text-white"
            >
              <div className="flex items-center gap-2">
                <Icon className="w-5 h-5" />
                <span>{activeTabData?.label}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden z-50">
                {tabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                        activeTab === tab.id
                          ? "bg-blue-600 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      <TabIcon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "overview" && (
              <div className="space-y-12">
                <MissionStats />
                <MarsWeather />
              </div>
            )}
            {activeTab === "astronauts" && <AstronautDatabase />}
            {activeTab === "missions" && <MissionEncyclopedia />}
            {activeTab === "gallery" && <ImageGallery />}
            {activeTab === "solar-system" && <SolarSystem />}
            {activeTab === "mars" && <MarsWeather />}
          </motion.div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border-t border-gray-800 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore?
            </h3>
            <p className="text-gray-400 mb-6">
              Access real-time space data, explore our comprehensive databases,
              and dive into the wonders of the universe.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
              <span>📊 Mission Statistics</span>
              <span>•</span>
              <span>👨‍🚀 350+ Astronauts</span>
              <span>•</span>
              <span>🚀 Complete Mission Database</span>
              <span>•</span>
              <span>🖼️ Scientific Image Gallery</span>
              <span>•</span>
              <span>🪐 Interactive Solar System</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
