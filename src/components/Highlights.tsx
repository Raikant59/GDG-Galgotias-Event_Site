
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { FiCode, FiUsers, FiCpu } from 'react-icons/fi';

const highlightsData = [
  {
    icon: <FiCode className="w-10 h-10 text-gdg-blue" />,
    title: 'Modern Web with Next.js 14',
    speaker: 'David John, Vercel',
    description: 'Explore the latest features of Next.js and build high-performance web applications.',
  },
  {
    icon: <FiCpu className="w-10 h-10 text-gdg-green" />,
    title: 'AI & Machine Learning',
    speaker: 'Micky Smith, Google AI',
    description: 'A deep dive into the current and future trends of AI, from LLMs to generative models.',
  },
  {
    icon: <FiUsers className="w-10 h-10 text-gdg-yellow" />,
    title: 'Multi-platform Development',
    speaker: 'Emily White, Flutter Dev',
    description: 'Learn how to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
  },
  
];

const Highlights = () => {
  return (
    <div className="w-full py-20 bg-neutral-950">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white font-poppins">Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightsData.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="bg-neutral-900 border-neutral-800 h-full">
                <CardHeader className="items-center">
                  {highlight.icon}
                  <CardTitle className="text-white text-xl pt-4">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-bold text-gdg-red">{highlight.speaker}</p>
                  <p className="text-neutral-400 mt-2">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
