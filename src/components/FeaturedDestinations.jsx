import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { MapPin, Star, Clock, Camera } from 'lucide-react'

const FeaturedDestinations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const destinations = [
    {
      id: 1,
      name: 'Hundru Falls',
      location: 'Ranchi',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Experience the majestic 320-foot waterfall surrounded by lush greenery and rocky terrain.',
      rating: 4.8,
      price: '₹1,200',
      duration: '1 Day',
      highlights: ['Waterfall', 'Trekking', 'Photography']
    },
    {
      id: 2,
      name: 'Betla National Park',
      location: 'Latehar',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Wildlife sanctuary home to tigers, elephants, and diverse flora in pristine forest setting.',
      rating: 4.9,
      price: '₹2,500',
      duration: '2 Days',
      highlights: ['Wildlife', 'Safari', 'Nature']
    },
    {
      id: 3,
      name: 'Netarhat Hill Station',
      location: 'Latehar',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Queen of Chotanagpur plateau offering breathtaking sunrise views and cool climate.',
      rating: 4.7,
      price: '₹1,800',
      duration: '2 Days',
      highlights: ['Sunrise', 'Hills', 'Climate']
    },
    {
      id: 4,
      name: 'Dassam Falls',
      location: 'Ranchi',
      image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spectacular waterfall cascading from 144 feet height, perfect for nature photography.',
      rating: 4.6,
      price: '₹1,000',
      duration: '1 Day',
      highlights: ['Waterfall', 'Photography', 'Picnic']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

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
            className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Curated Experiences</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Discover
            <span className="block gradient-text">Amazing Places</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            From cascading waterfalls to ancient forests and vibrant tribal culture - 
            explore Jharkhand's most spectacular destinations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={cardVariants}
              className="group card-modern card-hover overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-6 right-6 glass-effect px-4 py-2 flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-semibold">{destination.rating}</span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="glass-effect p-4">
                    <div className="flex items-center justify-between text-white mb-2">
                      <span className="text-2xl font-bold">{destination.price}</span>
                      <div className="flex items-center gap-1 text-sm">
                        <Clock className="h-4 w-4" />
                        {destination.duration}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 2).map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  {destination.location}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {destination.name}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-2">
                  {destination.description}
                </p>

                <Link
                  to={`/destinations/${destination.id}`}
                  className="w-full btn-primary flex items-center justify-center gap-3 group/btn"
                >
                  <Camera className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Explore Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-slate-900 rounded-3xl p-12 lg:p-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready for Your Adventure?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
              Explore 50+ carefully curated destinations across Jharkhand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/destinations"
                className="btn-secondary text-lg flex items-center justify-center gap-3"
              >
                <MapPin className="h-5 w-5" />
                View All Destinations
              </Link>
              <Link
                to="/trip-planner"
                className="btn-outline text-lg flex items-center justify-center gap-3"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedDestinations
