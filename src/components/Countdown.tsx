import  { useState, useEffect } from 'react';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    Dias: 0,
    Horas: 0,
    Minutos: 0,
    Segundos: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-12-24T20:09:30');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

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