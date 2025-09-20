import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Music, Palette, Calendar } from 'lucide-react'

const CulturalHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const culturalFeatures = [
    {
      icon: Users,
      title: 'Tribal Communities',
      description: 'Experience authentic tribal culture with Santhal, Munda, and Ho communities',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Music,
      title: 'Traditional Music',
      description: 'Immerse in folk songs, traditional instruments, and cultural performances',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Palette,
      title: 'Arts & Crafts',
      description: 'Discover handwoven textiles, pottery, and traditional artwork',
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Calendar,
      title: 'Festivals',
      description: 'Join vibrant celebrations like Sarhul, Karma, and Sohrai festivals',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-green-500 to-teal-600'
    }
  ]

  return (
    <section className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Cultural Heritage</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Rich
            <span className="block gradient-text">Cultural Legacy</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Immerse yourself in the vibrant traditions, ancient customs, and 
            living heritage of Jharkhand's indigenous communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-modern card-hover overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-12 lg:p-16 text-white">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience Authentic Culture
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Join immersive cultural programs and connect with local communities
            </p>
            <button className="btn-secondary text-lg">
              Explore Cultural Tours
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CulturalHighlights
