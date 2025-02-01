'use client';

import React, { useState } from 'react';
import Flag from 'react-world-flags';
import Card from '@/components/ui/Card';

// Reusable CardContent Component
const CardContent = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline decoration-yellow-500">{title}</h2>
    {children}
  </Card>
);

const TogoPage = () => {
  const [currentProverbIndex, setCurrentProverbIndex] = useState(0);
  const [isSignedIn] = useState(false);

  const proverbs = [
    { text: 'Even the best cooking pot will not produce food.', meaning: 'Effort is necessary for success.' },
    { text: 'If the lion doesn’t tell his story, the hunter will.', meaning: 'Speak up, or others will tell your story their way.' },
    { text: 'Wisdom is like a baobab tree; no one individual can embrace it.', meaning: 'Wisdom comes from the collective.' },
  ];

  const festivals = [
    { name: 'Evala Wrestling Festival', description: 'A traditional initiation rite featuring wrestling matches.' },
    { name: 'Gadao-Adossa (Fiesta of the Knife)', description: 'A celebration in the Kotokoli region marking cultural traditions.' },
    { name: 'Yam Festival', description: 'A festival celebrating the harvest and thanking the gods for abundance.' },
    { name: 'Voodoo Festival', description: 'A vibrant celebration of Togo’s traditional religious practices.' },
  ];

  const handlePrev = () => setCurrentProverbIndex((prev) => (prev === 0 ? proverbs.length - 1 : prev - 1));
  const handleNext = () => setCurrentProverbIndex((prev) => (prev === proverbs.length - 1 ? 0 : prev + 1));

  return (
    <div className="container mx-auto py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">
          <Flag code="TG" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 underline decoration-yellow-500">Togo</h1>
        <p className="text-lg text-gray-700">
          Togo, located in West Africa, is known for its rich cultural heritage, diverse ethnic groups, and traditional festivals. 
          Despite its small size, Togo is culturally vibrant and home to various indigenous traditions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Culture Overview Section */}
        <CardContent title="Togo Culture">
          <p className="text-lg text-gray-700">
            Togo is home to over 40 ethnic groups, each contributing to its unique cultural identity. The Ewe, Mina, and Kabye 
            are the largest groups, and their music, dance, and oral traditions play a significant role in Togolese culture.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Togolese cuisine is a mix of local and regional influences, with dishes like fufu, maize porridge, and palm nut soup 
            being staples. Markets are central to community life, reflecting the nation&apos;s deep-rooted traditions.
          </p>
        </CardContent>

        {/* Proverbs Section */}
        <CardContent title="Togolese Proverbs">
          <p className="text-lg italic text-gray-700 mb-4">
            Togolese proverbs are a wellspring of wisdom, offering life lessons passed down through generations:
          </p>
          <div className="flex flex-col items-center">
            <div className="p-4 border rounded-md shadow-md">
              <p className="text-lg font-bold">&quot;{proverbs[currentProverbIndex].text}&quot;</p>
              <p className="text-md text-gray-600 mt-2">— {proverbs[currentProverbIndex].meaning}</p>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <button
                onClick={handlePrev}
                className="text-yellow-600 hover:text-yellow-800 transition-all"
                aria-label="Previous Proverb"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                className="text-yellow-600 hover:text-yellow-800 transition-all"
                aria-label="Next Proverb"
              >
                ▶
              </button>
            </div>
          </div>
          {isSignedIn ? (
            <button
              onClick={() => alert('Add Proverb Modal Here')}
              className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-800"
            >
              Add Your Proverb
            </button>
          ) : (
            <p className="text-lg text-gray-600 mt-4">Sign in to add your own proverbs.</p>
          )}
        </CardContent>

        {/* Festivals Section */}
        <CardContent title="Togolese Festivals">
          <p className="text-lg text-gray-700">
            Festivals in Togo are vibrant celebrations of the nation&apos;s cultural traditions and spiritual heritage. Here are a few:
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

export default TogoPage;
