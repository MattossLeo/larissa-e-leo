import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-windsong text-5xl md:text-6xl text-rose-600 mb-4">
            Nossa História de Amor
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
              Com um coração cheio de sonhos e olhos que brilham de alegria, Larissa traz calor 
              e risadas para cada momento. Sua paixão pela vida e amor pela família tornam cada 
              dia mais brilhante. Ela acredita em finais de contos de fadas e felizes para sempre.
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
              Forte, gentil e infinitamente carinhoso, Leonardo é a âncora que mantém os sonhos 
              conectados à realidade. Seu apoio inabalável e sorriso contagiante iluminam qualquer 
              ambiente. Ele acredita em construir um futuro cheio de amor, risadas e aventuras.
            </p>
          </div>
        </div>

        <div className="text-center mt-16 max-w-4xl mx-auto">
          <h3 className="font-windsong text-3xl text-rose-600 mb-6">Como Nos Conhecemos</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Nossa história de amor começou como algo saído de um lindo sonho. Dois corações destinados 
            a se encontrar finalmente cruzaram seus caminhos, e desde aquele momento, soubemos que 
            havíamos encontrado nosso para sempre. Através de aventuras compartilhadas, momentos 
            silenciosos e conversas infinitas que duravam até o amanhecer, descobrimos que fomos 
            feitos para caminhar pela vida de mãos dadas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;