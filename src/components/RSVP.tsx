import React, { useState } from 'react';
import { Send } from 'lucide-react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();

    // Identificador do tipo de envio
    form.append('tipo', 'RSVP');

    form.append('nome', formData.name);
    form.append('email', formData.email);
    form.append('telefone', formData.phone);
    form.append('quantidade_convidados', formData.guests);
    form.append('presenca', formData.attendance);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwN18ySatwS8HwlbdVFKI07lpth-LLvCEZazR0YZhrAmFuc0x5-f6qITTr0nJBPR2rt/exec?gid=0',
        {
          method: 'POST',
          mode: 'no-cors',
          body: form,
        }
      );

      setIsSubmitted(true);
    } catch (error) {
      alert('Erro ao enviar confirmação. Tente novamente.');
    }
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
                Obrigado!
              </h2>
              <p className="text-xl text-gray-600">
                Recebemos sua confirmação de presença e estamos muito animados para celebrar com você!
                Entraremos em contato com mais detalhes próximo à data do casamento.
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
            Confirmar Presença
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mal podemos esperar para celebrar com você! Por favor, nos informe se você estará 
            conosco em nosso dia especial.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
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
                  Endereço de Email *
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
                  Número de Telefone
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
                  Número de Convidados *
                </label>
                <select
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                >
                  <option value="1">1 Convidado</option>
                  <option value="2">2 Convidados</option>
                  <option value="3">3 Convidados</option>
                  <option value="4">4 Convidados</option>
                  <option value="5">5+ Convidados</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Você estará presente? *
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
                    <div className="font-medium text-gray-800">Sim, estarei lá!</div>
                    <div className="text-sm text-gray-600">Mal posso esperar para celebrar</div>
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
                    <div className="font-medium text-gray-800">Desculpe, não posso ir</div>
                    <div className="text-sm text-gray-600">Estarei lá em espírito</div>
                  </div>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-lg font-medium text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              <Send className="inline-block w-5 h-5 mr-2" />
              Enviar Confirmação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;