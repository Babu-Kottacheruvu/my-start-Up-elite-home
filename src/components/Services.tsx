
import React from 'react';
import { Home, TrendingUp, Key, Heart, Shield, Calculator } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Sales",
      description: "Expert guidance through every step of buying or selling your property with market insights and negotiation expertise."
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Comprehensive market research and property valuations to help you make informed investment decisions."
    },
    {
      icon: Key,
      title: "Property Management",
      description: "Full-service property management including tenant screening, maintenance coordination, and rental optimization."
    },
    {
      icon: Heart,
      title: "First-Time Buyers",
      description: "Specialized support for first-time homebuyers including mortgage guidance and neighborhood recommendations."
    },
    {
      icon: Shield,
      title: "Investment Properties",
      description: "Strategic investment property acquisition and portfolio management for maximum returns."
    },
    {
      icon: Calculator,
      title: "Financial Planning",
      description: "Real estate financial planning and consultation to align your property goals with your financial strategy."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From finding your dream home to maximizing your investment returns, 
            we provide comprehensive real estate services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="text-blue-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
