"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "That's one small step for man, one giant leap for mankind.",
    author: "Neil Armstrong",
    role: "Apollo 11 Commander",
    year: "1969",
    image: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=600&q=80",
  },
  {
    text: "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.",
    author: "Konstantin Tsiolkovsky",
    role: "Rocket Scientist",
    year: "1911",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
  },
  {
    text: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan",
    role: "Astronomer & Author",
    year: "1980",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80",
  },
  {
    text: "We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.",
    author: "John F. Kennedy",
    role: "35th U.S. President",
    year: "1962",
    image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=600&q=80",
  },
];

export default function Quotes() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
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
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
            Words That Inspired
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Voices from the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cosmos
            </span>
          </h2>
        </motion.div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-purple-500/50 transition-colors"
            >
              {/* Quote Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={quote.image}
                  alt={quote.author}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>

              {/* Quote Content */}
              <div className="relative p-6 -mt-12">
                <svg
                  className="w-10 h-10 text-purple-400 mb-4 opacity-70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed italic">
                  "{quote.text}"
                </p>
                <div>
                  <p className="text-white font-semibold">{quote.author}</p>
                  <p className="text-gray-400 text-sm">
                    {quote.role} • {quote.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
