import React, { useState } from 'react';
import { Send } from 'lucide-react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: '',
    companions: [] as string[],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Atualiza campos normais + guests
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'guests') {
      const totalGuests = Number(value);
      const companionsCount = totalGuests - 1;

      setFormData(prev => ({
        ...prev,
        guests: value,
        companions: Array(companionsCount).fill(''),
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Atualiza nome dos acompanhantes
  const handleCompanionChange = (index: number, value: string) => {
    const updated = [...formData.companions];
    updated[index] = value;

    setFormData(prev => ({
      ...prev,
      companions: updated,
    }));
  };

  // Envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();

    form.append('tipo', 'RSVP');
    form.append('nome', formData.name);
    form.append('email', formData.email);
    form.append('telefone', formData.phone);
    form.append('quantidade_convidados', formData.guests);
    form.append('presenca', formData.attendance);

    formData.companions.forEach((name, index) => {
      form.append(`acompanhante_${index + 1}`, name);
    });

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

  // Tela de sucesso
  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-xl mx-auto text-center bg-white p-12 rounded-2xl shadow-xl">
          <div className="text-6xl mb-6">💌</div>
          <h2 className="text-4xl text-[#8CA7C0] mb-4">Obrigado!</h2>
          <p className="text-gray-600 text-lg">
            Sua confirmação foi enviada com sucesso.  
            Estamos ansiosos para celebrar com você!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-center text-4xl text-[#8CA7C0] mb-10">
          Confirmar Presença
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Nome e Email */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
              />
            </div>
          </div>

          {/* Telefone e Convidados */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Número de Convidados *
              </label>
              <select
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
              >
                <option value="1">1 Convidado</option>
                <option value="2">2 Convidados</option>
                <option value="3">3 Convidados</option>
                <option value="4">4 Convidados</option>
              </select>
            </div>
          </div>

          {/* Acompanhantes */}
          {formData.companions.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">
                Nome{formData.companions.length > 1 ? 's dos Acompanhantes' : ' do Acompanhante'}
              </label>

              <div className="space-y-4">
                {formData.companions.map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={`Acompanhante ${index + 1}`}
                    required
                    value={formData.companions[index]}
                    onChange={(e) =>
                      handleCompanionChange(index, e.target.value)
                    }
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-rose-500"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Presença */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3">
              Você estará presente? *
            </label>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="sim"
                  required
                  onChange={handleChange}
                />
                Sim, estarei presente
              </label>

              <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="nao"
                  required
                  onChange={handleChange}
                />
                Não poderei comparecer
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8CA7C0] text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition"
          >
            <Send size={18} />
            Enviar Confirmação
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
