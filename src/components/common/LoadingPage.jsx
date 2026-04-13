import React from 'react';
import { motion } from 'framer-motion';

const LoadingPage = ({ onComplete }) => {
  // Simulate a loading process, then call onComplete
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-paper bg-paper-texture"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center">
        <motion.h1 
          className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-navy tracking-widest uppercase mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          TN INNOVATIONS
        </motion.h1>
        
        {/* Subtle Loading Line */}
        <div className="w-48 h-[1px] bg-navy/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-champagne"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingPage;
