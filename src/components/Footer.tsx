import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-windsong text-4xl text-white-400 mb-4">
            Larissa & Leonardo
          </h2>
          <p className="text-gray-300 mb-6">
            Obrigado por fazer parte da nossa história de amor
          </p>
          <div className="flex items-center justify-center space-x-2 text-rose-400">
            <Heart size={20} fill="currentColor" />
            <span className="text-lg text-white font-medium">11 de Abril, 2026</span>
            <Heart size={20} fill="currentColor" />
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Feito com amor para nosso dia especial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;