"use client";

import { FC } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const HeroSection: FC = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center pt-16 pb-32 mb-20"
      style={{ backgroundImage: "url('/omoluabione.jpg')" }} // Make sure to use the correct image path
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center relative py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8">YORÙBÁ RONU</h1>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Button variant="primary" >
            The Yoruba People
          </Button>
          
          <Button variant="warning">
            Join Us
          </Button>
        </div>

        {/* Card with description */}
        <div className="flex justify-center mb-8 px-4 sm:px-8">
          <Card className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              The Yoruba Race & Omoluabi
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              The Yoruba people are known for their rich cultural heritage, history, and deep-rooted
              traditions. With origins in the western region of Nigeria, the Yoruba embody a legacy of
              strength, wisdom, and unity. The term &ldquo;Omoluabi&rdquo; represents a person of good character,
              someone who upholds the highest moral and ethical values, showing respect, integrity, and
              dignity in all actions. Being an Omoluabi is a source of pride and a way of life that honors
              the traditions of the Yoruba people and the greatness of their heritage.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
