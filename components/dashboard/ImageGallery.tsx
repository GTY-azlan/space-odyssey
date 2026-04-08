"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Download, Eye, Maximize2, X } from "lucide-react";

interface ImageItem {
  id: string;
  title: string;
  category: string;
  telescope: string;
  date: string;
  distance: string;
  wavelength: string;
  thumbnail: string;
  fullRes: string;
  description: string;
}

const images: ImageItem[] = [
  {
    id: "pillars-creation",
    title: "Pillars of Creation",
    category: "Nebula",
    telescope: "James Webb",
    date: "2022-10-19",
    distance: "6,500 light-years",
    wavelength: "Infrared",
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80",
    fullRes: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&q=90",
    description: "Iconic star-forming region in the Eagle Nebula captured in infrared",
  },
  {
    id: "carina-nebula",
    title: "Carina Nebula",
    category: "Nebula",
    telescope: "James Webb",
    date: "2022-07-12",
    distance: "7,600 light-years",
    wavelength: "Infrared",
    thumbnail: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&q=80",
    fullRes: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1600&q=90",
    description: "Cosmic cliffs of the Carina Nebula revealing previously hidden stars",
  },
  {
    id: "sombrero-galaxy",
    title: "Sombrero Galaxy",
    category: "Galaxy",
    telescope: "James Webb",
    date: "2023-05-24",
    distance: "29 million light-years",
    wavelength: "Infrared",
    thumbnail: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=400&q=80",
    fullRes: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=1600&q=90",
    description: "Massive galaxy with a supermassive black hole at its center",
  },
  {
    id: "mars-surface",
    title: "Mars Surface Panorama",
    category: "Planet",
    telescope: "Perseverance Rover",
    date: "2024-02-15",
    distance: "225 million km",
    wavelength: "Visible",
    thumbnail: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=400&q=80",
    fullRes: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=1600&q=90",
    description: "High-resolution panorama of Jezero Crater on Mars",
  },
  {
    id: "iss-earth",
    title: "ISS Over Earth",
    category: "Space Station",
    telescope: "ISS Camera",
    date: "2024-08-10",
    distance: "408 km altitude",
    wavelength: "Visible",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    fullRes: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=90",
    description: "Stunning view of Earth from the International Space Station",
  },
  {
    id: "deep-field",
    title: "Webb's First Deep Field",
    category: "Deep Field",
    telescope: "James Webb",
    date: "2022-07-11",
    distance: "13+ billion light-years",
    wavelength: "Infrared",
    thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
    fullRes: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600&q=90",
    description: "Deepest infrared image of the universe ever taken",
  },
  {
    id: "saturn-jwst",
    title: "Saturn in Infrared",
    category: "Planet",
    telescope: "James Webb",
    date: "2023-08-21",
    distance: "1.4 billion km",
    wavelength: "Infrared",
    thumbnail: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=400&q=80",
    fullRes: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=1600&q=90",
    description: "Saturn's rings and moons revealed in stunning infrared detail",
  },
  {
    id: "moon-landing",
    title: "Apollo 11 Landing Site",
    category: "Moon",
    telescope: "LRO",
    date: "2009-09-04",
    distance: "384,400 km",
    wavelength: "Visible",
    thumbnail: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&q=80",
    fullRes: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1600&q=90",
    description: "High-resolution image of the Apollo 11 landing site from lunar orbit",
  },
];

export default function ImageGallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTelescope, setSelectedTelescope] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const categories = ["all", ...Array.from(new Set(images.map((i) => i.category)))];
  const telescopes = ["all", ...Array.from(new Set(images.map((i) => i.telescope)))];

  const filteredImages = useMemo(() => {
    return images.filter((img) => {
      const matchesSearch =
        img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || img.category === selectedCategory;
      const matchesTelescope = selectedTelescope === "all" || img.telescope === selectedTelescope;
      return matchesSearch && matchesCategory && matchesTelescope;
    });
  }, [searchTerm, selectedCategory, selectedTelescope]);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 text-center"
        >
          <p className="text-3xl font-bold text-white font-mono">{images.length}</p>
          <p className="text-sm text-gray-400">Curated Images</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 text-center"
        >
          <p className="text-3xl font-bold text-blue-400 font-mono">
            {new Set(images.map((i) => i.telescope)).size}
          </p>
          <p className="text-sm text-gray-400">Telescopes</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 text-center"
        >
          <p className="text-3xl font-bold text-purple-400 font-mono">
            {new Set(images.map((i) => i.category)).size}
          </p>
          <p className="text-sm text-gray-400">Categories</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 text-center"
        >
          <p className="text-3xl font-bold text-green-400 font-mono">
            {new Set(images.map((i) => i.wavelength)).size}
          </p>
          <p className="text-sm text-gray-400">Wavelengths</p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-9 pr-8 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          <select
            value={selectedTelescope}
            onChange={(e) => setSelectedTelescope(e.target.value)}
            className="px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
          >
            {telescopes.map((tel) => (
              <option key={tel} value={tel}>
                {tel === "all" ? "All Telescopes" : tel}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="group relative bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={image.thumbnail}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-between">
                    <Eye className="w-5 h-5 text-white" />
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold text-white truncate">{image.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{image.telescope} • {image.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className="aspect-video">
              <img
                src={selectedImage.fullRes}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedImage.title}</h2>
                  <p className="text-gray-400 mt-1">{selectedImage.description}</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Category</p>
                  <p className="text-white font-mono">{selectedImage.category}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Telescope</p>
                  <p className="text-white font-mono">{selectedImage.telescope}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Distance</p>
                  <p className="text-white font-mono">{selectedImage.distance}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Wavelength</p>
                  <p className="text-white font-mono">{selectedImage.wavelength}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
