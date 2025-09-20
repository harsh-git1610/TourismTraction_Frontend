import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, Users } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 651 244 0879',
      description: 'Mon-Fri 9AM-6PM IST',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@jharkhnadtourism.gov.in',
      description: 'We reply within 24 hours',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Tourism Department, Ranchi',
      description: 'Jharkhand - 834001',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Emergency',
      details: '1363 (24/7 Helpline)',
      description: 'Tourist assistance anytime',
      color: 'from-purple-500 to-violet-600'
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: HelpCircle },
    { value: 'booking', label: 'Booking Support', icon: MessageCircle },
    { value: 'partnership', label: 'Partnership', icon: Users },
    { value: 'feedback', label: 'Feedback', icon: Mail }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              Contact
              <span className="block gradient-text bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
              Have questions about Jharkhand tourism? We're here to help you plan 
              your perfect eco-friendly adventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-32" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to reach us for all your tourism needs and inquiries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-modern p-8 text-center group hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{info.title}</h3>
                <p className="text-lg font-semibold text-slate-700 mb-2">{info.details}</p>
                <p className="text-slate-500 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-slate-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </motion.div>

          {!isSubmitted ? (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-50 rounded-3xl p-8 lg:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-lg font-semibold text-slate-900 mb-4">
                    Inquiry Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => handleInputChange('inquiryType', type.value)}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                          formData.inquiryType === type.value
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <type.icon className="h-5 w-5" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-slate-900 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-slate-900 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-lg font-semibold text-slate-900 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-slate-900 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={6}
                    className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-xl px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Send className="h-6 w-6" />
                        Send Message
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Message Sent Successfully! 🎉
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Thank you for reaching out! We've received your message and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary text-lg"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Quick <span className="gradient-text">Answers</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers to commonly asked questions about Jharkhand tourism
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                question: "What's the best time to visit Jharkhand?",
                answer: "October to March offers pleasant weather for outdoor activities and sightseeing."
              },
              {
                question: "Are tribal village visits authentic?",
                answer: "Yes, we work directly with communities to ensure authentic, respectful cultural exchanges."
              },
              {
                question: "How do I book eco-tourism packages?",
                answer: "Use our trip planner or contact us directly for customized sustainable tourism packages."
              },
              {
                question: "Is it safe for solo travelers?",
                answer: "Absolutely! We provide 24/7 support and work with trusted local guides and accommodations."
              },
              {
                question: "What languages are supported?",
                answer: "Our guides speak Hindi, English, and local tribal languages for better communication."
              },
              {
                question: "How do you ensure sustainability?",
                answer: "We follow strict eco-guidelines, support local communities, and promote conservation efforts."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-modern p-6"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
