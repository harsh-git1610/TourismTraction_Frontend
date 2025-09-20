import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Leaf, TreePine, Recycle, Heart, Shield, Camera } from 'lucide-react'

const EcoTourismFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Zero-waste tourism with eco-friendly accommodations and responsible travel practices',
      stats: '100% Green'
    },
    {
      icon: TreePine,
      title: 'Forest Conservation',
      description: 'Supporting reforestation efforts and protecting biodiversity through tourism revenue',
      stats: '500+ Trees'
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Direct benefits to local communities through homestays and cultural exchange programs',
      stats: '50+ Families'
    },
    {
      icon: Shield,
      title: 'Wildlife Protection',
      description: 'Contributing to wildlife conservation and anti-poaching efforts in national parks',
      stats: '10+ Species'
    }
  ]

  const initiatives = [
    {
      title: 'Carbon Neutral Travel',
      description: 'Offset your carbon footprint through verified forest conservation projects',
      icon: Recycle,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Wildlife Photography',
      description: 'Ethical wildlife photography tours supporting conservation research',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <section className="py-32 bg-slate-50" ref={ref}>
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
            className="inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Sustainable Tourism</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Eco-Friendly
            <span className="block gradient-text">Adventures</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Travel responsibly while making a positive impact on the environment 
            and local communities through sustainable eco-tourism
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-modern p-8 text-center group hover:bg-green-50 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-3xl font-bold text-green-600 mb-2">{feature.stats}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Initiatives Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ x: index === 0 ? -50 : 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="card-modern overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <initiative.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{initiative.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">{initiative.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-12 lg:p-16 text-white">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              Join the Green Revolution
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Be part of sustainable tourism that protects nature for future generations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg">
                Learn More
              </button>
              <button className="btn-outline text-lg">
                Carbon Calculator
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EcoTourismFeatures
