// frontend/src/components/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // To show submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Simulate API call / form submission
    // In a real MERN app, you would send this data to your backend:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setStatus('Message sent successfully!');
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     const errorData = await response.json();
    //     setStatus(errorData.message || 'Failed to send message. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Contact form error:', error);
    //   setStatus('An error occurred. Please try again.');
    // }

    // Simulated delay and response:
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (formData.name && formData.email && formData.message) {
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setStatus('Invalid email format. Please try again.');
        } else {
            setStatus('Message sent successfully! (Simulated)');
            setFormData({ name: '', email: '', message: '' });
        }
    } else {
        setStatus('Please fill in all fields. (Simulated)');
    }


    // Clear status message after a few seconds
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Information Column */}
          <div className="space-y-8 md:pt-2">
            <div>
              <h3 className="text-2xl font-semibold text-sky-300 mb-4">Contact Information</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
              </p>
            </div>
            <a href="mailto:your.email@example.com" className="flex items-center group">
              <div className="p-3 bg-gray-700 rounded-full mr-4 group-hover:bg-sky-600 transition-colors">
                <Mail size={22} className="text-sky-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-200 group-hover:text-sky-300 transition-colors">Email</h4>
                <p className="text-gray-400 group-hover:text-sky-400 transition-colors">your.email@example.com</p> {/* Replace */}
              </div>
            </a>
            <a href="tel:+1234567890" className="flex items-center group">
              <div className="p-3 bg-gray-700 rounded-full mr-4 group-hover:bg-sky-600 transition-colors">
                <Phone size={22} className="text-sky-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-200 group-hover:text-sky-300 transition-colors">Phone</h4>
                <p className="text-gray-400 group-hover:text-sky-400 transition-colors">+1 (234) 567-8900</p> {/* Replace */}
              </div>
            </a>
            <div className="flex items-center group">
              <div className="p-3 bg-gray-700 rounded-full mr-4">
                <MapPin size={22} className="text-sky-400" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-200">Location</h4>
                <p className="text-gray-400">[Your City, Country]</p> {/* Replace */}
              </div>
            </div>
            <div className="pt-4">
                <h4 className="text-lg font-semibold text-sky-300 mb-3">Connect with me:</h4>
                <div className="flex space-x-4">
                    <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-sky-500 transition-colors" aria-label="LinkedIn">
                        <Linkedin size={24} className="text-white"/>
                    </a>
                    <a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-sky-500 transition-colors" aria-label="GitHub">
                        <Github size={24} className="text-white"/>
                    </a>
                    {/* Add more social links as needed */}
                </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors placeholder-gray-500"
                  placeholder="e.g., Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors placeholder-gray-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors placeholder-gray-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-md transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
                  disabled={status === 'Sending...'}
                >
                  <Send size={18} className="mr-2" />
                  {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status && (
                <p className={`text-sm mt-3 text-center ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
