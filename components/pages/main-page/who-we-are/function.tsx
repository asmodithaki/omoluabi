import { FC } from 'react';

const AboutUsSection: FC = () => {
  return (
    <section className="bg-gray-300 py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Who are we</h2>
        <h3 className="text-2xl font-bold text-orange-600 mb-6">About Us</h3>
        
        {/* Description */}
        <p className="text-lg text-gray-700 mb-8">
          Yorùbá Ronu is organized exclusively for charitable, educational, scientific, and cultural purposes. The organization is registered as a non-profit organization. Our activity is as follows: Promotion of culture and traditions of the Yorùbá people and preaching the conservation of the Yorùbá identity and ideologies. The Yorùbá are a pride of the black race. We hail from the Western Region of present-day Nigeria. From Yorùbá creations history, Ile-Ife is the cradle of Yorùbá people and considered to be the site of creation of Mother Earth. It is from Ile Ife that civilization arose for the Black race.
        </p>

        {/* Button */}
        <a 
          href="#our-people" 
          className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-400 transition"
        >
          Our People
        </a>
      </div>
    </section>
  );
};

export default AboutUsSection;
