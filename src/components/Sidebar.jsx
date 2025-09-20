import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, Mountain, Leaf } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: <Mountain className="w-5 h-5" /> },
    { name: 'Destinations', path: '/destinations', icon: <Leaf className="w-5 h-5" /> },
    { name: 'Culture', path: '/culture', icon: <Leaf className="w-5 h-5" /> },
    { name: 'Why Jharkhand', path: '/why-jharkhand', icon: <Leaf className="w-5 h-5" /> },
    { name: 'Trip Planner', path: '/trip-planner', icon: <Leaf className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Leaf className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Leaf className="w-5 h-5" /> },
  ];

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        exit={{ x: '-100%' }}
        transition={{ type: 'tween', ease: 'easeInOut' }}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 flex flex-col ${
          isScrolled ? 'pt-20' : 'pt-24'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-slate-700" />
        </button>

        <div className="flex-1 overflow-y-auto">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-green-50 text-green-700 font-medium'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-green-600">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="p-6 border-t border-slate-100">
          <div className="text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Jharkhand Tourism</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
