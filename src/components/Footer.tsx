import React from 'react';
import { Plus, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-slate-100">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-slate-800 block leading-tight tracking-tight">Dr. Soni's Clinic</span>
                <span className="text-[10px] uppercase tracking-widest text-primary-500 font-bold">Devendra Kumar Soni</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed pr-8 opacity-80">
              Providing specialized and natural healing via classical Homeopathy. Focused on long-term wellness and disease management.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Dr. Soni', 'Treatments', 'Testimonials', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-primary-500 text-sm font-semibold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Our Focus</h4>
            <ul className="space-y-4">
              {['Skin Care', 'Pediatrics', 'Lifestyle Relief', 'Respiratory Support', 'Digestive Care'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-primary-500 text-sm font-semibold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Social Connect</h4>
            <div className="flex space-x-3 mb-8">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="bg-slate-50 p-6 rounded-[24px] border border-slate-100">
              <div className="text-primary-500 font-bold text-xs mb-2 uppercase tracking-wider">Operating Hours</div>
              <div className="text-xs text-slate-500 space-y-1 font-bold">
                <div>Mon - Sat: 10:00 AM - 8:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 text-center flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Dr. Soni's Homeopathic Clinic. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-primary-500">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

