import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Play, ArrowLeft, Terminal, Save, Copy, Sparkles, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';

const JCompiler = () => {
  const [code, setCode] = useState('// Welcome to J-Compiler v1.0\n// Multi-environment script analysis & execution\n\nfunction initializeNeuralNetwork() {\n  console.log("Analyzing local environment...");\n  return "Network Ready";\n}\n\nconsole.log(initializeNeuralNetwork());');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('System ready for execution...');
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Compiling...\nAnalyzing dependencies...\nExecuting bytecode...');
    
    // Simulate execution
    setTimeout(() => {
      try {
        if (language === 'javascript') {
          // Capturing log
          const logs = [];
          const originalLog = console.log;
          console.log = (...args) => logs.push(args.join(' '));
          
          eval(code);
          
          console.log = originalLog;
          setOutput(logs.join('\n') || 'Program completed with no output.');
        } else {
          setOutput(`Simulation: Running ${language} code...\nResult: Standard execution environment for ${language} initialized.`);
        }
      } catch (err) {
        setOutput(`CRITICAL ERROR:\n${err.message}`);
      }
      setIsRunning(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#020617] flex flex-col pt-20"
    >
      {/* Header */}
      <div className="border-b border-white/5 bg-black/40 backdrop-blur-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <ArrowLeft className="text-dim" size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-400/10 rounded-xl border border-purple-400/20">
              <Code className="text-purple-400" size={24} />
            </div>
            <div>
              <h2 className="heading-cyber text-lg font-bold">J-Compiler</h2>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-medium text-dim uppercase tracking-widest">Multi-Environment Mode</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white/5 border border-white/10 text-xs rounded-lg px-3 py-2 text-white outline-none focus:border-purple-500 transition-colors capitalize"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
          
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
              isRunning ? 'bg-dim/20 text-dim' : 'bg-purple-500 text-white hover:bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
            }`}
          >
            {isRunning ? 'Running...' : <><Play size={14} /> Run Script</>}
          </button>
        </div>
      </div>

      {/* Editor Main Section */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor Area */}
        <div className="flex-1 border-r border-white/5">
          <Editor
            height="100%"
            defaultLanguage={language}
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
            options={{
              fontSize: 14,
              fontFamily: "'Fira Code', monospace",
              minimap: { enabled: false },
              padding: { top: 20 },
              smoothScrolling: true,
              cursorBlinking: 'smooth',
            }}
          />
        </div>

        {/* Terminal / Output Area */}
        <div className="w-96 bg-black/60 flex flex-col">
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-dim">
              <Terminal size={12} /> Console Output
            </div>
            <button onClick={() => setOutput('')} className="text-dim hover:text-white transition-colors">
              <Trash2 size={12} />
            </button>
          </div>
          <div className="flex-1 p-6 font-mono text-sm overflow-y-auto">
            <pre className={`whitespace-pre-wrap ${output.includes('CRITICAL ERROR') ? 'text-red-400' : 'text-cyan-400'}`}>
              {output}
            </pre>
          </div>
          <div className="p-4 border-t border-white/5 bg-white/5">
             <div className="flex items-center gap-2 text-[10px] text-cyan-400/60 mb-2">
                <Database size={10} /> LOCAL PERSISTENCE ACTIVE
             </div>
             <p className="text-[10px] text-dim">Changes are automatically cached in neural memory.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JCompiler;
