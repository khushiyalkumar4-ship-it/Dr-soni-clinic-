import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 flex items-center px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-0 w-1/2 h-full bg-primary-50 rounded-l-[100px] hidden lg:block opacity-40" />
      <div className="absolute top-1/4 -right-20 -z-0 w-[450px] h-[450px] bg-primary-50 rounded-full opacity-60 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-2 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <span className="inline-block bg-primary-100 text-primary-500 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest shadow-sm">
            Natural & Holistic Healing
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Welcome to <span className="text-primary-500">Dr. Soni Homeopathy Clinic</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium opacity-80">
            We provide effective homeopathic treatment for all types of health problems. Specialized care with a side-effect-free approach by Dr. Soni.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-xl hover:shadow-primary-500/20 group">
              <span>Consult Online</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-3 px-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-white bg-slate-${i+1}00 flex items-center justify-center overflow-hidden`}>
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-white bg-primary-500 text-[10px] flex items-center justify-center font-bold text-white shadow-sm tracking-tighter">
                  +10K
                </div>
              </div>
              <span className="text-xs text-slate-500 font-semibold italic">Trusted by 10,000+ Patients</span>
            </div>
          </div>
          
          <div className="mt-8 lg:hidden block w-full max-w-sm mx-auto">
            <img 
              src="input_file_12.png" 
              alt="Dr. Soni Business Card" 
              className="w-full h-auto rounded-2xl shadow-xl border-4 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center relative"
        >
          {/* Floating Business Card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-16 top-16 z-20 w-[250px] rounded-2xl shadow-2xl border-[6px] border-white overflow-hidden rotate-[8deg] hover:rotate-0 hover:scale-105 transition-all duration-300 xl:block hidden"
          >
            <img 
              src="input_file_12.png" 
              alt="Dr. Soni Business Card" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="relative z-10 bg-slate-100 w-[350px] h-[480px] rounded-[48px] shadow-2xl flex flex-col justify-end overflow-hidden border-[10px] border-white ring-1 ring-slate-200">
            <img 
              src="/dr_narendra_latest.jpg" 
              alt="Dr. Narendra Kumar Soni" 
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
            <div className="p-8 text-white text-center relative z-10">
              <div className="font-extrabold text-xl mb-1 tracking-tight">Dr. Narendra Kumar Soni</div>
              <div className="text-xs font-semibold opacity-90 uppercase tracking-widest">BHMS, NIH (W.B.U.H.S)</div>
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 z-20 bg-white p-5 rounded-[24px] shadow-xl border border-slate-100 flex items-center gap-4 animate-float"
          >
            <div className="bg-primary-50 p-2 rounded-lg text-primary-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5 leading-none">Status</div>
              <div className="text-sm font-bold text-slate-900 leading-none">Clinic is Open</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

