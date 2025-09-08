import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-windsong text-5xl md:text-6xl text-rose-600 mb-4">
            Wedding Venue
          </h2>
          <p className="text-xl text-gray-600">Join us at our beautiful ceremony location</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Venue Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Wedding Venue"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Venue Details */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Ceremony & Reception
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-rose-600 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">Beautiful Garden Venue</p>
                      <p className="text-gray-600">123 Wedding Lane, Dream City, DC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-rose-600 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">April 11, 2026</p>
                      <p className="text-gray-600">Saturday</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="text-rose-600 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">4:00 PM</p>
                      <p className="text-gray-600">Ceremony begins</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Important Notes:</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Parking is available on-site</li>
                  <li>• Outdoor ceremony (weather permitting)</li>
                  <li>• Cocktail hour immediately following ceremony</li>
                  <li>• Reception with dinner and dancing until 11 PM</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-16">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284781396!2d-122.41941548468154!3d37.77492927975896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c8a9b5b5b%3A0x1234567890abcdef!2sBeautiful%20Wedding%20Venue!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;