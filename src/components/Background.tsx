import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-20 px-4 relative overflow-hidden"
      style={{
        backgroundColor: '#350a06',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 " />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};