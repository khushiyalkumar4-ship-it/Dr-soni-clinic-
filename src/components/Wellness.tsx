import React from 'react';
import { motion } from 'motion/react';

const wellnessImages = [
  {
    url: '/unwell_1.jpg',
    title: 'Fatigue & Weakness',
    desc: 'Lacking energy or feeling physically drained despite resting.'
  },
  {
    url: '/unwell_2.jpg',
    title: 'Nausea & Stomach Upset',
    desc: 'Digestive discomfort, queasiness, or unexpected stomach pains.'
  },
  {
    url: '/unwell_3.jpg',
    title: 'Fever & Chills',
    desc: 'Changes in body temperature, shivering, or feeling unusually warm.'
  }
];

export default function Wellness() {
  return (
    <section id="wellness" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs block mb-4">Symptoms & Care</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Feeling Unwell?</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {wellnessImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[40px] bg-white shadow-lg border border-slate-100"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop';
                  }}
                />
              </div>
              <div className="p-8 text-center border-t border-slate-100">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{img.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed uppercase text-[10px] tracking-widest">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
