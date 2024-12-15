
import { Clock, MapPin, Calendar, Music } from 'lucide-react';

export const PartyDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-all duration-300">
        <Calendar className="w-8 h-8 mb-4 text-amber-300" />
        <h3 className="text-xl font-semibold mb-2 text-white">Fecha</h3>
        <p className="text-gray-200">Martes, 24 de Diciembre 2024</p>
      </div>
      
      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-all duration-300">
        <Clock className="w-8 h-8 mb-4 text-amber-300" />
        <h3 className="text-xl font-semibold mb-2 text-white">Hora</h3>
        <p className="text-gray-200">9:30 PM </p>
      </div>
      
      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-all duration-300">
        <MapPin className="w-8 h-8 mb-4 text-amber-300" />
        <h3 className="text-xl font-semibold mb-2 text-white">Lugar</h3>
        <p className="text-gray-200"><br />De la casa de empeño de rodrigo 1/2 c al E sector #3 </p><br className='text-white' />

        {/* <p className="text-gray-200">De donde el gordo que vendia elotes </p> */}
      </div>

      
      {/*https://youtu.be/4sZmPHJPvZE?si=c0OwwthYLidhFUjv */}
      
      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-all duration-300">
        <Music className="w-8 h-8 mb-4 text-amber-300" />
        <h3 className="text-xl font-semibold mb-2 text-white">/**/</h3>
        <p className="text-gray-200">/**/</p>
      </div>
    </div>
  );
};