import React, { useState } from 'react';
import { Gift, X } from 'lucide-react';

interface GiftItem {
  id: number;
  name: string;
  price: number;
  image: string;
  claimed: boolean;
}

const GiftRegistry = () => {
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);
  const [isCustomGift, setIsCustomGift] = useState(false);
  const [customGiftName, setCustomGiftName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    paymentMethod: 'buy'
  });

  const [gifts, setGifts] = useState<GiftItem[]>([
  {
    id: 1,
    name: "Jogo de Panelas Antiaderentes",
    price: 274.71,
    image: "https://m.media-amazon.com/images/I/71feuVPHh+L._AC_SL1500_.jpg",
    claimed: false
  },
  {
    id: 2,
    name: "Jogo de Copos",
    price: 34.97,
    image: "https://m.media-amazon.com/images/I/51JvLuUbaUL._AC_SL1000_.jpg",
    claimed: false
  },
  {
    id: 3,
    name: "Jogo de Xícaras de Café",
    price: 69.9,
    image: "https://m.media-amazon.com/images/I/61U3DWWtF+L._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 4,
    name: "Peneira de Cozinha",
    price: 23.94,
    image: "https://m.media-amazon.com/images/I/61yjNGb3+iL._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 5,
    name: "Ralador Multiuso",
    price: 25.44,
    image: "https://m.media-amazon.com/images/I/611BlzyhyAL._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 6,
    name: "Garrafas de Água",
    price: 22.9,
    image: "https://m.media-amazon.com/images/I/41SLX0+OcDL._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 7,
    name: "Saleiro e Porta-Temperos",
    price: 60.08,
    image: "https://m.media-amazon.com/images/I/81-Q32GntJL._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 8,
    name: "Travessa de Vidro",
    price: 65.9,
    image: "https://m.media-amazon.com/images/I/61pJO7eBJlL._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 9,
    name: "Formas de Bolo",
    price: 54.9,
    image: "https://m.media-amazon.com/images/I/51RKjJvDP8L._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 10,
    name: "Fruteira",
    price: 39.9,
    image: "https://m.media-amazon.com/images/I/61VOjw6qx-L._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 11,
    name: "Porta Detergente e Esponja",
    price: 32.8,
    image: "https://m.media-amazon.com/images/I/51lMJ4n9GWL._AC_SY879_.jpg",
    claimed: false
  },
  {
    id: 12,
    name: "Potes Plásticos para Alimentos",
    price: 80.66,
    image: "https://m.media-amazon.com/images/I/51XKi+2Fk8L._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 13,
    name: "Porta Escova de Dentes",
    price: 42.76,
    image: "https://m.media-amazon.com/images/I/51qLUYifovL._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 14,
    name: "Lixeira",
    price: 64.73,
    image: "https://m.media-amazon.com/images/I/51YosDexR5L._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 15,
    name: "Mop Giratório",
    price: 170.90,
    image: "https://m.media-amazon.com/images/I/61wZKmt5WQL._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 16,
    name: "Cesto de Roupa",
    price: 87,
    image: "https://m.media-amazon.com/images/I/61b8QzlC2vL._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 17,
    name: "Varal",
    price: 70.19,
    image: "https://m.media-amazon.com/images/I/41GgSwnN0nL._AC_SX679_.jpg",
    claimed: false
  },
  {
    id: 18,
    name: "Ferro de Passar Roupa",
    price: 59.99,
    image: "https://m.media-amazon.com/images/I/41lHDOIG3RL._AC_SX679_.jpg",
    claimed: false
  }
]);


  const openGiftModal = (gift: GiftItem) => {
    if (!gift.claimed) {
      setSelectedGift(gift);
      setIsCustomGift(false);
      setIsModalOpen(true);
    }
  };

  const openCustomGiftModal = () => {
    setSelectedGift(null);
    setIsCustomGift(true);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();

    form.append('nome', formData.name);
    form.append('telefone', formData.phone);
    form.append(
      'presente',
      isCustomGift ? customGiftName : selectedGift?.name || ''
    );
    form.append(
      'valor',
      isCustomGift ? '' : String(selectedGift?.price || '')
    );
    form.append('forma_pagamento', formData.paymentMethod);

    await fetch(
      'https://script.google.com/macros/s/AKfycbyAy5UsqKfygSlgO3QCk-dV2HacE5GFzs5rGGf8mq5cUH51YNEaHg6dFQNT62RlnO0aDw/exec?gid=0',
      {
        method: 'POST',
        mode: 'no-cors',
        body: form,
      }
    );

    if (selectedGift) {
      setGifts(prev =>
        prev.map(g =>
          g.id === selectedGift.id ? { ...g, claimed: true } : g
        )
      );
    }

    setIsModalOpen(false);
    setSelectedGift(null);
    setIsCustomGift(false);
    setCustomGiftName('');
    setFormData({ name: '', phone: '', paymentMethod: 'buy' });

    alert('Presente registrado com sucesso 💖');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">

        <div className='text-center'>
          <h2 className='font-windsong text-5xl md:text-6xl text-rose-600 mb-4'>
            Lista de Presente
          </h2>
          <p className='text-xl text-gray-600  mb-4'>Nosso maior presente é a sua presença. Mas caso queira dar algo, separamos uma lista abaixo:</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gifts.map(gift => (
            <div key={gift.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={gift.image} alt={gift.name} className="w-full h-64" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{gift.name}</h3>
                <p className="text-2xl text-rose-600 mb-4">
                  R$ {gift.price.toFixed(2).replace('.', ',')}
                </p>
                <button
                  onClick={() => openGiftModal(gift)}
                  disabled={gift.claimed}
                  className="w-full bg-rose-600 text-white py-3 rounded-lg"
                >
                  <Gift className="inline w-5 h-5 mr-2" />
                  {gift.claimed ? 'Já Escolhido' : 'Escolher Este Presente'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO PRESENTE LIVRE */}
        <div className="text-center mt-12">
          <button
            onClick={openCustomGiftModal}
            className="text-rose-600 font-medium hover:underline"
          >
            Não encontrou o que gostaria de dar? Clique aqui
          </button>
        </div>

        {/* MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <div className="flex justify-between mb-6">
                <h3 className="text-2xl font-semibold">
                  {isCustomGift
                    ? 'Escolha Livre de Presente'
                    : `Seleção de Presente: ${selectedGift?.name}`}
                </h3>
                <button onClick={() => setIsModalOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {isCustomGift && (
                  <div className="mb-4">
                    <label className="block mb-2">Nome do Presente *</label>
                    <input
                      required
                      value={customGiftName}
                      onChange={(e) => setCustomGiftName(e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg"
                    />
                  </div>
                )}

                <div className="mb-4">
                  <label className="block mb-2">Seu Nome *</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Telefone *</label>
                  <input
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </div>

                <button className="w-full bg-rose-600 text-white py-3 rounded-lg">
                  Confirmar Seleção do Presente
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default GiftRegistry;