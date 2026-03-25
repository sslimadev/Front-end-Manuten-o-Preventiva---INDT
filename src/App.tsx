/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Bot, 
  HelpCircle, 
  Settings, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  LogIn, 
  Activity, 
  AlertTriangle, 
  BarChart3,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex flex-col industrial-pattern font-sans">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md shadow-sm border-b border-on-surface/5">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Bot className="text-white w-6 h-6" />
            </div>
            <h1 className="font-display font-bold text-xl text-on-surface tracking-tight">
              Industrial Precision
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface/60 hover:bg-surface-container transition-colors rounded-xl active:scale-95 duration-200">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button className="p-2 text-on-surface/60 hover:bg-surface-container transition-colors rounded-xl active:scale-95 duration-200">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl z-10">
          
          {/* Branding/Visual Side (Asymmetric) */}
          <div className="hidden lg:flex lg:col-span-7 flex-col gap-8 pr-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group"
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern automated factory"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white max-w-md">
                <span className="bg-tertiary-container text-tertiary font-medium text-[0.7rem] tracking-wider uppercase px-3 py-1 rounded-full mb-4 inline-block">
                  Próxima Geração
                </span>
                <h2 className="font-display text-4xl font-bold mb-3 leading-tight">
                  Excelência em Manutenção Preditiva
                </h2>
                <p className="text-white/80 text-sm font-medium leading-relaxed">
                  Otimize a vida útil dos seus ativos industriais com nossa inteligência de precisão e monitoramento em tempo real.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: BarChart3, label: "Diagnóstico Real", color: "text-primary" },
                { icon: AlertTriangle, label: "Alertas Críticos", color: "text-tertiary", active: true },
                { icon: Activity, label: "Performance", color: "text-primary" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className={`p-6 rounded-2xl shadow-sm transition-all ${
                    item.active 
                    ? 'bg-white border-l-4 border-tertiary shadow-md' 
                    : 'bg-surface-container/50 border border-on-surface/5'
                  }`}
                >
                  <item.icon className={`${item.color} mb-3 w-6 h-6`} />
                  <p className={`font-display font-semibold ${item.active ? 'text-on-surface' : 'text-primary'}`}>
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Login Form Side */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-10 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(11,28,48,0.1)] border border-white/20"
            >
              <div className="mb-10 text-center lg:text-left">
                <h2 className="font-display text-3xl font-bold text-on-surface tracking-tight mb-2">
                  Login - Manutenção
                </h2>
                <p className="text-on-surface/60 text-sm font-medium">
                  Acesse o portal do Digital Foreman
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface/40 ml-1">
                    E-mail Corporativo
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30 group-focus-within:text-primary transition-colors w-5 h-5" />
                    <input 
                      type="email" 
                      placeholder="nome@empresa.com.br"
                      className="w-full bg-surface-container/50 border-none rounded-2xl py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface/20 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface/40 ml-1">
                    Senha
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30 group-focus-within:text-primary transition-colors w-5 h-5" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••"
                      className="w-full bg-surface-container/50 border-none rounded-2xl py-4 pl-12 pr-12 text-on-surface placeholder:text-on-surface/20 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface/30 hover:text-primary transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Secondary Controls */}
                <div className="flex items-center justify-between px-1">
                  <button 
                    type="button"
                    onClick={() => setRememberMe(!rememberMe)}
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <div className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
                      rememberMe ? 'bg-primary border-primary' : 'border-on-surface/10 group-hover:border-primary/40'
                    }`}>
                      {rememberMe && <Check className="text-white w-3.5 h-3.5" />}
                    </div>
                    <span className="text-xs font-semibold text-on-surface/60">Mantenha-me conectado</span>
                  </button>
                  <a href="#" className="text-xs font-bold text-primary hover:text-primary-container transition-colors">
                    Esqueceu a senha?
                  </a>
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                  <span>Entrar</span>
                  <LogIn className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-on-surface/5">
                <p className="text-center text-[0.65rem] text-on-surface/30 font-bold uppercase tracking-[0.2em]">
                  Autenticação de Segurança Industrial
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 mt-auto border-t border-on-surface/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-4">
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface/30">
            © 2024 Industrial Precision Framework. All rights reserved.
          </p>
          <nav className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Support'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface/30 hover:text-primary transition-colors underline decoration-on-surface/10 underline-offset-4"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
