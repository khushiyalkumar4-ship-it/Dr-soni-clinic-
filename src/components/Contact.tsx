import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, User } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[60px] p-8 md:p-16 shadow-2xl ring-1 ring-slate-100 overflow-hidden relative border border-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-100 rounded-full -mr-40 -mt-40 opacity-30" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs block mb-4">Contact Specialist</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                Start Your Journey to <span className="text-primary-500">Wellness</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 opacity-80">
                Ready to experience natural healing? Leave us a message or visit our clinic for a specialized homeopathic consultation.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Chief Doctor</div>
                    <div className="text-xl font-extrabold text-slate-900 leading-none tracking-tight">Dr. Devendra Kumar Soni</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Call Us</div>
                    <a href="tel:+918820604878" className="text-xl font-extrabold text-slate-900 leading-none hover:text-primary-500 transition-colors cursor-pointer tracking-tight block">+91 88206 04878</a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.065-.301-.15-1.265-.462-2.406-1.485-.888-.795-1.488-1.775-1.665-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/><path d="M11.996 22a9.96 9.96 0 0 1-5.09-1.385l-.365-.216-3.784.996 1.01-3.69-.236-.375A9.957 9.957 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm0-18C7.585 4 4 7.585 4 12c0 1.71.535 3.328 1.48 4.675l-1.065 3.89 3.97-.104c1.3.87 2.885 1.332 4.61 1.332 4.415 0 8-3.585 8-8s-3.585-8-8-8z"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">WhatsApp Us</div>
                    <a href="https://wa.me/918820604878" target="_blank" rel="noreferrer" className="text-xl font-extrabold text-slate-900 leading-none hover:text-[#25D366] transition-colors cursor-pointer tracking-tight block">+91 88206 04878</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-xl font-extrabold text-slate-900 leading-none hover:text-primary-500 transition-colors cursor-pointer tracking-tight text-sm">gorgeousdev.247@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Visit Us</div>
                    <div className="text-lg font-extrabold text-slate-900 leading-tight tracking-tight text-sm">Patel Nagar, Opp. HDFC Bank, Akbarpur, Ambedkar Nagar (U.P. 224122)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl ring-1 ring-slate-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Full Name"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="Your Phone Number"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Treatment Area</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-700 appearance-none cursor-pointer">
                    <option>Select Treatment</option>
                    <option>Chronic Diseases</option>
                    <option>Pediatric Care</option>
                    <option>Skin & Hair</option>
                    <option>Respiratory Health</option>
                    <option>Lifestyle & Stress</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly describe your health concerns..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-700 resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-slate-900 text-white rounded-2xl py-5 font-bold uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-primary-600 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-slate-900/10">
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16 bg-slate-50 rounded-[60px] p-4 shadow-xl ring-1 ring-slate-100 overflow-hidden border border-white">
          <div className="w-full h-[400px] md:h-[500px] rounded-[48px] overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps?q=Patel+Nagar,+Opp.+HDFC+Bank,+Akbarpur,+Ambedkar+Nagar,+UP+224122&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Soni Homeopathy Clinic Location"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

