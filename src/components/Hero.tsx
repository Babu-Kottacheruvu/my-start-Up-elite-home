
import React, { useState } from 'react';
import { ArrowRight, MapPin, Home, Award } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create the Google Form URL with pre-filled data
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScX1c8KUxpnEldrnrct_IFycVSRU7OCS-9TICoDBorSDqHefQ/viewform';
    const params = new URLSearchParams({
      'entry.123456789': formData.propertyType, // Replace with actual entry IDs from your Google Form
      'entry.987654321': formData.location,
      'entry.456789123': formData.minPrice,
      'entry.789123456': formData.maxPrice,
      'usp': 'pp_url'
    });
    
    // Open Google Form in new tab
    window.open(`${baseUrl}?${params.toString()}`, '_blank');
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start Your Search
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
              <a 
                href="https://wa.me/5551234567" 
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

          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Quick Property Search</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Property Type</label>
                  <select 
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Type</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="apartment">Apartment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Location</label>
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter city or neighborhood"
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Min Price</label>
                    <input 
                      type="text" 
                      name="minPrice"
                      value={formData.minPrice}
                      onChange={handleInputChange}
                      placeholder="$0"
                      className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Max Price</label>
                    <input 
                      type="text" 
                      name="maxPrice"
                      value={formData.maxPrice}
                      onChange={handleInputChange}
                      placeholder="Any"
                      className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
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
