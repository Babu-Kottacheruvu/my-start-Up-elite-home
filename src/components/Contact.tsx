
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to start your real estate journey? Contact us today for a free consultation 
            and let us help you achieve your property goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-slate-300">(555) 123-4567</p>
                  <p className="text-slate-300">(555) 123-4568</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-slate-300">info@elitehomes.com</p>
                  <p className="text-slate-300">sales@elitehomes.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">WhatsApp</h4>
                  <a 
                    href="https://wa.me/5551234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                  <p className="text-slate-300 text-sm">Click to chat instantly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Office</h4>
                  <p className="text-slate-300">123 Main Street, Suite 400</p>
                  <p className="text-slate-300">Downtown, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Hours</h4>
                  <p className="text-slate-300">Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p className="text-slate-300">Saturday - Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">Select a subject</option>
                  <option value="buying">Buying a Property</option>
                  <option value="selling">Selling a Property</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tell us about your real estate needs..."
                ></textarea>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Send Message
                </button>
                <a 
                  href="https://wa.me/5551234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
