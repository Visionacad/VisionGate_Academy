import React from 'react';
import Button from '../ui/Button';
import logo from '../../assets/vision logo.png';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-surface/80 backdrop-blur-[24px] border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="/" className="flex items-center gap-4">
          <img src={logo} alt="Vision Gate Academy Logo" className="h-10 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a href="#curriculum" className="text-xs tracking-[0.15em] font-medium text-deep-charcoal hover:text-primary transition-colors uppercase">Curriculum</a>
          <a href="#admissions" className="text-xs tracking-[0.15em] font-medium text-deep-charcoal hover:text-primary transition-colors uppercase">Admissions</a>
          <a href="#honors" className="text-xs tracking-[0.15em] font-medium text-deep-charcoal hover:text-primary transition-colors uppercase">Honors</a>
          <a href="#contact" className="text-xs tracking-[0.15em] font-medium text-deep-charcoal hover:text-primary transition-colors uppercase">Contact</a>
        </div>

        <div className="hidden md:block">
          <Button variant="primary" className="!py-3 !px-6 !text-xs">Enroll Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
