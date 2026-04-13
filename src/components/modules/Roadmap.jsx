import React from 'react';
import { motion } from 'framer-motion';
import { Map, ArrowLeft, Target, ChevronRight, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoadmapStep = ({ icon: Icon, title, desc, status, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex gap-6 relative"
  >
    {/* Line */}
    <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-cyan-400 to-transparent"></div>
    
    <div className={`z-10 w-12 h-12 rounded-2xl flex items-center justify-center border ${
      status === 'complete' ? 'bg-green-500/10 border-green-500/40 text-green-400' :
      status === 'current' ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]' :
      'bg-white/5 border-white/10 text-dim'
    }`}>
      <Icon size={20} />
    </div>

    <div className="flex-1 pb-12">
      <div className="flex items-center gap-3 mb-1">
        <h4 className="text-white font-bold">{title}</h4>
        <span className={`text-[8px] uppercase tracking-tighter px-2 py-0.5 rounded-full border ${
          status === 'complete' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
          status === 'current' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-400/30' :
          'bg-white/10 text-dim border-white/10'
        }`}>
          {status}
        </span>
      </div>
      <p className="text-sm text-dim leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const StrategicRoadmap = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#020617] flex flex-col pt-20 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto w-full p-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/')}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10"
            >
              <ArrowLeft size={20} className="text-dim" />
            </button>
            <div>
              <h2 className="heading-cyber text-3xl font-bold">Strategic Roadmap</h2>
              <p className="text-dim text-sm">Personalized Engineering Mastery Pathway</p>
            </div>
          </div>
          <div className="p-4 bg-cyan-400/10 rounded-2xl border border-cyan-400/20 flex items-center gap-3">
            <Target className="text-cyan-400" />
            <div>
              <p className="text-[10px] uppercase font-bold text-cyan-400">Current Phase</p>
              <p className="text-sm text-white font-bold">Data Structures & AI</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Completion', value: '42%', icon: Zap, color: 'text-yellow-400' },
            { label: 'Neural Score', value: '8.9', icon: Star, color: 'text-purple-400' },
            { label: 'Module Rank', value: 'Alpha-1', icon: Target, color: 'text-cyan-400' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
              <stat.icon size={20} className={`${stat.color} mb-4`} />
              <p className="text-xs text-dim uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <RoadmapStep 
            index={0}
            icon={Zap}
            title="Foundation: Systems Architecture"
            desc="Mastering low-level computing and digital logic circuits. Completion of Phase 1 requirements."
            status="complete"
          />
          <RoadmapStep 
            index={1}
            icon={Target}
            title="Current: Advanced Algorithms & AI"
            desc="Implementing neural networks and mastering complex data structures for real-time problem solving."
            status="current"
          />
          <RoadmapStep 
            index={2}
            icon={Map}
            title="Next: Full-Stack Intelligence"
            desc="Building high-performance applications with AI-integrated backend systems and edge computing."
            status="pending"
          />
          <RoadmapStep 
            index={3}
            icon={Star}
            title="Capstone: Neural Repository"
            desc="Final project deployment using TN INNOVATIONS framework and community distribution."
            status="pending"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StrategicRoadmap;
