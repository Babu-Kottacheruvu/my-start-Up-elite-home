
import React from 'react';
import { CheckCircle, Users, Star, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Choose EliteHomes?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              For over 15 years, we've been helping families and investors find their perfect properties. 
              Our commitment to excellence and personalized service has made us the trusted choice for 
              thousands of satisfied clients.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">Expert Market Knowledge</h4>
                  <p className="text-slate-600">Deep understanding of local markets and emerging trends</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">Personalized Service</h4>
                  <p className="text-slate-600">Tailored approach to meet your unique needs and goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">Proven Track Record</h4>
                  <p className="text-slate-600">Successful transactions and satisfied clients across the region</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="text-blue-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-slate-900">1000+</div>
                <div className="text-slate-600">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Star className="text-blue-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-slate-900">4.9</div>
                <div className="text-slate-600">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Trophy className="text-yellow-400 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Award-Winning Team</h3>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our team has been recognized as the "Top Real Estate Agency" for three consecutive years, 
                reflecting our commitment to excellence and client satisfaction.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-blue-100 italic">
                  "EliteHomes made our home buying journey smooth and stress-free. Their expertise and 
                  dedication exceeded our expectations."
                </p>
                <p className="text-blue-200 font-semibold mt-2">- Sarah & Michael Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
