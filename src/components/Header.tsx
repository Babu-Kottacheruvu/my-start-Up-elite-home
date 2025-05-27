
import React from 'react';
import { Menu, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-900">EliteHomes</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-slate-600">
              <Phone size={16} />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600">
              <Mail size={16} />
              <span className="text-sm">info@elitehomes.com</span>
            </div>
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
