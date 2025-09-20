import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Star, Clock, Camera, Heart, Users, Calendar, Navigation } from 'lucide-react';

// This would typically come from an API in a real app
const destinationData = {
  1: {
    id: 1,
    name: 'Hundru Falls',
    location: 'Ranchi',
    category: 'waterfalls',
    rating: 4.8,
    reviews: 124,
    duration: '4-5 hours',
    bestTime: 'July - October',
    difficulty: 'Easy',
    price: '₹500',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Hundru Falls is one of the most spectacular waterfalls in Jharkhand, cascading from a height of 320 feet. The waterfall is formed on the Subarnarekha River and is surrounded by lush green forests. The water plunges down the rocky terrain, creating a misty spray that offers a refreshing experience to visitors.',
    longDescription: 'Hundru Falls is located about 45 km from Ranchi and is one of the highest waterfalls in the state. The falls are at their most magnificent during the monsoon season when the water volume is at its peak. The surrounding area offers several viewpoints to admire the falls from different angles. The pool at the bottom is perfect for a refreshing dip, though visitors should be cautious of the strong currents.',
    highlights: [
      'Spectacular 320 feet waterfall',
      'Refreshing natural pool at the base',
      'Scenic viewpoints',
      'Surrounding forest trails',
      'Photography opportunities',
      'Picnic spots'
    ],
    thingsToDo: [
      'Trekking to the base of the falls',
      'Swimming in the natural pool',
      'Nature photography',
      'Picnicking with family and friends',
      'Bird watching in the surrounding forest'
    ],
    howToReach: {
      byAir: 'The nearest airport is Birsa Munda Airport in Ranchi (45 km away)',
      byTrain: 'Nearest railway station is Ranchi Junction (40 km away)',
      byRoad: 'Well-connected by road from Ranchi, taxis and buses available'
    },
    tips: [
      'Wear comfortable walking shoes as there are steps to reach the base',
      'Carry water and snacks as food options are limited',
      'Be cautious while swimming and follow safety guidelines',
      'Visit during weekdays to avoid crowds',
      'Carry a change of clothes if you plan to get in the water'
    ]
  },
  5: {
    id: 5,
    name: 'Jagannath Temple',
    location: 'Ranchi',
    category: 'cultural',
    rating: 4.5,
    reviews: 89,
    duration: '1-2 hours',
    bestTime: 'October - March',
    difficulty: 'Easy',
    price: 'Free',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jagannath_Temple%2C_Ranchi.jpg/1920px-Jagannath_Temple%2C_Ranchi.jpg',
      'https://www.tourmyindia.com/states/jharkhand/images/jagannath-temple-ranchi1.jpg',
      'https://www.holidify.com/images/cmsuploads/compressed/800px-Jagannath_Temple_Ranchi_20170521110758.jpg'
    ],
    description: 'The Jagannath Temple in Ranchi is a beautiful Hindu temple dedicated to Lord Jagannath, Lord Balabhadra, and Goddess Subhadra. The temple is known for its stunning architecture and spiritual significance.',
    longDescription: 'The Jagannath Temple in Ranchi, also known as the Jagannathpur Temple, is a significant pilgrimage site in Jharkhand. Built in 1691, the temple is an architectural marvel with its unique blend of traditional Kalinga and modern architectural styles. The temple complex includes the main shrine, a large courtyard, and several smaller shrines. The annual Rath Yatra (Chariot Festival) is a major attraction, drawing thousands of devotees.',
    highlights: [
      'Stunning Kalinga-style architecture',
      'Annual Rath Yatra festival',
      'Peaceful and spiritual atmosphere',
      'Beautifully maintained gardens',
      'Panoramic views of Ranchi city',
      'Evening aarti ceremony'
    ],
    thingsToDo: [
      'Attend the morning and evening aarti',
      'Explore the temple architecture',
      'Visit during Rath Yatra (June-July)',
      'Enjoy the peaceful surroundings',
      'Photography of the temple structure'
    ],
    howToReach: {
      byAir: 'Nearest airport is Birsa Munda Airport in Ranchi (7 km away)',
      byTrain: 'Ranchi Junction is the nearest railway station (10 km away)',
      byRoad: 'Well-connected by road, taxis and auto-rickshaws available from all parts of Ranchi'
    },
    tips: [
      'Dress modestly as it is a religious site',
      'Remove footwear before entering the temple premises',
      'Visit during weekdays to avoid crowds',
      'Early morning visits are recommended for a peaceful experience',
      'Photography may be restricted in certain areas, check with temple authorities'
    ]
  }
};

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const destination = destinationData[id];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Check if destination is in favorites (in a real app, this would come from a state management solution)
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(parseInt(id)));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const destinationId = parseInt(id);
    
    let newFavorites;
    if (favorites.includes(destinationId)) {
      newFavorites = favorites.filter(favId => favId !== destinationId);
    } else {
      newFavorites = [...favorites, destinationId];
    }
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === destination.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? destination.images.length - 1 : prevIndex - 1
    );
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Destination not found</h2>
          <Link 
            to="/destinations" 
            className="text-primary-600 hover:text-primary-800 font-medium"
          >
            ← Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Back Button with extra top padding to account for fixed navbar */}
      <div className="bg-white shadow-sm pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center py-4 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Destinations</span>
          </button>
        </div>
      </div>

      {/* Hero Section with Image Gallery */}
      <div className="relative h-96 md:h-[500px] bg-gray-200 overflow-hidden">
        {/* Main Image */}
        <img
          src={destination.images[currentImageIndex]}
          alt={destination.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation Arrows */}
        {destination.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        {/* Image Thumbnails */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {destination.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="w-full p-6 md:p-10 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">{destination.name}</h1>
                  <div className="flex items-center text-lg">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span>{destination.location}, Jharkhand</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{destination.rating}</span>
                    <span className="text-sm opacity-80 ml-1">({destination.reviews})</span>
                  </div>
                  <button
                    onClick={toggleFavorite}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-colors"
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Heart 
                      className={`h-6 w-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-white'}`} 
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                About {destination.name}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {destination.longDescription || destination.description}
              </p>
              
              {/* Highlights */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Things to Do Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Things to Do
              </h2>
              <div className="space-y-4">
                {destination.thingsToDo?.map((activity, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-primary-100 p-2 rounded-lg mr-4">
                      <div className="h-8 w-8 flex items-center justify-center text-primary-600">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{activity}</h3>
                    </div>
                  </div>
                )) || (
                  <p className="text-gray-600">No activities listed for this destination.</p>
                )}
              </div>
            </section>

            {/* Tips Section */}
            {destination.tips && destination.tips.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Traveler Tips
                </h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <ul className="space-y-3">
                    {destination.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-6">
              {/* Price Box */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-gray-900">{destination.price}</span>
                  <span className="ml-1 text-gray-500">/ person</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Prices may vary based on group size</p>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Book Now
                </button>
              </div>

              {/* Quick Facts */}
              <div className="p-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{destination.duration}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Best Time to Visit</span>
                    <span className="font-medium">{destination.bestTime}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-600">Difficulty</span>
                    <span className="font-medium">{destination.difficulty}</span>
                  </li>
                </ul>
              </div>

              {/* How to Reach */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">How to Reach</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-gray-700 mb-1">
                      <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span className="font-medium">By Air</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">{destination.howToReach?.byAir || 'Not specified'}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-700 mb-1">
                      <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                      </svg>
                      <span className="font-medium">By Train</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">{destination.howToReach?.byTrain || 'Not specified'}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-gray-700 mb-1">
                      <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                      </svg>
                      <span className="font-medium">By Road</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">{destination.howToReach?.byRoad || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 bg-gray-200 rounded-xl overflow-hidden h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Navigation className="h-8 w-8 mx-auto mb-2" />
                <p>Map view coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationDetail;
