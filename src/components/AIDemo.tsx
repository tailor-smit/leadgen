import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, Bot, User, Building, Sparkles } from 'lucide-react';
import { getAIDemoResponse } from '../services/geminiService';

const BUSINESS_TYPES = [
  "Real Estate Agent",
  "Dental Clinic",
  "Gym Trainer",
  "Local Coffee Shop",
  "Skin Care Clinic"
];

export default function AIDemo() {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hi! I'm your AI assistant. Select a business type below to see how I can help you automate your customer interactions!" }
  ]);
  const [input, setInput] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState(BUSINESS_TYPES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getAIDemoResponse(userMsg, selectedBusiness);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-sidebar border border-zinc-800 rounded-sm overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-accent/20 flex items-center justify-center border border-accent/30">
            <Bot className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-black uppercase text-sm tracking-wider text-white">Live AI Demo</h3>
            <p className="text-[10px] uppercase tracking-widest text-muted">Experience automation</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {BUSINESS_TYPES.map(type => (
            <button
              key={type}
              onClick={() => setSelectedBusiness(type)}
              className={`px-3 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all ${
                selectedBusiness === type 
                  ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                  : 'bg-zinc-800 text-muted hover:bg-zinc-700 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="h-[400px] overflow-y-auto p-6 space-y-6 scroll-smooth bg-bg/30"
      >
        {messages.map((msg, i) => (
          <motion.div
            initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-sm ${
              msg.role === 'user' 
                ? 'bg-accent text-white' 
                : 'bg-zinc-900 text-zinc-200 border border-zinc-800'
            }`}>
              <p className="text-sm leading-relaxed font-medium">{msg.text}</p>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-zinc-900 p-4 rounded-sm border border-zinc-800">
              <div className="flex gap-1">
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-sidebar border-t border-zinc-800">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`Ask the ${selectedBusiness} AI...`}
            className="w-full bg-bg text-white border border-zinc-800 rounded-sm px-4 py-4 pr-12 focus:outline-none focus:border-accent transition-all placeholder:text-zinc-600 text-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2 text-accent hover:text-white disabled:opacity-50 transition-colors"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
        <p className="mt-4 text-[9px] text-center text-muted uppercase tracking-[0.3em] font-bold">
          Powered by Gemini AI • Real-time Automation Demo
        </p>
      </div>
    </div>
  );
}
