import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const BackToHome = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) return null;

  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Link
        to="/"
        className="flex items-center space-x-2 bg-white/90 hover:bg-white text-slate-800 font-medium py-3 px-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </Link>
    </motion.div>
  );
};

export default BackToHome;
