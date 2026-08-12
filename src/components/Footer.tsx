import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-16 sm:mt-24 bg-[#0a0a0a] border-t border-white/10 text-xs text-white/50">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 py-12 max-w-[1440px] mx-auto gap-8">
        {/* Brand */}
        <div className="font-['Manrope'] font-black text-2xl text-red-600 tracking-tighter">
          CINESTREAM
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <li>
            <a
              href="#terms"
              onClick={(e) => e.preventDefault()}
              className="text-white/60 hover:text-white transition-colors uppercase tracking-wider text-[11px] font-medium"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#privacy"
              onClick={(e) => e.preventDefault()}
              className="text-white/60 hover:text-white transition-colors uppercase tracking-wider text-[11px] font-medium"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#help"
              onClick={(e) => e.preventDefault()}
              className="text-white/60 hover:text-white transition-colors uppercase tracking-wider text-[11px] font-medium"
            >
              Help Center
            </a>
          </li>
          <li>
            <a
              href="#cookies"
              onClick={(e) => e.preventDefault()}
              className="text-white/60 hover:text-white transition-colors uppercase tracking-wider text-[11px] font-medium"
            >
              Cookie Preferences
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => e.preventDefault()}
              className="text-white/60 hover:text-white transition-colors uppercase tracking-wider text-[11px] font-medium"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <div className="text-white/40 font-['JetBrains_Mono'] text-[11px] text-center md:text-right">
          © 2024 CINESTREAM. All rights reserved. Bento Grid Cinema.
        </div>
      </div>
    </footer>
  );
};
