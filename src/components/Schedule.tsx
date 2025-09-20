
"use client";

import React from 'react';

const scheduleData = [
  { time: '09:00 AM', title: 'Registration & Welcome Coffee', speaker: '' },
  { time: '10:00 AM', title: 'Opening Keynote', speaker: 'Dr. Evelyn Reed' },
  { time: '11:00 AM', title: 'Modern Web with Next.js 14', speaker: 'David John' },
  { time: '12:00 PM', title: 'Lunch Break', speaker: '' },
  { time: '01:00 PM', title: 'AI & Machine Learning Trends', speaker: 'Micky Smith' },
  { time: '02:00 PM', title: 'Building for the Multi-platform World', speaker: 'Emily White' },
  { time: '03:00 PM', title: 'Networking Session', speaker: '' },
  { time: '04:00 PM', title: 'Closing Remarks', speaker: 'GDG Organizers' },
];

const Schedule = () => {
  return (
    <div className="w-full py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white font-poppins">Event Schedule</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-neutral-700"></div>
          {scheduleData.map((item, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                <p className="text-lg font-semibold text-white">{item.title}</p>
                {item.speaker && <p className="text-md text-gdg-green">{item.speaker}</p>}
              </div>
              <div className="z-10 flex items-center order-2 bg-neutral-800 shadow-xl w-24 h-12 rounded-full">
                <h3 className="mx-auto font-semibold text-white text-sm">{item.time}</h3>
              </div>
              <div className="w-5/12 order-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
