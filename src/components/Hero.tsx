
"use client";

import React from 'react';
import { Button } from './ui/Button';

const Hero = () => {
  const handleScroll = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl font-poppins animate-glow bg-gradient-to-r from-blue-400 via-green-400 to-yellow-500 bg-clip-text text-transparent">
          GDG Galgotias University — Tech Event 2025
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl font-sans">
          Join us for innovation, networking, and inspiration.
        </p>
        <Button onClick={handleScroll} variant="premium" size="lg" className="mt-8 animate-glow">
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
