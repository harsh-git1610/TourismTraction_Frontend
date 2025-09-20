import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Send, CheckCircle } from 'lucide-react'

const NewsletterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1500)
  }

  const benefits = [
    'Exclusive destination guides and hidden gems',
    'Early access to new tour packages and offers',
    'Cultural event notifications and festival updates',
    'Sustainable travel tips and eco-tourism insights'
  ]

  return (
    <section className="py-32 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Mail className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">Stay Connected</span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Never Miss an
              <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Adventure
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
              Subscribe to our newsletter and get the latest updates on new destinations, 
              cultural events, and exclusive eco-tourism experiences in Jharkhand.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-secondary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Subscribe Now
                    </>
                  )}
                </button>

                <p className="text-white/60 text-sm text-center">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Welcome Aboard! 🎉
                </h3>
                <p className="text-white/80 mb-6">
                  Thank you for subscribing! You'll receive our latest updates and exclusive offers.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  Subscribe another email
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20"
        >
          {[
            { number: '5,000+', label: 'Subscribers' },
            { number: '50+', label: 'Destinations' },
            { number: '4.9', label: 'Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSection
