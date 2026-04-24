import React from 'react';
import { motion } from 'motion/react';
import { User } from 'lucide-react';

const team = [
  {
    name: 'Dr. Devendra Kumar Soni',
    title: 'Senior Consultant (NIH Kolkata)',
    image: '/dr_devendra_chatgpt.jpg',
    credentials: 'B.H.M.S, NIH. Kolkata, West Bengal (Govt. of India)'
  },
  {
    name: 'Dr. Indrani Muthukuda',
    title: 'Senior Consultant (NIH Kolkata)',
    image: '/dr_indrani_chatgpt.jpg',
    credentials: 'B.H.M.S, NIH. Kolkata, West Bengal (Govt. of India)'
  },
  {
    name: 'Dr. Narendra Kumar Soni',
    title: 'Senior Consultant (NIH Kolkata)',
    image: '/dr_narendra_latest.jpg',
    credentials: 'B.H.M.S, NIH. Kolkata, West Bengal (Govt. of India)'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs block mb-4">Expert Doctors</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Medical Team</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <TeamMember key={idx} member={member} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({ member, idx }: { member: typeof team[0], idx: number, key?: number }) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="relative mb-6 inline-block">
        <div className="w-64 h-64 mx-auto rounded-[48px] overflow-hidden border-8 border-slate-50 shadow-xl ring-1 ring-slate-100 bg-slate-100">
          {!hasError ? (
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"
              onError={() => setHasError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300">
              <User className="w-20 h-20" />
            </div>
          )}
        </div>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-50 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500" />
      </div>
      <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{member.name}</h3>
      <p className="text-primary-600 font-bold text-xs uppercase tracking-widest mb-2">{member.title}</p>
      <p className="text-slate-500 text-sm font-medium">{member.credentials}</p>
    </motion.div>
  );
}
