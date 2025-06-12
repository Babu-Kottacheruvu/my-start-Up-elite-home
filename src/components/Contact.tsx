import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Real Estate Inquiry: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phoneNumber}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:kbabu0307babu@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email Client Opened",
        description: "Your default email client should open with the message ready to send.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your request.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <a href="tel:+919014487604" className="text-slate-300">+91 9014487604</a>
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
                    href="https://wa.me/919014487604" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    +91 9014487604
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9+\s\-()]*"
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="+91 90144-87604"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select a subject</option>
                  <option value="buying">Buying a Property</option>
                  <option value="selling">Selling a Property</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Share any additional details about your real estate needs (optional)..."
                ></textarea>
              </div>
              
              <div className="flex gap-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <a 
                  href="https://wa.me/919014487604" 
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
