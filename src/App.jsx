import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SpaceBackground from './components/layout/SpaceBackground';
import BentoDashboard from './components/layout/BentoDashboard';

// Module Imports
import AITutor from './components/modules/AITutor';
import JCompiler from './components/modules/JCompiler';
import StrategicRoadmap from './components/modules/Roadmap';
import DocHub from './components/modules/DocHub';

const UnderConstruction = ({ title }) => (
  <div className="fixed inset-0 z-50 bg-[#020617] flex flex-col items-center justify-center text-center p-6">
    <div className="p-6 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-6">
      <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
    <h2 className="heading-cyber text-2xl font-bold mb-2">{title} Initialization</h2>
    <p className="text-dim max-w-md">Neural protocols for this module are currently being synchronized. Access will be granted shortly.</p>
    <button 
      onClick={() => window.history.back()}
      className="mt-8 btn-glass px-8 py-3"
    >
      Return to Nexus
    </button>
  </div>
);

function AppContent() {
  const companyName = import.meta.env.VITE_COMPANY_NAME || "TN INNOVATIONS";
  const userEmail = import.meta.env.VITE_CONTACT_EMAIL || "datascientist2428@gmail.com";

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Navbar companyName={companyName} userEmail={userEmail} />
      
      <Routes>
        <Route path="/" element={<BentoDashboard />} />
        <Route path="/tutor" element={<AITutor />} />
        <Route path="/compiler" element={<JCompiler />} />
        <Route path="/roadmap" element={<StrategicRoadmap />} />
        <Route path="/podcasts" element={<UnderConstruction title="Voice Podcasts" />} />
        <Route path="/dochub" element={<DocHub />} />
        <Route path="/examprep" element={<UnderConstruction title="Exam Prep" />} />
        <Route path="/community" element={<UnderConstruction title="Community Nexus" />} />
        <Route path="/syllabus" element={<UnderConstruction title="Syllabus AI" />} />
        <Route path="/projectgen" element={<UnderConstruction title="Project Gen" />} />
      </Routes>
      
      {/* Footer Info */}
      <footer className="p-10 border-t border-white/5 bg-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <h2 className="heading-cyber text-xl font-bold">{companyName}</h2>
            <div className="h-4 w-px bg-white/20"></div>
            <p className="text-xs text-dim">© 2026 Advanced AI Solutions</p>
          </div>
          
          <div className="flex gap-8 text-xs font-medium text-dim uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-400">Security Protocol</a>
            <a href="#" className="hover:text-cyan-400">Neural Terms</a>
            <a href="#" className="hover:text-cyan-400">Developer Access</a>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-green-500">SYSTEMS NOMINAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
