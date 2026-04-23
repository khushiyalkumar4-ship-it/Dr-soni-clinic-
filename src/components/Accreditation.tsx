import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle } from 'lucide-react';

function PosterImage() {
  const primary = "input_file_0.png";
  const [src, setSrc] = React.useState(primary);
  const [error, setError] = React.useState(false);

  return (
    <div className="w-full h-full bg-slate-100 flex items-center justify-center overflow-hidden">
      {!error ? (
        <img 
          src={src} 
          alt="NIH Faculty Certification"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 blur-0"
          onError={() => setError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-slate-300">
          <Award className="w-16 h-16" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Credential Verification</span>
        </div>
      )}
    </div>
  );
}

export default function Accreditation() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-widest text-xs mb-6">
              <Award className="w-5 h-5" />
              <span>Official Accreditation</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              NIH Kolkata <span className="text-primary-500">Certified Faculty</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              Our clinic represents the highest standards of homeopathic practice. All primary consultants are graduates and faculty-affiliated with the National Institute of Homoeopathy (NIH), Kolkata—the premier central institution under the Govt. of India.
            </p>
            
            <ul className="space-y-4">
              {[
                "Government of India Certified",
                "Advanced Clinical Research Experience",
                "Standardized Holistic Protocols",
                "NIH Alumni Expert Network"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative group p-4 bg-white rounded-[40px] shadow-2xl border border-slate-200">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <PosterImage />
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-100 rounded-full -z-10 blur-2xl opacity-60" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full -z-10 blur-2xl opacity-60" />
            </div>
            <p className="mt-6 text-center text-slate-400 text-xs font-bold uppercase tracking-widest italic leading-relaxed">
              * Official Faculty Verification from NIH Kolkata
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
