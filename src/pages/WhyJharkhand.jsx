import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mountain, Leaf, Camera, Heart, Globe, Award, Users, MapPin } from 'lucide-react';

const WhyJharkhand = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Mountain className="w-12 h-12 text-green-600" />,
      title: "Breathtaking Natural Beauty",
      description: "Home to stunning waterfalls like Hundru and Jonha, lush green forests, and the picturesque Netarhat plateau, known as the 'Queen of Chotanagpur'."
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Rich Biodiversity",
      description: "Boasts several wildlife sanctuaries and national parks, including Betla National Park, home to tigers, elephants, and numerous bird species."
    },
    {
      icon: <Camera className="w-12 h-12 text-green-600" />,
      title: "Cultural Heritage",
      description: "A melting pot of indigenous cultures with over 30 tribal communities, each with unique traditions, festivals, and art forms."
    },
    {
      icon: <Heart className="w-12 h-12 text-green-600" />,
      title: "Spiritual Significance",
      description: "Sacred sites like Baidyanath Dham, one of the twelve Jyotirlingas, and Parasnath Hill, a major pilgrimage site for Jains."
    },
    {
      icon: <Globe className="w-12 h-12 text-green-600" />,
      title: "Eco-Tourism Hub",
      description: "Pioneering sustainable tourism with eco-friendly stays, nature trails, and community-based tourism initiatives."
    },
    {
      icon: <Award className="w-12 h-12 text-green-600" />,
      title: "Adventure Tourism",
      description: "Offers thrilling activities like rock climbing, trekking, and water sports at various locations across the state."
    }
  ];

  const advantages = [
    {
      title: "Less Crowded",
      description: "Escape the tourist crowds and experience authentic, off-the-beaten-path destinations.",
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      title: "Affordable Travel",
      description: "Enjoy premium experiences at a fraction of the cost compared to more commercialized destinations.",
      icon: <Award className="w-8 h-8 text-white" />
    },
    {
      title: "Year-Round Destination",
      description: "Pleasant weather throughout the year, with each season offering unique experiences.",
      icon: <MapPin className="w-8 h-8 text-white" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-green-700 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-yellow-300">Jharkhand</span>?
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Discover the untamed beauty and cultural richness of India's hidden gem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Experience the Unexplored
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Jharkhand, the 'Land of Forests', offers a perfect blend of natural wonders, 
              cultural heritage, and thrilling adventures, making it an ideal destination 
              for all types of travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Makes Jharkhand Special
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Jharkhand Stands Out
            </h2>
            <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">
                  {advantage.title}
                </h3>
                <p className="text-white/90 text-center">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Explore Jharkhand?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Start planning your unforgettable journey to Jharkhand today and experience the magic of this hidden paradise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/destinations"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Explore Destinations
            </a>
            <a
              href="/trip-planner"
              className="px-8 py-4 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold rounded-lg transition-colors duration-300"
            >
              Plan Your Trip
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhyJharkhand;
