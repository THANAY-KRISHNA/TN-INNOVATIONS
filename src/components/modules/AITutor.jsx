import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, ArrowLeft, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAICompletion } from '../../utils/aiService';

const AITutor = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Neural AI Tutor online. How can I assist your learning today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const chatHistory = [...messages, userMessage].map(m => ({
        role: m.role,
        content: m.content
      }));
      
      const response = await getAICompletion(chatHistory);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection error in the neural network. Please check your API keys.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: 'Neural AI Tutor reset. Ready for new queries.' }]);
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
            <div className="p-2 bg-cyan-400/10 rounded-xl border border-cyan-400/20">
              <Bot className="text-cyan-400" size={24} />
            </div>
            <div>
              <h2 className="heading-cyber text-lg font-bold">Neural AI Tutor</h2>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-medium text-dim uppercase tracking-widest">Active Core</span>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={clearChat}
          className="p-2 hover:bg-red-500/10 text-dim hover:text-red-400 rounded-lg transition-all"
          title="Reset Session"
        >
          <Trash2 size={20} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="max-w-4xl mx-auto w-full space-y-6">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-4 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`p-2 h-fit rounded-lg ${msg.role === 'user' ? 'bg-purple-500/10' : 'bg-cyan-500/10'}`}>
                    {msg.role === 'user' ? <User size={20} className="text-purple-400" /> : <Bot size={20} className="text-cyan-400" />}
                  </div>
                  <div className={`p-4 rounded-2xl border ${
                    msg.role === 'user' 
                      ? 'bg-purple-500/5 border-purple-500/20' 
                      : 'bg-white/5 border-white/10'
                  } backdrop-blur-sm`}>
                    <p className="text-sm leading-relaxed text-slate-200 whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
              <div className="p-2 h-fit rounded-lg bg-cyan-500/10">
                <Bot size={20} className="text-cyan-400" />
              </div>
              <div className="flex gap-1 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 bg-gradient-to-t from-[#020617] to-transparent">
        <div className="max-w-4xl mx-auto">
          <form 
            onSubmit={handleSend}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition-opacity"></div>
            <div className="relative flex items-center bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about B.Tech, Engineering, or Data Science..."
                className="flex-1 bg-transparent border-none focus:ring-0 p-4 text-white placeholder:text-dim text-sm"
              />
              <button 
                type="submit"
                disabled={isTyping}
                className="p-3 mr-1 text-cyan-400 hover:bg-cyan-400/10 rounded-xl transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="mt-3 flex gap-4 justify-center">
              <p className="text-[10px] text-dim font-medium uppercase tracking-[0.2em]">Neural Engine: Llama 3.3-70B</p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default AITutor;
