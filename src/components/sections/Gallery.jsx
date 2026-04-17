import React, { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", 
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-surface py-24 md:py-32" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-start px-2 border-l-4 border-surface-container-low md:border-l-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-deep-charcoal mb-8 leading-[1.2] lg:border-l-4 lg:border-surface-container-low lg:pl-8">
              The academy doesn't just teach the syllabus; they refine your mental framework.
            </h2>
            <p className="text-deep-charcoal/70 text-base md:text-lg leading-relaxed mb-8 max-w-md lg:ml-9">
              The rigor here mirrors the exam's intensity, ensuring that by the time you reach the gates, you've already walked the path a thousand times.
            </p>
            <div className="pt-8 md:pl-9 mt-4 w-full">
                <p className="text-xs tracking-widest uppercase text-deep-charcoal font-bold mb-2">Campus Legacy</p>
                <div className="h-px bg-outline-variant/30 w-full max-w-[200px]"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[4/5] sm:aspect-video lg:aspect-square w-full overflow-hidden">
            <div className="absolute inset-0 bg-deep-charcoal">
              {images.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img 
                    src={img} 
                    alt={`Campus gallery view ${idx + 1}`} 
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                  {/* Small dark gradient overlay to make controls visible */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep-charcoal/80 to-transparent"></div>
                </div>
              ))}
            </div>
            
            {/* Minimal controls overlay */}
            <div className="absolute bottom-0 left-0 bg-primary/95 backdrop-blur-sm p-6 lg:p-8 z-20">
              <p className="text-[10px] text-white/90 uppercase tracking-widest mb-4 font-medium">Virtual Tour . 0{currentIndex + 1}</p>
              <div className="flex gap-4">
                {images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Show gallery image ${idx + 1}`}
                    className={`h-[2px] transition-all duration-300 ${idx === currentIndex ? 'w-10 bg-white' : 'w-4 bg-white/30 hover:bg-white/60'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
