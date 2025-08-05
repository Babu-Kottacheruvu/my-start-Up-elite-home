import React, { useState } from 'react';
import { Menu, Phone, Mail, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#home" className="hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold text-slate-900">Town Square Keys</h1>
            </a>
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
              <span className="text-sm"><a href="tel:+919014487604" className="hover:text-blue-600 transition-colors">+91 9014487604</a></span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600">
              <Mail size={16} />
              <a href="mailto:townsquarekeys@gmail.com" className="text-sm hover:text-blue-600 transition-colors">kbabu0307babu@gmail.com</a>
            </div>
            <a 
              href="https://wa.me/919440226056" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              <a 
                href="#home" 
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Phone size={16} />
                  <span className="text-sm"><a href="tel:+919014487604" className="hover:text-blue-600 transition-colors">+91 9014487604</a></span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Mail size={16} />
                  <a href="mailto:townsquarekeys@gmail.com" className="text-sm hover:text-blue-600 transition-colors">kbabu0307babu@gmail.com</a>
                </div>
                <a 
                  href="https://wa.me/919440226056" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors mt-2"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
