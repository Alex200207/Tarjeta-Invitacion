import { Clock, MapPin, Calendar, Music } from "lucide-react";
import { useState, useEffect } from "react";

export const PartyDetails = () => {
  const [audioPlayed, setAudioPlayed] = useState(false); // Estado para verificar si el audio ya se ha reproducido

  const handleFirstClick = () => {
    if (!audioPlayed) {
      const audio = new Audio("/HappyBirthday.mp3");
      audio.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });

      setAudioPlayed(true); // Marca el audio como reproducido
    }
  };

  useEffect(() => {
    // Agregar el evento de clic en todo el documento
    document.addEventListener("click", handleFirstClick);

    // Limpiar el efecto cuando el componente se desmonta
    return () => {
      document.removeEventListener("click", handleFirstClick);
    };
  }, [audioPlayed]); // El efecto depende del estado audioPlayed

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
        <p className="text-gray-200">9:30 PM</p>
      </div>

      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-all duration-300">
        <MapPin className="w-8 h-8 mb-4 text-amber-300" />
        <h3 className="text-xl font-semibold mb-2 text-white">Lugar</h3>
        <p className="text-gray-200">
          De la casa de empeño de Rodrigo, 1/2 c al E sector #3
        </p>
      </div>

      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-all duration-300">
        <Music className="w-8 h-8 mb-4 text-amber-300" />
        <h3 className="text-xl font-semibold mb-2 text-white">Happy-Birthday</h3>
        <p className="text-gray-200">
          ¡Escucha la melodía click aqui !
        </p>
      </div>
    </div>
  );
};
