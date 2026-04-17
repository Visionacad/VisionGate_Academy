import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface py-12 border-t border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-lg font-display tracking-widest text-primary">
          VISION GATE ACADEMY
        </div>
        
        <div className="text-xs text-deep-charcoal/50 uppercase tracking-widest">
          &copy; 2026 Vision Gate Academy. All Rights Reserved.
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-xs tracking-widest text-deep-charcoal/70">
          <a href="#curriculum" className="hover:text-primary transition-colors uppercase">Curriculum</a>
          <a href="#admissions" className="hover:text-primary transition-colors uppercase">Admissions</a>
          <a href="#honors" className="hover:text-primary transition-colors uppercase">Honors</a>
          <a href="#contact" className="hover:text-primary transition-colors uppercase">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
