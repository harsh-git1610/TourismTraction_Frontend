import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, MapPin, Users, Star } from 'lucide-react'

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  const stats = [
    { icon: MapPin, value: '50+', label: 'Destinations' },
    { icon: Users, value: '10+', label: 'Tribal Communities' },
    { icon: Star, value: '4.9', label: 'Traveler Rating' }
  ]

  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkIfMobile()
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/download/video/2547258/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="w-full">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center px-4 sm:px-6"
            >
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 sm:mb-8 mx-auto"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm sm:text-base font-medium">Smart Digital Tourism Platform</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                <span className="block">
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Explore Jharkhand's Hidden Wonders
                  </span>
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto text-center font-light leading-relaxed">
                Discover the unexplored beauty of Jharkhand
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 justify-center">
                <Link 
                  to="/destinations" 
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  Start Your Journey
                </Link>
                <button 
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg border border-white/20 transition-colors duration-300"
                  aria-label="Watch our experience video"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={20} className="ml-0.5" />
                  </div>
                  <span className="hidden sm:inline">Watch Experience</span>
                  <span className="sm:hidden">Watch</span>
                </button>
              </div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 sm:pt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 transition-all duration-300 hover:bg-white/20"
                    whileHover={{ y: -5 }}
                  >
                    <stat.icon className="h-8 w-8 text-white mx-auto mb-3" />
                    <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
        <div className="animate-bounce w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/80 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
