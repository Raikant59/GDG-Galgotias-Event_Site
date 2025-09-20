
"use client";

import React from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

const Location = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Galgotias+University,+Greater+Noida";

  return (
    <div className="w-full py-20 bg-neutral-950">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white font-poppins">Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h3 className="text-2xl font-bold">GDG Galgotias University</h3>
            <p className="text-neutral-400 mt-2">Plot No. 2, Sector 17-A, Yamuna Expy, Greater Noida, Uttar Pradesh 203201</p>
            <Button 
              variant="outline"
              className="mt-6 border-gdg-blue text-gdg-blue hover:bg-gdg-blue hover:text-white"
              onClick={() => window.open(mapUrl, '_blank')}
            >
              View on Google Maps
            </Button>
          </div>
          <Card className="overflow-hidden border-neutral-800">
            <img
              src="https://cache.careers360.mobi/media/presets/640X300/colleges/staticmap/2022/8/22/8.png"
              alt="Map of GDG Galgotias University"
              className="w-full h-full object-cover"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Location;
