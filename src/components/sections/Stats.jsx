import React from 'react';

const statsData = [
  { value: "0.1%", label: "Top Percentile Intake" },
  { value: "500+", label: "IIT Admissions" },
  { value: "25+", label: "Years of Pedagogy" },
  { value: "98%", label: "Precision Accuracy" }
];

const Stats = () => {
  return (
    <section className="bg-surface-container-low py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 border-t border-outline-variant/15 pt-12 relative w-full overflow-hidden">
          <div className="hidden lg:block absolute -top-3 right-0 text-[10px] text-primary/50 tracking-widest uppercase">Est. 1998</div>
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="text-4xl md:text-5xl font-display text-primary">{stat.value}</div>
              <div className="text-xs tracking-widest uppercase text-deep-charcoal/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
