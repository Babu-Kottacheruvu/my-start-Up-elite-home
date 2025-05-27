
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">EliteHomes</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your trusted partner in real estate for over 15 years. We're committed to helping 
              you find the perfect property and achieve your real estate dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Property Sales</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Investment Properties</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 EliteHomes. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={16} className="text-red-500" /> for finding your perfect home
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
