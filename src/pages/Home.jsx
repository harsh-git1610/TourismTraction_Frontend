import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import FeaturedDestinations from '../components/FeaturedDestinations'
import CulturalHighlights from '../components/CulturalHighlights'
import EcoTourismFeatures from '../components/EcoTourismFeatures'
import TestimonialsSection from '../components/TestimonialsSection'
import NewsletterSection from '../components/NewsletterSection'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeaturedDestinations />
      <CulturalHighlights />
      <EcoTourismFeatures />
      <TestimonialsSection />
      <NewsletterSection />
    </motion.div>
  )
}

export default Home
