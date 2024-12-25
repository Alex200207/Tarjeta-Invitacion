import { useState, useEffect } from 'react';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    Dias: 0,
    Horas: 0,
    Minutos: 0,
    Segundos: 0
  });

  useEffect(() => {
    // Configurar la fecha objetivo para las 9:30 PM (21:30) en hora local de Nicaragua
    const targetDate = new Date();
    targetDate.setHours(21, 30, 0, 0); // Establece las 21:30 (9:30 PM) hora local

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ Dias: 0, Horas: 0, Minutos: 0, Segundos: 0 });
        return;
      }

      const Dias = Math.floor(difference / (1000 * 60 * 60 * 24));
      const Horas = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const Minutos = Math.floor((difference / 1000 / 60) % 60);
      const Segundos = Math.floor((difference / 1000) % 60);

      setTimeLeft({ Dias, Horas, Minutos, Segundos });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-2 mt-12">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg mb-2">
            <span className="text-3xl font-bold text-amber-300">{value}</span>
          </div>
          <span className="text-sm text-gray-300 uppercase">{unit}</span>
        </div>
      ))}
    </div>
  );
};
