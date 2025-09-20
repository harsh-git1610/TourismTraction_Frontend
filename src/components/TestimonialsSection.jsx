import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'The eco-tourism experience in Jharkhand was absolutely breathtaking! The waterfalls, forests, and cultural immersion exceeded all expectations. Highly recommended for nature lovers.',
      // image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Hundru Falls & Betla National Park'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: 'Amazing platform! The trip planning was seamless, and the local guides were incredibly knowledgeable about the tribal culture and wildlife. A perfect blend of adventure and learning.',
      // image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Cultural Heritage Tour'
    },
    {
      id: 3,
      name: 'Anita Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'The sustainable tourism approach really impressed me. We learned so much about conservation while enjoying the pristine beauty of Jharkhand. The photography workshops were fantastic!',
      // image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Photography & Nature Tour'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Kolkata',
      rating: 5,
      text: 'Netarhat sunrise was magical! The entire experience was well-organized, from accommodation to local cuisine. The digital platform made booking and planning so convenient.',
      // image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Hill Station Retreat'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Travelers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from adventurers who have experienced the magic of Jharkhand's 
            eco-tourism and cultural heritage.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <Quote className="h-12 w-12 text-primary-200" />
              <div className="flex gap-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <p className="text-primary-600 text-sm font-medium">
                    {testimonials[currentTestimonial].trip}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-300"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index 
                        ? 'bg-primary-600 w-8' 
                        : 'bg-gray-300 hover:bg-primary-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-300"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '5000+', label: 'Happy Travelers' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '50+', label: 'Tour Packages' },
            { number: '100%', label: 'Eco-Friendly' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
