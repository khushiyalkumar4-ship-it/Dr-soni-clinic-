import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'Chronic Allergy Patient',
    content: 'I had severe skin allergies for years. Within 3 months of Dr. Soni\'s treatment, my skin cleared up completely. Highly recommended!',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Rahul Verma',
    role: 'Parent of 5-year old',
    content: 'My son used to fall sick every month with cold. Homeopathy built his immunity perfectly. He hasn\'t needed any other meds for a year.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Priya Patel',
    role: 'Wellness Program',
    content: 'The holistic approach towards stress and anxiety helped me regain my peace. Dr. Soni listens with such patience and care.',
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs block mb-4"
          >
            Patients' Voice
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Real Healing Stories</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[40px] border border-slate-100 relative group hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-50 group-hover:text-primary-100 transition-colors" />
              <div className="flex items-center space-x-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />)}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed mb-8 relative z-10 italic opacity-80">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center border-2 border-white shadow-sm`}>
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">{testimonial.name}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

