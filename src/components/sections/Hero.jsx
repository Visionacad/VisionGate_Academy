import React from 'react';
import Button from '../ui/Button';
import bgImg from '../../assets/bg-img.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 bg-surface overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/40 to-surface z-10 transition-colors"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface to-transparent z-10"></div>
        <img 
          src={bgImg} 
          alt="Library background" 
          className="w-full h-full object-cover object-top opacity-30 grayscale mix-blend-multiply" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col items-center text-center w-full">
        <span className="title-md mb-8 tracking-[0.2em] text-primary uppercase">Established Excellence</span>
        
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-12 max-w-4xl text-deep-charcoal">
          Build Precision.<br />
          Achieve Rank.<br />
          Crack GATE.
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
          <Button variant="primary">Start Your Journey</Button>
          <Button variant="secondary">View Curriculum</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
