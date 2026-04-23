import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroDesktop() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const progress = Math.min(scrollY / 300, 1)
  const imageAOpacity = 1 - progress
  const imageBOpacity = progress
  const imageBScale = 1.05 - progress * 0.05

  return (
    <div className="hidden lg:flex h-screen bg-dark-bg pt-16">
      {/* Left Column - Images */}
      <div className="w-[55%] relative overflow-hidden">
        {/* Image A */}
        <img
          src="https://res.cloudinary.com/dzucbgb7h/image/upload/q_100,f_auto/hero-desktop-nojersery_m4bnr0.jpg"
          alt="No Jersey"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: imageAOpacity,
            transition: 'none',
          }}
        />

        {/* Image B */}
        <img
          src="https://res.cloudinary.com/dzucbgb7h/image/upload/q_100,f_auto/hero-desktop-jersey_af6xce.jpg"
          alt="Jersey"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: imageBOpacity,
            transform: `scale(${imageBScale})`,
            transition: 'none',
          }}
        />
      </div>

      {/* Right Column - Content */}
      <div className="w-[45%] flex flex-col justify-center px-12 py-8 relative">
        {/* Red Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-primary-red"></div>
          <span className="font-oswald text-primary-red text-sm font-bold tracking-widest">
            NEW COLLECTION 2026
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="font-bebas-neue text-[96px] leading-[0.9] text-light-text font-bold">
            WEAR THE
            <br />
            <span
              style={{
                textShadow: '0 0 30px rgba(204, 0, 0, 0.6)',
              }}
              className="text-primary-red"
            >
              GAME.
            </span>
          </h1>
        </div>

        {/* Subtext */}
        <p className="font-inter text-lg text-gray-400 mb-8 max-w-md leading-relaxed">
          Premium football jerseys for players who demand the best. Authentic.
          Bold. Unstoppable.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-12">
          <motion.button
            whileHover={{ y: -2 }}
            className="bg-primary-red text-dark-bg font-oswald font-bold px-8 py-3 rounded text-sm hover:shadow-red-glow transition-all duration-200"
          >
            SHOP NOW
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: '#CC0000' }}
            className="border-2 border-light-text text-light-text font-oswald font-bold px-8 py-3 rounded text-sm hover:text-dark-bg transition-colors duration-200"
          >
            VIEW COLLECTION
          </motion.button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 text-sm">
          <span className="font-inter text-gray-300">500+ Jerseys</span>
          <div className="w-px h-4 bg-primary-red"></div>
          <span className="font-inter text-gray-300">50+ Clubs</span>
          <div className="w-px h-4 bg-primary-red"></div>
          <span className="font-inter text-gray-300">100% Authentic</span>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 right-12 flex flex-col items-center"
        >
          <span className="text-primary-red text-xs font-oswald font-bold mb-2">
            SCROLL
          </span>
          <ChevronDown className="w-5 h-5 text-primary-red" />
        </motion.div>
      </div>
    </div>
  )
}
