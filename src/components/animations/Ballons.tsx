import React, { useState, useEffect } from 'react';
import '../../Ballons.css';
import { CSSProperties } from 'react';

interface CustomCSSProperties extends CSSProperties {
  '--color'?: string;
}

export const BalloonsAndConfetti: React.FC = () => {
  const [confettiCount, setConfettiCount] = useState(100); // Comienza con mucho confeti

  useEffect(() => {
    // Reducir la cantidad de confeti después de 4 segundos
    const timer = setTimeout(() => {
      setConfettiCount(25); // Reducir a una cantidad moderada
    }, 0);

    return () => clearTimeout(timer); // Limpiar el temporizador
  }, []);


  

  const generateConfetti = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="confetti-piece"
        style={{
          left: `${Math.random() * 100}vw`,
          animationDuration: `${2 + Math.random()}s`,
          '--color': `hsl(${Math.random() * 50 + 40}, 70%, ${Math.random() * 30 + 50}%)`, // Tonos dorados
        } as CustomCSSProperties}
      />
    ));
  };

  return (
    <div className="animation-container">
      <div className="confetti-layer">{generateConfetti(confettiCount)}</div>
    </div>
  );
};
