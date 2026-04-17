import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "font-sans uppercase tracking-[0.1em] text-sm font-medium transition-all duration-300 w-fit flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary text-white px-8 py-4 hover:bg-gradient-to-br hover:from-primary hover:to-primary-container",
    secondary: "bg-transparent border border-outline-variant/15 text-deep-charcoal px-8 py-4 hover:bg-surface-container-lowest hover:border-outline-variant/50",
    text: "text-deep-charcoal border-b border-primary relative pb-1 hover:text-primary",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
