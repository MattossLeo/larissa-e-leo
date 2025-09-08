import React, { useState } from 'react';
import { Send } from 'lucide-react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: '',
    dietaryRestrictions: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-br from-rose-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="text-6xl mb-6">💌</div>
              <h2 className="font-windsong text-4xl text-rose-600 mb-4">
                Thank You!
              </h2>
              <p className="text-xl text-gray-600">
                We've received your RSVP and are so excited to celebrate with you!
                We'll be in touch with more details closer to the wedding date.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-rose-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-windsong text-5xl md:text-6xl text-rose-600 mb-4">
            RSVP
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We can't wait to celebrate with you! Please let us know if you'll be joining us 
            for our special day.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Will you be attending? *
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-rose-300 transition-colors duration-300">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    required
                    onChange={handleChange}
                    className="text-rose-600 mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-800">Yes, I'll be there!</div>
                    <div className="text-sm text-gray-600">Can't wait to celebrate</div>
                  </div>
                </label>
                
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-rose-300 transition-colors duration-300">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    required
                    onChange={handleChange}
                    className="text-rose-600 mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-800">Sorry, can't make it</div>
                    <div className="text-sm text-gray-600">Will be there in spirit</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dietary Restrictions or Allergies
              </label>
              <input
                type="text"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="Let us know about any dietary needs..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Message for the Couple
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Share your wishes, memories, or any special message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-lg font-medium text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              <Send className="inline-block w-5 h-5 mr-2" />
              Send RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;