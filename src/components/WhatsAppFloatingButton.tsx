import React from 'react';

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/918820604878"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group border-4 border-white"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.065-.301-.15-1.265-.462-2.406-1.485-.888-.795-1.488-1.775-1.665-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
        <path d="M11.996 22a9.96 9.96 0 0 1-5.09-1.385l-.365-.216-3.784.996 1.01-3.69-.236-.375A9.957 9.957 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm0-18C7.585 4 4 7.585 4 12c0 1.71.535 3.328 1.48 4.675l-1.065 3.89 3.97-.104c1.3.87 2.885 1.332 4.61 1.332 4.415 0 8-3.585 8-8s-3.585-8-8-8z"/>
      </svg>
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
