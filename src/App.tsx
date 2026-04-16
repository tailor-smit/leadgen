import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  MessageSquare, 
  TrendingUp, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Users, 
  Clock, 
  BarChart3,
  ChevronRight,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
  Send
} from 'lucide-react';
import AIDemo from './components/AIDemo';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-bg text-white font-sans selection:bg-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase">LeadGen<span className="text-accent">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#demo" className="hover:text-white transition-colors">Free Demo</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <button className="bg-white text-black px-5 py-2 font-black hover:bg-zinc-200 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_380px] min-h-screen pt-20">
        {/* Main Content */}
        <main className="border-r border-zinc-800/50">
          {/* Hero Section */}
          <section className="p-8 md:p-16 lg:p-24 flex flex-col justify-between min-h-[80vh]">
            <div>
              <span className="text-[12px] uppercase tracking-[0.2em] text-accent font-bold mb-6 block">
                Automated AI Systems
              </span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl lg:text-[96px] font-black leading-[0.85] tracking-[-0.04em] uppercase mb-8"
              >
                Stop Losing <br />
                <span className="text-stroke-accent">Customers</span> <br />
                to Slow <br />
                Replies.
              </motion.h1>
              <p className="text-xl text-muted max-w-lg mb-16 leading-relaxed">
                We set up simple AI systems that turn inquiries into paying customers 24/7 on WhatsApp and Instagram.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="border-t border-zinc-800 pt-6">
                  <h3 className="text-sm font-bold uppercase mb-4 tracking-wider">01. Auto-Reply</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Never miss a lead. Instant AI responses to all customer messages, any time of day.
                  </p>
                </div>
                <div className="border-t border-zinc-800 pt-6">
                  <h3 className="text-sm font-bold uppercase mb-4 tracking-wider">02. Content Engine</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Automated Reels and posts designed to attract local leads without manual work.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.1em] text-muted font-bold">
              <span>1. Contact</span>
              <span className="text-accent">→</span>
              <span>2. Analyze</span>
              <span className="text-accent">→</span>
              <span>3. Setup</span>
              <span className="text-accent">→</span>
              <span>4. Grow</span>
            </div>
          </section>

          {/* AI Demo Section */}
          <section id="demo" className="p-8 md:p-16 lg:p-24 border-t border-zinc-800/50 bg-zinc-900/10">
            <div className="mb-12">
              <span className="text-[12px] uppercase tracking-[0.2em] text-accent font-bold mb-4 block">Interactive Experience</span>
              <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Free AI Demo</h2>
              <p className="text-muted max-w-xl">
                See how our AI handles your customers. Select a business type and start chatting.
              </p>
            </div>
            <AIDemo />
          </section>

          {/* Contact Form */}
          <section className="p-8 md:p-16 lg:p-24 border-t border-zinc-800/50">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black uppercase tracking-tight mb-8">Ready to grow?</h2>
              
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 border border-accent/30 bg-accent/5 rounded-sm text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-black uppercase mb-2">Message Sent</h3>
                  <p className="text-muted">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-accent transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Email</label>
                      <input required type="email" className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-accent transition-all" placeholder="john@business.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Business Type</label>
                    <select className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-accent transition-all appearance-none">
                      <option className="bg-bg">Real Estate</option>
                      <option className="bg-bg">Clinic / Healthcare</option>
                      <option className="bg-bg">Gym / Fitness</option>
                      <option className="bg-bg">Local Shop</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted uppercase tracking-widest">Message</label>
                    <textarea className="w-full bg-transparent border-b border-zinc-800 py-3 h-24 focus:outline-none focus:border-accent transition-all resize-none" placeholder="Tell us about your goals..."></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-white text-black font-black py-5 uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Get Started Now'}
                  </button>
                </form>
              )}
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="bg-sidebar p-8 md:p-12 lg:p-16 flex flex-col justify-between border-l border-zinc-800/50">
          <div>
            <span className="text-[12px] uppercase tracking-[0.2em] text-accent font-bold mb-8 block">
              Who is this for
            </span>
            <div className="space-y-0 mb-16">
              {[
                "Real Estate Agents",
                "Medical Clinics",
                "Gym Trainers",
                "Local Shops"
              ].map((item, i) => (
                <div key={i} className="text-lg py-4 border-b border-zinc-900 flex justify-between items-center group cursor-pointer hover:text-accent transition-colors">
                  <span className="font-medium">{item}</span>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                </div>
              ))}
            </div>

            <div className="bg-[#111] p-8 border-l-4 border-accent mb-12">
              <span className="text-[11px] text-muted uppercase tracking-widest font-bold mb-2 block">Guaranteed Results</span>
              <strong className="text-3xl font-black tracking-tighter block mb-2">7–14 DAYS</strong>
              <p className="text-xs text-muted leading-relaxed">To see significantly increased lead conversion and automated engagement.</p>
            </div>
          </div>

          <div className="bg-accent p-8 rounded-sm">
            <h2 className="text-2xl font-black uppercase mb-2">Free AI Demo</h2>
            <p className="text-sm mb-8 opacity-90 leading-relaxed">We'll create a custom sample for your business. No commitment.</p>
            <a href="#demo" className="block w-full bg-white text-black text-center py-4 font-black uppercase text-sm tracking-widest hover:bg-zinc-100 transition-all">
              Get Started
            </a>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800/50 bg-bg">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <span className="font-black text-sm tracking-tighter uppercase">LeadGen<span className="text-accent">AI</span></span>
          </div>
          <p className="text-[10px] text-muted uppercase tracking-[0.2em]">© 2024 LeadGen AI Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Instagram className="w-4 h-4 text-muted hover:text-white cursor-pointer transition-colors" />
            <MessageCircle className="w-4 h-4 text-muted hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}
