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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    paymentMethod: 'buy'
  });

  const [gifts, setGifts] = useState<GiftItem[]>([
    {
      id: 1,
      name: "Coffee Machine",
      price: 299,
      image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=400",
      claimed: false
    },
    {
      id: 2,
      name: "Dinner Set",
      price: 199,
      image: "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=400",
      claimed: false
    },
    {
      id: 3,
      name: "Stand Mixer",
      price: 349,
      image: "https://images.pexels.com/photos/4226903/pexels-photo-4226903.jpeg?auto=compress&cs=tinysrgb&w=400",
      claimed: false
    },
    {
      id: 4,
      name: "Bed Sheets Set",
      price: 89,
      image: "https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=400",
      claimed: false
    },
    {
      id: 5,
      name: "Cookware Set",
      price: 259,
      image: "https://images.pexels.com/photos/4226771/pexels-photo-4226771.jpeg?auto=compress&cs=tinysrgb&w=400",
      claimed: false
    },
    {
      id: 6,
      name: "Vacuum Cleaner",
      price: 179,
      image: "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=400",
      claimed: false
    }
  ]);

  const handleGiftSelect = (gift: GiftItem) => {
    if (!gift.claimed) {
      setSelectedGift(gift);
      setIsModalOpen(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedGift) {
      setGifts(gifts.map(gift => 
        gift.id === selectedGift.id 
          ? { ...gift, claimed: true }
          : gift
      ));
      setIsModalOpen(false);
      setSelectedGift(null);
      setFormData({ name: '', phone: '', paymentMethod: 'buy' });
      alert('Thank you for your generous gift! We\'ll be in touch with more details.');
    }
  };

  return (
    <section id="registry" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-windsong text-5xl md:text-6xl text-rose-600 mb-4">
            Gift Registry
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you'd like to help us start our new life together, 
            here are some items we'd love to have in our home.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gifts.map((gift) => (
            <div key={gift.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={gift.image}
                  alt={gift.name}
                  className="w-full h-48 object-cover"
                />
                {gift.claimed && (
                  <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full font-medium">
                      Already Claimed
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{gift.name}</h3>
                <p className="text-2xl font-bold text-rose-600 mb-4">${gift.price}</p>
                <button
                  onClick={() => handleGiftSelect(gift)}
                  disabled={gift.claimed}
                  className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                    gift.claimed
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-rose-600 text-white hover:bg-rose-700'
                  }`}
                >
                  <Gift className="inline-block w-5 h-5 mr-2" />
                  {gift.claimed ? 'Already Claimed' : 'Select This Gift'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedGift && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Gift Selection: {selectedGift.name}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gift Option
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="buy"
                        checked={formData.paymentMethod === 'buy'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="text-rose-600"
                      />
                      <span className="ml-2">I will buy and deliver the gift</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="money"
                        checked={formData.paymentMethod === 'money'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="text-rose-600"
                      />
                      <span className="ml-2">I prefer to send money for this gift</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors duration-300"
                >
                  Confirm Gift Selection
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