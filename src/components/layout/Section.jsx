import React from 'react';
import Container from './Container';

const Section = ({ children, className = '', containerSize = 'default', spacing = 'default' }) => {
  const spacingClasses = {
    sm: 'py-4',
    default: 'py-6 sm:py-8',
    lg: 'py-8 sm:py-12',
    none: ''
  };

  return (
    <section className={`${spacingClasses[spacing]} ${className} border-t border-b border-gray-700/30 backdrop-blur-sm`}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;