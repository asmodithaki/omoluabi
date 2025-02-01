'use client';

import React, { useState } from 'react';
import Flag from 'react-world-flags';
import Card from '@/components/ui/Card';

// Reusable CardContent Component
const CardContent = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline decoration-green-500">{title}</h2>
    {children}
  </Card>
);

const SierraLeonePage = () => {
  const [currentProverbIndex, setCurrentProverbIndex] = useState(0);
  const [isSignedIn] = useState(false);

  const proverbs = [
    { text: 'When the music changes, so does the dance.', meaning: 'Adapt to changing circumstances.' },
    { text: 'A bird will always use another bird’s feathers to feather its nest.', meaning: 'We depend on others to succeed.' },
    { text: 'A single bracelet does not jingle.', meaning: 'Unity and teamwork bring success.' },
  ];

  const festivals = [
    { name: 'Freetown Carnival', description: 'A colorful event filled with music, dance, and parades.' },
    { name: 'Sierra Leone Independence Day', description: 'Celebrated on April 27th with national pride and festivities.' },
    { name: 'Tangains Festival', description: 'Showcases the rich cultural heritage of Sierra Leone through arts and music.' },
    { name: 'Bundu Mask Dances', description: 'Traditional dances honoring the Bundu Society’s cultural practices.' },
  ];

  const handlePrev = () => setCurrentProverbIndex((prev) => (prev === 0 ? proverbs.length - 1 : prev - 1));
  const handleNext = () => setCurrentProverbIndex((prev) => (prev === proverbs.length - 1 ? 0 : prev + 1));

  return (
    <div className="container mx-auto py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">
          <Flag code="SL" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 underline decoration-green-500">Sierra Leone</h1>
        <p className="text-lg text-gray-700">
          Sierra Leone, located on the west coast of Africa, is known for its beautiful beaches, rich history, and vibrant
          culture. The country is home to diverse ethnic groups, each contributing to its unique traditions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Culture Overview Section */}
        <CardContent title="Sierra Leone Culture">
          <p className="text-lg text-gray-700">
            Sierra Leone boasts a rich cultural tapestry, with over 16 ethnic groups contributing to its identity. 
            Music, dance, and storytelling are vital aspects of life, often reflecting themes of unity and resilience.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The Krio culture, heavily influenced by freed African American slaves, has significantly shaped the country&apos;s 
            language, cuisine, and traditions. Sierra Leonean cuisine includes flavorful dishes such as cassava leaves, 
            jollof rice, and groundnut soup.
          </p>
        </CardContent>

        {/* Proverbs Section */}
        <CardContent title="Sierra Leone Proverbs">
          <p className="text-lg italic text-gray-700 mb-4">
            Proverbs in Sierra Leone carry wisdom passed down through generations, offering insights into life and community values:
          </p>
          <div className="flex flex-col items-center">
            <div className="p-4 border rounded-md shadow-md">
              <p className="text-lg font-bold">&quot;{proverbs[currentProverbIndex].text}&quot;</p>
              <p className="text-md text-gray-600 mt-2">— {proverbs[currentProverbIndex].meaning}</p>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <button
                onClick={handlePrev}
                className="text-green-600 hover:text-green-800 transition-all"
                aria-label="Previous Proverb"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                className="text-green-600 hover:text-green-800 transition-all"
                aria-label="Next Proverb"
              >
                ▶
              </button>
            </div>
          </div>
          {isSignedIn ? (
            <button
              onClick={() => alert('Add Proverb Modal Here')}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800"
            >
              Add Your Proverb
            </button>
          ) : (
            <p className="text-lg text-gray-600 mt-4">Sign in to add your own proverbs.</p>
          )}
        </CardContent>

        {/* Festivals Section */}
        <CardContent title="Sierra Leone Festivals">
          <p className="text-lg text-gray-700">
            Festivals in Sierra Leone are a reflection of its diverse heritage and vibrant traditions. Here are some highlights:
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

export default SierraLeonePage;
