
import { Sparkles } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

export const Header = () => {
  return (
    <div className="text-center">
      <FadeIn delay={200}>
        <Sparkles className="w-12 h-12 mx-auto text-amber-300 mb-6 animate-float" />
        <p className="text-2xl font-script mt-2 text-amber-300">Haz click en cualquier parte</p>
      </FadeIn>
      
      <FadeIn delay={400}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
          ¡Es mi Cumpleaños!
        </h1>
      </FadeIn>
      
      <FadeIn delay={600}>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Te invito a celebrar conmigo una noche inolvidable
        </p>
      </FadeIn>
      
      <FadeIn delay={800}>
        <div className="w-24 h-1 bg-amber-300 mx-auto mb-12 rounded-full"></div>
        
      </FadeIn>
    </div>
  );
};