import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Plus, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Dr. Soni', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed w-full z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-primary-700 text-white py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] sm:text-xs font-semibold tracking-wide">
        <div className="flex gap-4 sm:gap-6">
          <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> +91 88206 04878</span>
          <span className="hidden sm:flex items-center gap-2"><MapPin className="w-3 h-3" /> Patel Nagar, Akbarpur, Ambedkar Nagar, U.P.</span>
        </div>
        <div className="flex gap-4">
          <span>Mon - Sat: 10:00 AM - 08:00 PM</span>
        </div>
      </div>

      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-white py-4 shadow-md' : 'bg-white/95 backdrop-blur-sm py-5 shadow-sm'
        } border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex justify-between items-center`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-100 shadow-sm shrink-0 bg-white">
              <img src="/logo.png" alt="Dr. Soni Logo" className="w-full h-full object-contain" />
            </div>
            <div className="leading-none">
              <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">Dr. Soni Homeopathy Clinic</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Natural & Safe Treatment</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-8 text-sm font-semibold text-slate-600">
              <a href="#" className="transition-colors hover:text-primary-500 text-primary-500 border-b-2 border-primary-500 pb-1">Home</a>
              <a href="#services" className="transition-colors hover:text-primary-500">Services</a>
              <a href="#gallery" className="transition-colors hover:text-primary-500">Gallery</a>
              <a href="#contact" className="transition-colors hover:text-primary-500">Contact</a>
            </nav>
            <button 
              onClick={() => window.alert('Call: 8820604878')}
              className="bg-primary-500 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md shadow-blue-100 uppercase tracking-wider transition-all"
            >
              Book Appointment
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary-500 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden origin-top"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-primary-500 hover:bg-slate-50 rounded-lg">Home</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-primary-500 hover:bg-slate-50 rounded-lg">Services</a>
              <a href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-primary-500 hover:bg-slate-50 rounded-lg">Gallery</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-primary-500 hover:bg-slate-50 rounded-lg">Contact</a>
              <div className="pt-4 px-3">
                <button 
                  onClick={() => { setIsOpen(false); window.alert('Call: 8820604878'); }}
                  className="w-full bg-primary-500 text-white py-4 rounded-xl text-sm font-bold uppercase tracking-wider"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

