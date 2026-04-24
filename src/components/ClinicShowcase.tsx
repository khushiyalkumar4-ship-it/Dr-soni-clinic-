import React from 'react';
import { motion } from 'motion/react';

const images = [
  {
    url: '/team_chatgpt.jpg',
    fallback: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    alt: 'Dr. Soni Homeopathy Team',
    title: 'Professional Team',
    desc: 'Our expert medical practitioners at the clinic.'
  },
  {
    url: '/new_image.jpg',
    fallback: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop',
    alt: 'Dr. Soni Gallery Image',
    title: 'Expert Care',
    desc: 'Dedicated to your holistic healing process.'
  }
];

export default function ClinicShowcase() {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs block mb-4">Clinic Gallery</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Trust & Transparency</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {images.map((img, idx) => (
            <GalleryItem key={idx} img={img} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ img, idx }: { img: typeof images[0], idx: number, key?: number }) {
  const [src, setSrc] = React.useState(img.url);
  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    if (!hasError) {
      setSrc(img.fallback);
      setHasError(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.1 }}
      className="group relative overflow-hidden rounded-[48px] bg-white shadow-lg border-4 border-white ring-1 ring-slate-100"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={src} 
          alt={img.alt}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          onError={handleError}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{img.title}</h3>
        <p className="text-slate-500 font-medium leading-relaxed uppercase text-[10px] tracking-widest">{img.desc}</p>
      </div>
    </motion.div>
  );
}
