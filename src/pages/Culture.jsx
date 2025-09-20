import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Music, Palette, Calendar, Heart, Star } from 'lucide-react'

const Culture = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const tribalCommunities = [
    {
      name: 'Santhal Community',
      population: '2.8 Million',
      image: 'https://vajiramandravi.com/current-affairs/wp-content/uploads/2025/04/santhal_tribal_community.webp',
      description: 'The largest tribal community in Jharkhand, known for their rich oral traditions, Sohrai art, and harmonious relationship with nature.',
      specialties: ['Sohrai Art', 'Folk Music', 'Traditional Dance', 'Organic Farming'],
      festivals: ['Sohrai', 'Karam', 'Baha']
    },
    {
      name: 'Munda Community',
      population: '1.2 Million',
      image: 'http://historified.in/wp-content/uploads/2024/05/1604947869_shutterstock_1488666659.jpg',
      description: 'Known for their democratic traditions and the legendary leader Birsa Munda, they have a deep connection with forest conservation.',
      specialties: ['Traditional Governance', 'Forest Conservation', 'Handicrafts', 'Tribal Medicine'],
      festivals: ['Sarhul', 'Karma', 'Jani Shikar']
    },
    {
      name: 'Ho Community',
      population: '700,000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEBFGzn6UWlj6XefBq0eGSvS23UBwdbX07g&s',
      description: 'Skilled in metallurgy and known for their unique Ho language, they are the traditional iron-smiths of the region.',
      specialties: ['Iron Work', 'Ho Language', 'Traditional Weapons', 'Metalcraft'],
      festivals: ['Mage Parab', 'Baha Parab', 'Kolom Sing']
    }
  ]

  const culturalExperiences = [
    {
      title: 'Traditional Music & Dance',
      description: 'Experience authentic tribal performances with traditional instruments',
      icon: Music,
      image: 'https://www.gosahin.com/go/p/i/t/1560191601_karma-naach-1.jpg',
      duration: '2-3 hours',
      price: '₹800'
    },
    {
      title: 'Art & Craft Workshops',
      description: 'Learn traditional Sohrai painting and tribal handicrafts',
      icon: Palette,
      image: 'https://cdn.shopify.com/s/files/1/1194/1498/files/b8_a2f452dd-5c72-4f22-9dbd-b8c114a86065_480x480.jpg?v=1713962766',
      duration: '4-5 hours',
      price: '₹1,200'
    },
    {
      title: 'Community Homestays',
      description: 'Live with tribal families and experience authentic village life',
      icon: Heart,
      image: 'https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/202279_1755928323.jpg',
      duration: '2-3 days',
      price: '₹2,500'
    },
    {
      title: 'Festival Celebrations',
      description: 'Join vibrant tribal festivals and ceremonial celebrations',
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      duration: '1-2 days',
      price: '₹1,500'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-cover bg-fixed"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
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
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Cultural Heritage</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              Living
              <span className="block">Traditions</span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
              Immerse yourself in the vibrant culture of Jharkhand's indigenous communities 
              and experience traditions that have thrived for centuries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tribal Communities */}
      <section className="py-32 relative" ref={ref}>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-50/90 to-slate-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Tribal <span className="gradient-text">Communities</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Meet the indigenous communities who are the guardians of Jharkhand's cultural heritage
            </p>
          </motion.div>

          <div className="space-y-20">
            {tribalCommunities.map((community, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        {community.name}
                      </h3>
                      <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                        {community.population}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      {community.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-bold text-slate-900 mb-4">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {community.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4">Major Festivals:</h4>
                      <div className="flex flex-wrap gap-2">
                        {community.festivals.map((festival, idx) => (
                          <span
                            key={idx}
                            className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {festival}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Cultural <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Participate in authentic cultural activities and connect with local traditions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-modern card-hover overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <experience.icon className="h-5 w-5 text-orange-600" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-xl font-bold">{experience.price}</span>
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Experience Authentic Culture
            </h2>
            <p className="text-xl font-light mb-8 max-w-3xl mx-auto">
              Join us for immersive cultural experiences that support local communities 
              and preserve traditional heritage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg">
                Book Cultural Tour
              </button>
              <button className="btn-outline text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Culture
