import heroImage from "../public/larissa-e-leo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Larissa & Leonardo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-windsong text-6xl md:text-8xl lg:text-9xl mb-4 drop-shadow-2xl">
          Larissa & Leonardo
        </h1>
        <div className="w-32 h-1 bg-[#8CA7C0] to-pink-400 mx-auto mb-6"></div>
        <div className="text-lg md:text-xl font-medium">
          <p className="mb-2">11 de Abril, 2026</p>
          <p className="opacity-90">Reserve a Data</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;