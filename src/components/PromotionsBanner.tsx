import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin } from 'lucide-react';

export default function PromotionsBanner() {
  return (
    <section className="pt-24 lg:pt-32 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 min-h-[350px] flex items-center"
        >
          {/* Decorative Doctor Figure (Left) */}
          <div className="absolute left-0 bottom-0 top-0 w-1/3 hidden md:block">
            <img 
              src="/dr_devendra_chatgpt.jpg" 
              alt="Dr. Devendra Kumar Soni" 
              className="h-full w-full object-cover object-center opacity-90 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-transparent" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 w-full md:pl-[35%] p-8 md:p-12 text-white text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold tracking-tighter border border-white/30">
                Reg No. H037539 (U.P.), 6724 (CCH)
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold tracking-tighter border border-white/30 flex items-center gap-1">
                <Phone className="w-3 h-3" /> 7905475658
              </span>
            </div>

            <div className="mb-6 space-y-1">
              <h1 className="text-4xl lg:text-6xl font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] tracking-tighter leading-none">
                डॉ. सोनी होम्योपैथी
              </h1>
              <h2 className="text-2xl lg:text-4xl font-extrabold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-tight">
                होम्योपैथिक दवाईयां
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-black/10 backdrop-blur-sm inline-block px-4 py-2 rounded-2xl border border-white/20">
                <div className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                  डॉ. नरेन्द्र कुमार सोनी <span className="text-sm opacity-90 ml-2 font-normal">BHMS, NIH ( W.B.U.H.S )</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {[ 'चर्म रोग', 'गुप्त रोग', 'बवासीर', 'पथरी', 'गठिया रोग विशेषज्ञ' ].map((tag) => (
                  <span key={tag} className="bg-white text-pink-600 px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 pt-2 opacity-90">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  बस स्टेंड, अकबरपुर - अम्बेडकर नगर (उ.प्र.)
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Shapes */}
          <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}

