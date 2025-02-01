'use client';

import React, { useState } from 'react';
import Flag from 'react-world-flags';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Card from '@/components/ui/Card';

// Reusable CardContent Component
const CardContent = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline decoration-blue-500">{title}</h2>
    {children}
  </Card>
);

const NigeriaPage = () => {
  const [currentProverbIndex, setCurrentProverbIndex] = useState(0);
  const [isSignedIn] = useState(false);

  const proverbs = [
    { text: "Ile la ti n ko eso r'ode.", meaning: 'Charity begins at home.' },
    { text: "Bi o ba so odo di meji, ko ni riru.", meaning: 'A river that splits into two cannot flow strongly.' },
    { text: "Ti a ba fi owo otun ba omo wi, a fi owo osi fa mora.", meaning: 'If we use the right hand to discipline a child, we use the left hand to draw them close.' },
  ];

  const festivals = [
    { name: 'Osun-Osogbo Festival', description: 'Celebrates the goddess Osun, the river deity.' },
    { name: 'Egungun Festival', description: 'Honors ancestral spirits through masked dances and performances.' },
    { name: 'Eyo Festival', description: 'A vibrant masquerade festival celebrated in Lagos.' },
    { name: 'Ileya Festival', description: 'Also known as Eid al-Adha, widely celebrated by Yoruba Muslims.' },
    { name: 'Olojo Festival', description: 'Held in Ile-Ife, celebrating Ogun, the god of iron and war.' },
  ];

  const handlePrev = () => setCurrentProverbIndex((prev) => (prev === 0 ? proverbs.length - 1 : prev - 1));
  const handleNext = () => setCurrentProverbIndex((prev) => (prev === proverbs.length - 1 ? 0 : prev + 1));

  return (
    <div className="container mx-auto py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">
          <Flag code="NG" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 underline decoration-blue-500">Nigeria</h1>
        <p className="text-lg text-gray-700">
          Nigeria, located in West Africa, is home to a rich cultural heritage and diverse traditions. The Yoruba language
          is spoken by millions of people across Nigeria, making it an essential part of the nation&apos;s cultural identity.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Yoruba Overview Section */}
        <CardContent title="The Yoruba People">
          <p className="text-lg text-gray-700">
            Yoruba is one of the three largest ethnic groups in Nigeria, concentrated in the southwestern region of the
            country. The Yoruba population numbers over 20 million, and they speak a language of the Benue-Congo branch of
            the Niger-Congo language family.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The Yoruba are renowned for their craftsmanship in blacksmithing, weaving, leatherworking, and wood carving.
            Women engage in cotton spinning, basketry, and dyeing, playing a significant role in the market system central
            to Yoruba life.
          </p>
        </CardContent>

        {/* Yoruba Proverbs Section */}
        <CardContent title="Yoruba Proverbs">
          <p className="text-lg italic text-gray-700 mb-4">
            Yoruba proverbs are deeply rooted in wisdom and offer guidance on life&apos;s challenges. Here are a few:
          </p>
          <div className="flex flex-col items-center">
            <div className="p-4 border rounded-md shadow-md">
              <p className="text-lg font-bold">&quot;{proverbs[currentProverbIndex].text}&quot;</p>
              <p className="text-md text-gray-600 mt-2">— {proverbs[currentProverbIndex].meaning}</p>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <button
                onClick={handlePrev}
                className="text-blue-600 hover:text-blue-800 transition-all"
                aria-label="Previous Proverb"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="text-blue-600 hover:text-blue-800 transition-all"
                aria-label="Next Proverb"
              >
                <FaChevronRight size={24} />
              </button>
            </div>
          </div>
          {isSignedIn ? (
            <button
              onClick={() => alert('Add Proverb Modal Here')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800"
            >
              Add Your Proverb
            </button>
          ) : (
            <p className="text-lg text-gray-600 mt-4">Sign in to add your own proverbs.</p>
          )}
        </CardContent>

        {/* Yoruba Festivals Section */}
        <CardContent title="Yoruba Festivals">
          <p className="text-lg text-gray-700">
            Yoruba festivals celebrate the rich cultural heritage of the Yoruba people. Here are some of the most notable:
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

export default NigeriaPage;
