import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Map, Compass, ArrowRight, User, Bot, BookOpen, Clock, FileText, ChevronRight } from 'lucide-react';
import { getAICompletion } from '../../utils/aiService';

// Reusing the AI Service logic
const AIResearchAssistant = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Good morning. I am your specialized research assistant. How may I assist your academic progress today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    try {
      const response = await getAICompletion([...messages, userMessage]);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Apologies. I am unable to connect to the cognitive backend at this moment.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="glass-card flex flex-col h-[600px] rounded-sm bg-white shadow-elegant">
      <div className="p-6 border-b border-navy/5">
        <h3 className="heading-editorial text-2xl font-semibold mb-1">Research Intelligence</h3>
        <p className="text-xs text-text-secondary uppercase tracking-widest">Neural Copilot Active</p>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-paper/50 bg-paper-texture">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-navy text-champagne' : 'bg-champagne/20 text-navy border border-champagne/50'}`}>
                {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div className={`p-4 rounded-sm shadow-sm text-sm leading-relaxed ${m.role === 'user' ? 'bg-navy text-white text-right rounded-tr-none' : 'bg-white border border-black/5 text-text-primary rounded-tl-none'}`}>
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
           <div className="flex justify-start">
             <div className="w-8 h-8 flex-shrink-0 rounded-full bg-champagne/20 text-navy border border-champagne/50 flex items-center justify-center">
                <Bot size={14} />
             </div>
             <div className="ml-4 p-4 rounded-sm bg-white border border-black/5 flex gap-1 items-center">
                <div className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
             </div>
           </div>
        )}
        <div ref={endRef} />
      </div>
      <div className="p-4 border-t border-navy/5 bg-white">
        <form onSubmit={handleSend} className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Inquire about algorithms, research methods..."
            className="w-full bg-paper border border-black/5 rounded-none pr-12 pl-4 py-4 text-sm focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all"
          />
          <button type="submit" disabled={isTyping} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-navy hover:text-champagne transition-colors disabled:opacity-50">
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

const ProfessionalRoadmap = () => {
   const steps = [
     { year: '2025', title: 'Foundational Systems', status: 'Completed', color: 'text-green-700' },
     { year: '2026', title: 'Advanced Analytics & AI', status: 'In Progress', color: 'text-champagne' },
     { year: '2027', title: 'Enterprise Architecture', status: 'Upcoming', color: 'text-text-secondary' },
   ];
   return (
     <div className="py-8">
       <h3 className="heading-editorial text-2xl font-semibold mb-8 flex items-center gap-3">
         <Compass className="text-champagne" size={24}/> Professional Roadmap
       </h3>
       <div className="relative border-l border-black/10 ml-3 space-y-12">
          {steps.map((step, i) => (
             <div key={i} className="relative pl-8">
               <div className="absolute w-3 h-3 bg-paper border-2 border-navy rounded-full -left-[6.5px] top-1.5"></div>
               <p className="text-xs font-bold font-serif text-navy mb-1">{step.year}</p>
               <h4 className="text-lg font-semibold text-text-primary mb-1">{step.title}</h4>
               <p className={`text-xs uppercase tracking-widest font-semibold ${step.color}`}>{step.status}</p>
             </div>
          ))}
       </div>
     </div>
   );
};

const ResourceLibrary = () => {
  const cards = [
    { title: 'Neural Syllabus', type: 'Curriculum', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400' },
    { title: 'Research Papers', type: 'Archives', img: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400' },
    { title: 'Design Patterns', type: 'Engineering', img: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64ef72?auto=format&fit=crop&q=80&w=400' },
  ];
  return (
    <div className="py-8">
       <div className="flex justify-between items-end mb-8">
         <h3 className="heading-editorial text-2xl font-semibold flex items-center gap-3">
           <BookOpen className="text-champagne" size={24}/> Resource Vault
         </h3>
         <button className="text-xs uppercase tracking-widest text-navy hover:text-champagne font-semibold flex items-center gap-1 transition-colors">
           View Entire Collection <ChevronRight size={14} />
         </button>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
             <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden mb-4 rounded-sm border border-black/5 bg-white shadow-sm group-hover:shadow-elegant transition-shadow h-48 relative">
                   {/* Fallback pattern overlay to ensure it always looks elegant */}
                   <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors z-10"></div>
                   <img src={card.img} alt={card.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                </div>
                <h4 className="font-serif text-lg font-bold text-navy group-hover:text-champagne transition-colors">{card.title}</h4>
                <p className="text-xs text-text-secondary uppercase tracking-widest mt-1">{card.type}</p>
             </div>
          ))}
       </div>
    </div>
  );
};

const EditorialDashboard = ({ userEmail, onLogout }) => {
  return (
    <div className="min-h-screen bg-paper bg-paper-texture fade-in flex flex-col">
      {/* Header */}
      <header className="px-8 py-6 border-b border-black/5 flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-20">
        <h1 className="heading-editorial text-2xl font-bold tracking-wider uppercase">TN Innovations</h1>
        <div className="flex gap-6 text-xs uppercase tracking-widest text-text-secondary font-semibold items-center">
          <span className="hidden md:inline">{userEmail}</span>
          <button onClick={onLogout} className="text-navy hover:text-champagne transition-colors">Sign Out</button>
        </div>
      </header>

      {/* Main Content Vertical Scroll */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 md:p-12 space-y-24">
        
        {/* Welcome Section */}
        <section className="mt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <p className="text-xs uppercase tracking-[0.3em] text-champagne font-bold mb-4">Workspace Environment</p>
             <h2 className="heading-editorial text-4xl md:text-6xl max-w-3xl leading-tight text-navy">
               Orchestrating the intersection of <span className="italic text-champagne">logic</span> and design.
             </h2>
          </motion.div>
        </section>

        {/* AI & Roadmap Split Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main AI Chat Area */}
          <motion.div className="lg:col-span-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <AIResearchAssistant />
          </motion.div>

          {/* Sidebar Roadmap */}
          <motion.div className="lg:col-span-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <ProfessionalRoadmap />
          </motion.div>
        </section>

        {/* Resources Section */}
        <section className="pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <ResourceLibrary />
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-black/5 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-paper-texture opacity-50 z-0"></div>
        <p className="relative z-10 text-[10px] text-text-secondary uppercase tracking-[0.2em] font-semibold">
           © 2026 TN Innovations. Intellectual Property & Code Proprietary.
        </p>
      </footer>
    </div>
  );
};

export default EditorialDashboard;
