import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Star, Clock, Camera, Filter, Search, Heart } from 'lucide-react'

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])

  const categories = [
    { id: 'all', name: 'All Destinations', count: 24 },
    { id: 'waterfalls', name: 'Waterfalls', count: 8 },
    { id: 'wildlife', name: 'Wildlife', count: 6 },
    { id: 'hills', name: 'Hill Stations', count: 4 },
    { id: 'cultural', name: 'Cultural Sites', count: 6 }
  ]

  const destinations = [
    {
      id: 1,
      name: 'Hundru Falls',
      location: 'Ranchi',
      category: 'waterfalls',
      rating: 4.8,
      duration: '4-5 hours',
      price: '₹500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'One of the highest waterfalls in Jharkhand, cascading from 320 feet height.',
      highlights: ['Trekking', 'Photography', 'Nature Walk'],
      bestTime: 'July - October',
      difficulty: 'Easy'
    },
    {
      id: 2,
      name: 'Betla National Park',
      location: 'Latehar',
      category: 'wildlife',
      rating: 4.7,
      duration: 'Full Day',
      price: '₹1200',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Rich wildlife sanctuary home to tigers, elephants, and diverse flora.',
      highlights: ['Wildlife Safari', 'Bird Watching', 'Camping'],
      bestTime: 'November - March',
      difficulty: 'Moderate'
    },
    {
      id: 3,
      name: 'Netarhat',
      location: 'Latehar',
      category: 'hills',
      rating: 4.9,
      duration: '2-3 days',
      price: '₹2500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Queen of Chotanagpur, famous for sunrise and sunset views.',
      highlights: ['Hill Station', 'Sunrise Point', 'Cool Climate'],
      bestTime: 'October - March',
      difficulty: 'Easy'
    },
    {
      id: 4,
      name: 'Dassam Falls',
      location: 'Ranchi',
      category: 'waterfalls',
      rating: 4.6,
      duration: '3-4 hours',
      price: '₹400',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Spectacular waterfall formed by Kanchi River, perfect for picnics.',
      highlights: ['Waterfall', 'Picnic Spot', 'Rock Climbing'],
      bestTime: 'July - September',
      difficulty: 'Easy'
    },
    {
      id: 5,
      name: 'Jagannath Temple',
      location: 'Ranchi',
      category: 'cultural',
      rating: 4.5,
      duration: '2-3 hours',
      price: '₹200',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jagannath_Temple%2C_Ranchi.jpg/1920px-Jagannath_Temple%2C_Ranchi.jpg',
      description: 'Ancient temple with beautiful architecture and spiritual significance.',
      highlights: ['Architecture', 'Spirituality', 'History'],
      bestTime: 'Year Round',
      difficulty: 'Easy'
    },
    {
      id: 6,
      name: 'Jonha Falls',
      location: 'Ranchi',
      category: 'waterfalls',
      rating: 4.4,
      duration: '3-4 hours',
      price: '₹350',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Scenic waterfall surrounded by dense forests and rocky terrain.',
      highlights: ['Waterfall', 'Trekking', 'Photography'],
      bestTime: 'July - October',
      difficulty: 'Moderate'
    }
  ]

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800'
      case 'Hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Explore <span className="text-yellow-300">Destinations</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Discover breathtaking waterfalls, pristine forests, majestic hills, and rich cultural heritage sites across Jharkhand
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-primary-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-gray-600">
            Showing <span className="font-semibold text-primary-600">{filteredDestinations.length}</span> destinations
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Elements */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
                
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                  {destination.price}
                </div>

                <button
                  onClick={() => toggleFavorite(destination.id)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`h-5 w-5 ${
                      favorites.includes(destination.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-600'
                    }`} 
                  />
                </button>

                <div className={`absolute bottom-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(destination.difficulty)}`}>
                  {destination.difficulty}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  {destination.location}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {destination.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Clock className="h-4 w-4" />
                  {destination.duration}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-gray-500 mb-4">
                  Best Time: {destination.bestTime}
                </div>

                <Link 
                  to={`/destinations/${destination.id}`}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Camera className="h-4 w-4" />
                  Explore Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Destinations
