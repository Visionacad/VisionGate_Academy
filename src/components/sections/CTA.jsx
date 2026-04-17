import React from 'react';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="bg-deep-charcoal py-24 md:py-32 text-center relative overflow-hidden" id="admissions">
      {/* Abstract geometric bg */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-center items-center">
        <div className="w-[1000px] h-[1000px] border border-primary/20 rounded-full absolute mix-blend-screen scale-150 md:scale-100 hidden sm:block"></div>
        <div className="w-[600px] h-[600px] border border-primary/30 rounded-full absolute mix-blend-screen"></div>
        <div className="w-[400px] h-[400px] border border-primary/40 rounded-full absolute mix-blend-screen"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-8">Secure Your Legacy</h2>
        <p className="text-surface-container-low/70 text-sm md:text-base leading-relaxed max-w-xl mb-12 font-sans tracking-wide">
          Applications for the Academic Session 2026 are now open. Only 100 seats are available for the residency intensive.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full px-4">
          <Button variant="primary" className="!bg-primary-container !text-deep-charcoal hover:bg-gradient-to-r hover:from-primary hover:to-primary-container hover:!text-white w-full sm:w-auto min-w-[240px]">
            Request Prospectus
          </Button>
          <Button variant="secondary" className="!text-white !border-outline-variant/30 hover:!bg-white/5 hover:!border-white/50 w-full sm:w-auto min-w-[240px]">
            Contact Admissions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
