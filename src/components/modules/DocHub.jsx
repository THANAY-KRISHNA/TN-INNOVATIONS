import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, FileText, Upload, Search, ArrowLeft, Download, Plus, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DocCard = ({ name, type, date, size }) => (
  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-cyan-400/10 rounded-lg text-cyan-400">
        <FileText size={20} />
      </div>
      <button className="text-dim hover:text-white transition-colors">
        <Star size={16} />
      </button>
    </div>
    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors uppercase tracking-wider">{name}</h4>
    <div className="flex items-center justify-between text-[10px] text-dim uppercase tracking-widest">
      <span>{type}</span>
      <span>{size}</span>
    </div>
  </div>
);

const DocHub = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#020617] flex flex-col pt-20 overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto w-full p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/')}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10"
            >
              <ArrowLeft size={20} className="text-dim" />
            </button>
            <div>
              <h2 className="heading-cyber text-3xl font-bold">Document Hub</h2>
              <p className="text-dim text-sm uppercase tracking-[0.2em] mt-1">Intelligent Neural Repository</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dim group-focus-within:text-cyan-400 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search across neural nodes..."
                className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all w-64 md:w-80"
              />
            </div>
            <button className="bg-cyan-500 text-white p-3 rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:bg-cyan-400 transition-all active:scale-95">
              <Upload size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
              <h3 className="text-xs font-bold text-dim uppercase tracking-widest mb-6">Classifications</h3>
              <nav className="space-y-2">
                {['All Nodes', 'Core Syllabus', 'Neural Papers', 'Project Assets', 'Encrypted'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => setActiveTab(item.toLowerCase())}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-sm ${
                      activeTab === item.toLowerCase() ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' : 'text-dim hover:bg-white/5'
                    }`}
                  >
                    {item}
                    <Plus size={14} className={activeTab === item.toLowerCase() ? 'opacity-100' : 'opacity-0'} />
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-6 rounded-3xl backdrop-blur-md">
              <Plus className="text-purple-400 mb-4" />
              <h3 className="text-white font-bold mb-2">Neural Synthesis</h3>
              <p className="text-xs text-dim leading-relaxed mb-4">Combine multiple documents using AI to generate comprehensive study guides.</p>
              <button className="text-[10px] uppercase font-bold text-purple-400 tracking-widest hover:text-purple-300 transition-colors">Start Synthesis →</button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <DocCard name="Advanced-Calculus.pdf" type="Syllabus" date="Apr 13, 2026" size="2.4 MB" />
                <DocCard name="Neural-Networks.paper" type="Research" date="Apr 12, 2026" size="1.1 MB" />
                <DocCard name="Operating-Systems.pdf" type="Syllabus" date="Apr 11, 2026" size="4.2 MB" />
                <DocCard name="Project-Structure.rep" type="Asset" date="Apr 10, 2026" size="0.5 MB" />
                <DocCard name="Data-Structures.v2" type="Neural" date="Apr 09, 2026" size="3.8 MB" />
                <div className="border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all cursor-pointer group">
                  <Plus className="text-dim group-hover:text-cyan-400 transition-colors mb-2" />
                  <span className="text-[10px] uppercase font-bold text-dim group-hover:text-cyan-400 transition-colors">New Connection</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DocHub;
