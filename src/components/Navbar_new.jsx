import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Mountain, Leaf } from 'lucide-react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Check if current page is home
  const isHomePage = location.pathname === '/';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled || !isHomePage 
            ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-slate-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isScrolled || !isHomePage ? 'bg-slate-900' : 'bg-white/20 backdrop-blur-md'
                }`}>
                  <Mountain className="h-6 w-6 text-white" />
                  <Leaf className={`h-3 w-3 absolute -top-1 -right-1 ${(isScrolled || !isHomePage) ? 'text-green-400' : 'text-green-300'}`} />
                </div>
              </div>
              <span className={`text-2xl font-bold ${isScrolled || !isHomePage ? 'text-slate-900' : 'text-white'}`}>
                Jharkhand
              </span>
            </Link>

            {/* Desktop Navigation - Simplified */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/destinations"
                className={`text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/destinations')
                    ? 'text-green-600'
                    : isScrolled || !isHomePage
                    ? 'text-slate-700 hover:text-green-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Destinations
              </Link>
              <Link
                to="/culture"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/culture'
                    ? 'text-green-600'
                    : isScrolled || !isHomePage
                    ? 'text-slate-700 hover:text-green-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Culture
              </Link>
              <Link
                to="/why-jharkhand"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === '/why-jharkhand'
                    ? 'text-green-600'
                    : isScrolled || !isHomePage
                    ? 'text-slate-700 hover:text-green-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Why Jharkhand
              </Link>
              <Link
                to="/trip-planner"
                className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Plan Your Trip
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md focus:outline-none"
                aria-label="Menu"
              >
                <Menu className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-slate-700' : 'text-white'}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Navbar;
