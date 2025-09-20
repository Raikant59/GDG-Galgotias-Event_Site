
"use client";

import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaLink } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/company/gdg-on-campus-galgotias-university/' },
  { icon: FaInstagram, href: 'https://www.instagram.com/gdgocgu/' },
  { icon: FaLink, href: 'https://gdg.community.dev/gdg-on-campus-galgotias-university-greater-noida-india/' },
];

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-neutral-400 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} GDG Galgotias University. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors duration-300 hover:animate-glow"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
