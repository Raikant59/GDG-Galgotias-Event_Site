
"use client";

import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-12-31T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60)) % 60,
        seconds: Math.floor((difference / 1000)) % 60,
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full py-12 md:py-20 bg-black">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="flex flex-col items-center justify-center bg-neutral-900 p-4 md:p-6 rounded-lg shadow-lg w-24 md:w-32">
            <span className="text-4xl md:text-6xl font-bold text-white animate-glow">--</span>
            <span className="text-md md:text-lg uppercase text-neutral-400">Days</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-neutral-900 p-4 md:p-6 rounded-lg shadow-lg w-24 md:w-32">
            <span className="text-4xl md:text-6xl font-bold text-white animate-glow">--</span>
            <span className="text-md md:text-lg uppercase text-neutral-400">Hours</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-neutral-900 p-4 md:p-6 rounded-lg shadow-lg w-24 md:w-32">
            <span className="text-4xl md:text-6xl font-bold text-white animate-glow">--</span>
            <span className="text-md md:text-lg uppercase text-neutral-400">Minutes</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-neutral-900 p-4 md:p-6 rounded-lg shadow-lg w-24 md:w-32">
            <span className="text-4xl md:text-6xl font-bold text-white animate-glow">--</span>
            <span className="text-md md:text-lg uppercase text-neutral-400">Seconds</span>
          </div>
        </div>
      </div>
    );
  }

  const timerComponents = Object.keys(timeLeft).map(interval => {
    const value = String(timeLeft[interval] || 0).padStart(2, '0');
    return (
      <div key={interval} className="flex flex-col items-center justify-center bg-neutral-900 p-4 md:p-6 rounded-lg shadow-lg w-24 md:w-32">
        <span className="text-4xl md:text-6xl font-bold text-white animate-glow">{value}</span>
        <span className="text-md md:text-lg uppercase text-neutral-400">{interval}</span>
      </div>
    );
  });

  return (
    <div className="w-full py-12 md:py-20 bg-black">
      <div className="container mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
        {timerComponents.length ? timerComponents : <p className="text-white">Time's up!</p>}
      </div>
    </div>
  );
};

export default Countdown;
