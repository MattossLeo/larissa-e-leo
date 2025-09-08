import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('April 11, 2026 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-rose-100 to-pink-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-windsong text-5xl md:text-6xl text-rose-600 mb-4">
          Our Big Day
        </h2>
        <p className="text-xl text-gray-600 mb-12">Counting down to forever</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-gray-600 uppercase tracking-wide text-sm font-medium">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;