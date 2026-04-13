import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, Mic, Code, BookOpen, Layers, 
  TrendingUp, Activity, Compass, 
  Map, MessageSquare, Zap, Sparkles
} from 'lucide-react';

const BentoItem = ({ children, className, title, subtitle, icon: Icon, delay = 0, path }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`bento-item glow-active ${className}`}
    >
      <div className="z-10 relative h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-cyan-400 transition-colors">
            <Icon size={24} className="text-cyan-400" />
          </div>
          <div className="px-2 py-1 bg-cyan-400/10 rounded-full border border-cyan-400/20">
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-tighter">Active</span>
          </div>
        </div>
        
        <div>
          <h3 className="heading-cyber text-xl font-bold mb-1">{title}</h3>
          <p className="text-xs text-dim line-clamp-2">{subtitle}</p>
          <button 
            onClick={() => path && navigate(path)}
            className="mt-4 btn-glass w-full text-xs py-2 hover:bg-cyan-400/20 transition-all active:scale-95"
          >
              <Sparkles size={14} /> Initialize Module
          </button>
        </div>
      </div>
      {children}
    </motion.div>
  );
};

const BentoDashboard = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="bento-container">
        {/* Main AI Module */}
        <BentoItem 
          className="span-2 row-2" 
          title="Neural AI Tutor" 
          subtitle="Advanced cognitive assistant with deep understanding of engineering concepts and real-time problem solving."
          icon={Bot}
          delay={0.1}
          path="/tutor"
        >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </BentoItem>

        <BentoItem 
          title="Voice Podcasts" 
          subtitle="AI-synthesized educational audio streams."
          icon={Mic}
          delay={0.2}
          path="/podcasts"
        />

        <BentoItem 
          title="J-Compiler" 
          subtitle="Multi-environment script analysis & execution."
          icon={Code}
          delay={0.3}
          path="/compiler"
        />

        <BentoItem 
          className="span-2"
          title="Strategic Roadmap" 
          subtitle="Personalized learning pathways mapped through neural visualization."
          icon={Map}
          delay={0.4}
          path="/roadmap"
        />

        {/* Medium Cards */}
        <BentoItem 
          title="Doc Hub" 
          subtitle="Intelligent document parsing and synthesis."
          icon={Layers}
          delay={0.5}
          path="/dochub"
        />

        <BentoItem 
          title="Exam Prep" 
          subtitle="Predictive analysis and mock evaluation."
          icon={Zap}
          delay={0.6}
          path="/examprep"
        />

        <BentoItem 
          className="span-2"
          title="Community Nexus" 
          subtitle="Decentralized knowledge sharing network for engineering students."
          icon={MessageSquare}
          delay={0.7}
          path="/community"
        />

        <BentoItem 
          title="Syllabus AI" 
          subtitle="Dynamic curriculum alignment."
          icon={BookOpen}
          delay={0.8}
          path="/syllabus"
        />

        <BentoItem 
          title="Project Gen" 
          subtitle="Automated technical report and project structuring."
          icon={TrendingUp}
          delay={0.9}
          path="/projectgen"
        />
      </div>
    </main>
  );
};

export default BentoDashboard;
