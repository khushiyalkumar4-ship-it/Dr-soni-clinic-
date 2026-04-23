import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Baby, User, Activity, Wind, Sparkles, Brain, Scale } from 'lucide-react';

const services = [
  {
    title: 'Stomach & Liver',
    desc: 'Specialized homeopathic care for chronic digestive issues and liver health.',
    icon: Activity,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Mental Health',
    desc: 'Natural relief for stress, anxiety, and constitutional support.',
    icon: Brain,
    color: 'bg-teal-50 text-teal-600',
  },
  {
    title: 'Women Health',
    desc: 'Hormonal balance, PCOS, and specialized menstrual health care.',
    icon: User,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Heart & Kidney',
    desc: 'Complementary homeopathic support for chronic organ-related issues.',
    icon: HeartPulse,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    title: 'Cold, Cough & Fever',
    desc: 'Rapid and safe recovery from seasonal infections and viral fever.',
    icon: Wind,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Weight Problems',
    desc: 'Holistic approach to thyroid balance and natural weight management.',
    icon: Scale,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Pediatrics',
    desc: 'Immunity building for children and natural growth support.',
    icon: Baby,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Skin Care',
    desc: 'Eczema, Psoriasis & Acne specialists with holistic inner healing.',
    icon: Sparkles,
    color: 'bg-blue-50 text-primary-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs block mb-4"
          >
            Specialized Healthcare
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Our Core Treatments
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-8"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 ring-4 ring-white shadow-inner group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

