import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full max-w-[1500px] mx-auto z-0">
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-nebula-900 z-10 bottom-0 pointer-events-none" />

      <div className="relative h-[250px] sm:h-[350px] md:h-[450px] bg-gradient-to-r from-purple-900 via-nebula-800 to-blue-900 flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>

        <div className="relative z-20 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            Cyber Week is Here
          </h2>
          <p className="text-gray-200 text-lg md:text-xl mb-6 drop-shadow-md">
            Upgrade your reality with up to{" "}
            <span className="text-accent-glow font-bold">50% off</span> neural
            interfaces.
          </p>
          <button className="bg-accent-glow hover:bg-accent-hover text-white font-bold py-2 px-6 rounded-sm transition-transform hover:scale-105 shadow-lg shadow-accent-glow/50">
            Explore Deals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
