import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, Users, Clock, Star, Camera, Leaf, Heart } from 'lucide-react'

const TripPlanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    destination: '',
    duration: '',
    travelers: '',
    interests: [],
    budget: '',
    accommodation: ''
  })

  const [generatedTrip, setGeneratedTrip] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const interests = [
    { id: 'nature', label: 'Nature & Wildlife', icon: Leaf },
    { id: 'culture', label: 'Cultural Heritage', icon: Heart },
    { id: 'adventure', label: 'Adventure Sports', icon: Camera },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'wellness', label: 'Wellness & Spa', icon: Heart },
    { id: 'food', label: 'Local Cuisine', icon: Heart }
  ]

  const destinations = [
    'Hundru Falls', 'Betla National Park', 'Netarhat Hill Station', 
    'Dassam Falls', 'Ranchi Lake', 'Palamau Fort'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleInterestToggle = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }))
  }

  const generateTrip = async () => {
    setIsGenerating(true)
    
    // Simulate AI trip generation
    setTimeout(() => {
      const sampleTrip = {
        title: `${formData.duration}-Day Jharkhand Adventure`,
        totalCost: '₹12,500',
        highlights: ['Hundru Falls', 'Tribal Village Visit', 'Wildlife Safari'],
        itinerary: [
          {
            day: 1,
            title: 'Arrival & Hundru Falls',
            activities: [
              'Check-in at eco-resort',
              'Visit Hundru Falls (320ft waterfall)',
              'Photography session',
              'Local cuisine dinner'
            ],
            accommodation: 'Eco Resort Ranchi',
            meals: 'Lunch, Dinner'
          },
          {
            day: 2,
            title: 'Cultural Immersion',
            activities: [
              'Visit Santhal tribal village',
              'Traditional art workshop',
              'Folk music performance',
              'Community lunch'
            ],
            accommodation: 'Tribal Homestay',
            meals: 'Breakfast, Lunch, Dinner'
          },
          {
            day: 3,
            title: 'Wildlife & Departure',
            activities: [
              'Betla National Park safari',
              'Bird watching',
              'Nature walk',
              'Departure'
            ],
            accommodation: 'Forest Lodge',
            meals: 'Breakfast, Lunch'
          }
        ]
      }
      setGeneratedTrip(sampleTrip)
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-cover bg-fixed"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      {/* Hero Section */}
      <section className="relative py-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Planning</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              Smart Trip
              <span className="block">Planner</span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
              Let our AI create the perfect Jharkhand itinerary tailored to your 
              interests, budget, and travel style
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trip Planning Form */}
      <section className="py-32 relative" ref={ref}>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-50/90 to-slate-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {!generatedTrip ? (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Plan Your Perfect Trip
                </h2>
                <p className="text-xl text-slate-600">
                  Tell us your preferences and we'll create a personalized itinerary
                </p>
              </div>

              <div className="space-y-8">
                {/* Destination Selection */}
                <div>
                  <label className="block text-lg font-semibold text-slate-900 mb-4">
                    Preferred Destination
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {destinations.map((dest, index) => (
                      <button
                        key={index}
                        onClick={() => handleInputChange('destination', dest)}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                          formData.destination === dest
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration & Travelers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-semibold text-slate-900 mb-4">
                      Duration
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:outline-none"
                    >
                      <option value="">Select duration</option>
                      <option value="2">2 Days</option>
                      <option value="3">3 Days</option>
                      <option value="5">5 Days</option>
                      <option value="7">1 Week</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-slate-900 mb-4">
                      Number of Travelers
                    </label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => handleInputChange('travelers', e.target.value)}
                      className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:outline-none"
                    >
                      <option value="">Select travelers</option>
                      <option value="1">Solo Traveler</option>
                      <option value="2">Couple</option>
                      <option value="3-5">Small Group (3-5)</option>
                      <option value="6+">Large Group (6+)</option>
                    </select>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-lg font-semibold text-slate-900 mb-4">
                    Your Interests
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {interests.map((interest) => (
                      <button
                        key={interest.id}
                        onClick={() => handleInterestToggle(interest.id)}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 flex items-center gap-3 ${
                          formData.interests.includes(interest.id)
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <interest.icon className="h-5 w-5" />
                        <span className="font-medium">{interest.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget & Accommodation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-semibold text-slate-900 mb-4">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:outline-none"
                    >
                      <option value="">Select budget</option>
                      <option value="budget">Budget (₹5,000-10,000)</option>
                      <option value="mid">Mid-range (₹10,000-20,000)</option>
                      <option value="luxury">Luxury (₹20,000+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-slate-900 mb-4">
                      Accommodation Type
                    </label>
                    <select
                      value={formData.accommodation}
                      onChange={(e) => handleInputChange('accommodation', e.target.value)}
                      className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:outline-none"
                    >
                      <option value="">Select accommodation</option>
                      <option value="hotel">Hotels</option>
                      <option value="resort">Eco Resorts</option>
                      <option value="homestay">Tribal Homestays</option>
                      <option value="camping">Camping</option>
                    </select>
                  </div>
                </div>

                {/* Generate Button */}
                <div className="text-center pt-8">
                  <button
                    onClick={generateTrip}
                    disabled={isGenerating || !formData.destination || !formData.duration}
                    className="btn-primary text-xl px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isGenerating ? (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Generating Your Trip...
                      </div>
                    ) : (
                      'Generate My Trip'
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Generated Trip Display */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 relative"
            >
              {/* Trip Overview */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                    {generatedTrip.title}
                  </h2>
                  <div className="flex items-center justify-center gap-8 text-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <span>{formData.duration} Days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-green-600" />
                      <span>{formData.travelers} Travelers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-green-600" />
                      <span className="font-bold text-green-600">{generatedTrip.totalCost}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {generatedTrip.highlights.map((highlight, index) => (
                    <div key={index} className="bg-green-50 rounded-2xl p-6 text-center">
                      <h4 className="font-bold text-green-800">{highlight}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Itinerary */}
              <div className="space-y-6">
                {generatedTrip.itinerary.map((day, index) => (
                  <div key={index} className="bg-white rounded-3xl shadow-lg p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {day.day}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{day.title}</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-4">Activities:</h4>
                        <ul className="space-y-2">
                          {day.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <Clock className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-slate-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Accommodation:</h4>
                          <p className="text-slate-700">{day.accommodation}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Meals:</h4>
                          <p className="text-slate-700">{day.meals}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="text-center space-y-4 relative">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary text-lg">
                    Book This Trip
                  </button>
                  <button className="btn-secondary text-lg">
                    Customize Further
                  </button>
                  <button 
                    onClick={() => setGeneratedTrip(null)}
                    className="btn-outline text-lg border-slate-300 text-slate-700 hover:bg-slate-100"
                  >
                    Plan New Trip
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  )
}

export default TripPlanner;
