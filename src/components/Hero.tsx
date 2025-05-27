
import React from 'react';
import { ArrowRight, MapPin, Home, Award } from 'lucide-react';

const Hero = () => {
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start Your Search
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
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

          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Quick Property Search</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Property Type</label>
                  <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="">Select Type</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="apartment">Apartment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input 
                    type="text" 
                    placeholder="Enter city or neighborhood"
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Min Price</label>
                    <input 
                      type="text" 
                      placeholder="$0"
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Max Price</label>
                    <input 
                      type="text" 
                      placeholder="Any"
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Search Properties
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
