import React from 'react'
import { Link } from 'react-router-dom'
import { Mountain, Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Culture', path: '/culture' },
    { name: 'Trip Planner', path: '/trip-planner' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  const destinations = [
    'Hundru Falls',
    'Betla National Park',
    'Netarhat Hill Station',
    'Dassam Falls',
    'Ranchi Lake',
    'Palamau Fort'
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-white" />
                  <Leaf className="h-3 w-3 text-green-300 absolute -top-1 -right-1" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">Jharkhand</span>
                <span className="text-sm font-medium text-white/80 leading-tight">Tourism</span>
              </div>
            </Link>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Discover the natural beauty and rich cultural heritage of Jharkhand through 
              sustainable eco-tourism experiences.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-6">Popular Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <Link
                    to="/destinations"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">
                    Tourism Department<br />
                    Government of Jharkhand<br />
                    Ranchi - 834001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <p className="text-white/80">+91 651 244 0879</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <p className="text-white/80">info@jharkhnadtourism.gov.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Jharkhand Tourism. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-white/60 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
