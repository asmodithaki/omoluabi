'use client';

import React, { useState } from 'react';
import Flag from 'react-world-flags';
import Card from '@/components/ui/Card';

// Reusable CardContent Component
const CardContent = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline decoration-red-500">{title}</h2>
    {children}
  </Card>
);

const CubaPage = () => {
  const [currentProverbIndex, setCurrentProverbIndex] = useState(0);
  const [isSignedIn] = useState(false);

  const proverbs = [
    { text: 'El que tiene tienda que la atienda.', meaning: 'He who owns a shop must take care of it.' },
    { text: 'Camarón que se duerme, se lo lleva la corriente.', meaning: 'A shrimp that falls asleep is taken by the current.' },
    { text: 'En casa de herrero, cuchillo de palo.', meaning: 'In the house of a blacksmith, wooden knives are used.' },
  ];

  const festivals = [
    { name: 'Carnival of Santiago de Cuba', description: 'A vibrant festival featuring music, dance, and parades.' },
    { name: 'Havana Jazz Festival', description: 'Celebrates Cuba’s love for jazz with local and international artists.' },
    { name: 'Festival del Habano', description: 'A celebration of Cuba’s iconic cigars with tastings and events.' },
    { name: 'Parrandas de Remedios', description: 'A Christmas festival with fireworks, parades, and colorful floats.' },
    { name: 'International Ballet Festival', description: 'Held in Havana, showcasing the best of ballet from around the world.' },
  ];

  const handlePrev = () => setCurrentProverbIndex((prev) => (prev === 0 ? proverbs.length - 1 : prev - 1));
  const handleNext = () => setCurrentProverbIndex((prev) => (prev === proverbs.length - 1 ? 0 : prev + 1));

  return (
    <div className="container mx-auto py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">
          <Flag code="CU" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 underline decoration-red-500">Cuba</h1>
        <p className="text-lg text-gray-700">
          Cuba, located in the Caribbean, is renowned for its rich cultural heritage, music, and vibrant traditions. 
          It is a land of resilience, rhythm, and passion.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cuban Culture Overview Section */}
        <CardContent title="Cuban Culture">
          <p className="text-lg text-gray-700">
            Cuban culture is a fusion of African, Spanish, and indigenous influences, creating a vibrant and unique 
            identity. The music, dance, and cuisine of Cuba reflect this diversity.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Cuba is home to world-famous salsa music and dance, as well as traditional son and Afro-Cuban rhythms. 
            The cuisine is known for its flavors, blending spices, fresh ingredients, and traditional recipes.
          </p>
        </CardContent>

        {/* Cuban Proverbs Section */}
        <CardContent title="Cuban Proverbs">
          <p className="text-lg italic text-gray-700 mb-4">
            Cuban proverbs reflect wisdom, humor, and life lessons passed down through generations. Here are a few:
          </p>
          <div className="flex flex-col items-center">
            <div className="p-4 border rounded-md shadow-md">
              <p className="text-lg font-bold">&quot;{proverbs[currentProverbIndex].text}&quot;</p>
              <p className="text-md text-gray-600 mt-2">— {proverbs[currentProverbIndex].meaning}</p>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <button
                onClick={handlePrev}
                className="text-red-600 hover:text-red-800 transition-all"
                aria-label="Previous Proverb"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                className="text-red-600 hover:text-red-800 transition-all"
                aria-label="Next Proverb"
              >
                ▶
              </button>
            </div>
          </div>
          {isSignedIn ? (
            <button
              onClick={() => alert('Add Proverb Modal Here')}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800"
            >
              Add Your Proverb
            </button>
          ) : (
            <p className="text-lg text-gray-600 mt-4">Sign in to add your own proverbs.</p>
          )}
        </CardContent>

        {/* Cuban Festivals Section */}
        <CardContent title="Cuban Festivals">
          <p className="text-lg text-gray-700">
            Festivals in Cuba are a celebration of the nation&apos;s cultural identity. Here are some highlights:
          </p>
          <ul className="mt-4 space-y-4">
            {festivals.map((festival, index) => (
              <li key={index} className="p-4 border rounded-md shadow-md">
                <p className="font-bold">{festival.name}</p>
                <p className="text-gray-700">{festival.description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
    </div>
  );
};

export default CubaPage;
