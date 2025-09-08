import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-windsong text-5xl md:text-6xl text-rose-600 mb-4">
            Our Love Story
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Larissa */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Larissa"
                className="w-64 h-64 rounded-full object-cover mx-auto shadow-2xl ring-8 ring-rose-100"
              />
            </div>
            <h3 className="font-windsong text-4xl text-rose-600 mb-4">Larissa</h3>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              With a heart full of dreams and eyes that sparkle with joy, Larissa brings warmth 
              and laughter to every moment. Her passion for life and love for family make every 
              day brighter. She believes in fairy tale endings and happily ever afters.
            </p>
          </div>

          {/* Leonardo */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Leonardo"
                className="w-64 h-64 rounded-full object-cover mx-auto shadow-2xl ring-8 ring-rose-100"
              />
            </div>
            <h3 className="font-windsong text-4xl text-rose-600 mb-4">Leonardo</h3>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              Strong, gentle, and endlessly caring, Leonardo is the anchor that keeps dreams 
              grounded in reality. His unwavering support and infectious smile light up every 
              room. He believes in building a future filled with love, laughter, and adventure.
            </p>
          </div>
        </div>

        <div className="text-center mt-16 max-w-4xl mx-auto">
          <h3 className="font-windsong text-3xl text-rose-600 mb-6">How We Met</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our love story began like something from a beautiful dream. Two hearts destined to find 
            each other finally crossed paths, and from that moment, we knew we had found our forever. 
            Through shared adventures, quiet moments, and endless conversations that lasted until dawn, 
            we discovered that we were meant to walk through life hand in hand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;