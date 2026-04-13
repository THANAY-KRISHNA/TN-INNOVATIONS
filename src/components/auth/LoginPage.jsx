import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Note: Actual Supabase auth will be wired here. For now it fakes the loading.
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin(); // transition to dashboard
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-paper bg-paper-texture">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-center mb-12">
          <h1 className="heading-editorial text-3xl font-bold mb-2">TN INNOVATIONS</h1>
          <div className="w-12 h-px bg-champagne mx-auto mb-4"></div>
          <p className="text-sm tracking-[0.2em] uppercase text-text-secondary">Workspace Access</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-text-secondary font-semibold ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white border border-black/5 rounded-none px-12 py-4 text-sm focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all shadow-sm"
                placeholder="yours@domain.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-text-secondary font-semibold ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white border border-black/5 rounded-none px-12 py-4 text-sm focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all shadow-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-navy text-white hover:bg-navy/90 py-4 font-semibold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 group border border-navy shadow-elegant"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                Authenticate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 flex items-center justify-between">
          <div className="h-px bg-black/5 flex-1"></div>
          <span className="text-xs text-text-secondary uppercase tracking-widest px-4">Or Connect via</span>
          <div className="h-px bg-black/5 flex-1"></div>
        </div>

        <button className="w-full mt-8 bg-white border border-white shadow-elegant hover:shadow-elegant-hover py-4 font-medium text-sm text-navy transition-all flex items-center justify-center gap-3">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Google Identity
        </button>
      </motion.div>
    </div>
  );
};

export default LoginPage;
