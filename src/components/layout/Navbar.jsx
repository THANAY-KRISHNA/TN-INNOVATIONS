import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Mail, Shield, User } from 'lucide-react';

const Navbar = ({ companyName, userEmail }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <Cpu className="text-white" size={24} />
        </div>
        <div>
          <h1 className="heading-cyber text-2xl font-bold tracking-tighter m-0">{companyName}</h1>
          <p className="text-[10px] text-dim font-bold uppercase tracking-widest leading-none">AI Intelligence Portal</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-6"
      >
        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-dim">
            <a href="#" className="hover:text-cyan-400 transition-colors">Platform</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Neural Network</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Repository</a>
        </div>

        <div className="h-10 px-4 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 backdrop-blur-md">
          <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <User size={14} className="text-cyan-400" />
          </div>
          <span className="text-sm font-semibold truncate max-w-[150px]">{userEmail.split('@')[0]}</span>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
