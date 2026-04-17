import React from 'react';
import Button from '../ui/Button';

const Mastery = () => {
  return (
    <section className="py-24 md:py-32 bg-surface" id="curriculum">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-16 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-display text-deep-charcoal relative inline-block pb-6">
            Mastery Through Precision
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] md:w-16 h-0.5 md:h-1 bg-primary"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Elite Gate Intensive */}
          <div className="col-span-1 lg:col-span-7 bg-surface-container-lowest p-8 md:p-14 relative overflow-hidden group ghost-border ambient-shadow">
            <div className="relative z-10 flex flex-col h-full justify-between items-start min-h-[320px]">
              <div>
                <span className="inline-block bg-surface-container-low text-primary text-[10px] uppercase font-bold tracking-widest px-3 py-1 mb-6">Flagship Program</span>
                <h3 className="text-3xl md:text-4xl font-display mb-6">Elite Gate Intensive</h3>
                <p className="text-deep-charcoal/70 text-sm md:text-base leading-relaxed max-w-lg mb-10">
                  A specialized 12-month residency designed for the top 1% of aspirants. Focusing on core engineering fundamentals and advanced problem-solving heuristics.
                </p>
              </div>
              <Button variant="text" className="!pb-1 text-xs">Explore Curriculum &rarr;</Button>
            </div>
            {/* Background design element */}
            <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 w-1/2 md:w-2/5 h-full pointer-events-none">
                <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=400" alt="Blueprint overlay" className="w-full h-full object-cover mix-blend-luminosity" />
            </div>
          </div>

          {/* Virtual Scholars Lab */}
          <div className="col-span-1 lg:col-span-5 bg-surface-container-low p-8 md:p-14 flex flex-col justify-center min-h-[280px]">
            <h3 className="text-2xl md:text-3xl font-display mb-4">Virtual Scholars Lab</h3>
            <p className="text-deep-charcoal/70 text-sm leading-relaxed mb-10">
              High-fidelity digital simulation of actual GATE environments with real-time feedback loops.
            </p>
            <Button variant="secondary" className="w-full !py-4 !text-xs bg-transparent">Apply Now</Button>
          </div>

          {/* Computational Focus */}
          <div className="col-span-1 lg:col-span-5 bg-deep-charcoal text-white p-8 md:p-14 flex flex-col justify-center gap-8 min-h-[280px]">
            <div className="flex gap-4">
              <div className="text-primary mt-1 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-xl mb-1 mt-0">Computational Focus</h4>
                <p className="text-surface-container-low/60 text-[10px] tracking-widest uppercase font-medium mt-2">Algorithmic Modeling</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-primary mt-1 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-xl mb-1 mt-0">Cognitive Training</h4>
                <p className="text-surface-container-low/60 text-[10px] tracking-widest uppercase font-medium mt-2">Performance Psychology</p>
              </div>
            </div>
          </div>

          {/* Philosophy / Quote block */}
          <div className="col-span-1 lg:col-span-7 bg-surface-container-low p-8 md:p-14 flex flex-col items-center justify-center text-center min-h-[280px]">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-surface mb-8 border border-outline-variant/15 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1546410531-f92cb58ab394?auto=format&fit=crop&q=80&w=200" alt="Abstract geometric block" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
            </div>
            <p className="font-display text-xl md:text-2xl italic text-deep-charcoal max-w-lg mb-6 leading-relaxed">
              "Precision is the difference between participation and placement."
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Director of Pedagogy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mastery;
