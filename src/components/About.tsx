import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Heart, Shield } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Award, title: 'Certified Expertise', desc: 'Over 15 years of clinical excellence in homeopathy.' },
    { icon: Heart, title: 'Holistic Care', desc: 'Focus on physical, mental, and emotional well-being.' },
    { icon: Shield, title: 'Natural Healing', desc: 'Safe, side-effect-free treatments for all ages.' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-[56px] overflow-hidden border-8 border-slate-50 shadow-2xl bg-slate-50">
              <img 
                src="dr_soni_new.webp" 
                alt="Dr. Soni - Clinic Owner" 
                className="w-full h-[650px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary-900/5" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden md:block">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900 leading-none mb-1">Dr. Soni</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Narendra Kumar Soni</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 italic max-w-[200px] font-medium leading-relaxed">
                "Our mission is to restore health naturally and permanently through advanced homeopathy."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs block mb-4">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              Leading the Way in <span className="text-primary-500">Modern Homeopathy</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8 opacity-80">
              Dr. Soni's Homeopathy Clinic was founded with a single vision: to provide effective, side-effect-free healing that addresses the root cause of ailments. We combine traditional wisdom with modern clinical precision.
            </p>
            
            <div className="space-y-6 mb-10">
              {values.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 group">
                  <div className="mt-1 w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex-shrink-0 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-primary-600 transition-all shadow-xl hover:shadow-primary-500/20 uppercase tracking-widest">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

