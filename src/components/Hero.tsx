import React from 'react';
import { ArrowRight, MapPin, Home, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find Your
              <span className="text-blue-400 block">Dream Home</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              With over 15 years of experience, we help you discover exceptional properties 
              that match your lifestyle and investment goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Your Search
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Consultation
              </button>
              <a 
                href="https://wa.me/919014487604" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                Connect on WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Home className="text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-slate-400 text-sm">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-slate-400 text-sm">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in lg:flex lg:justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-md">
              <h3 className="text-2xl font-bold mb-6 text-white">Why Choose EliteHomes?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">Expert guidance through every step of your real estate journey</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">Access to exclusive properties and market insights</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">Personalized service tailored to your unique needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">Proven track record of successful transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
