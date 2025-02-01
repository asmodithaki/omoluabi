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

const GhanaPage = () => {
  const [currentProverbIndex, setCurrentProverbIndex] = useState(0);
  const [isSignedIn] = useState(false);

  const proverbs = [
    { text: 'Obi nkyere akwadaa Nyame.', meaning: 'No one points God to a child.' },
    { text: 'Dua baako nfum a, ɛnyɛ kwa.', meaning: 'A single tree cannot make a forest.' },
    { text: 'Tikoro nko agyina.', meaning: 'One head does not hold council.' },
  ];

  const festivals = [
    { name: 'Homowo Festival', description: 'Celebrated by the Ga people to mark the end of hunger.' },
    { name: 'Aboakyir Festival', description: 'A deer hunting festival celebrated by the Effutu people in Winneba.' },
    { name: 'Chale Wote Festival', description: 'A vibrant street art festival in Accra.' },
    { name: 'Adae Kese Festival', description: 'Celebrated by the Ashanti to honor ancestors and their achievements.' },
    { name: 'Kundum Festival', description: 'Observed by the Ahanta and Nzema people to mark harvest and protect against famine.' },
  ];

  const handlePrev = () => setCurrentProverbIndex((prev) => (prev === 0 ? proverbs.length - 1 : prev - 1));
  const handleNext = () => setCurrentProverbIndex((prev) => (prev === proverbs.length - 1 ? 0 : prev + 1));

  return (
    <div className="container mx-auto py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">
          <Flag code="GH" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 underline decoration-yellow-500">Ghana</h1>
        <p className="text-lg text-gray-700">
          Ghana, located in West Africa, is known for its rich history, cultural diversity, and vibrant traditions. The
          Akan language and culture are integral to the nation&apos;s identity.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Akan Overview Section */}
        <CardContent title="The Akan People">
          <p className="text-lg text-gray-700">
            The Akan are one of the largest ethnic groups in Ghana, predominantly located in the southern part of the
            country. Their language, culture, and traditions are deeply rooted in Ghana&apos;s history.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The Akan people are known for their craftsmanship, particularly in goldsmithing, weaving kente cloth, and
            wood carving. Their matrilineal inheritance system plays a significant role in their social and political
            structure.
          </p>
        </CardContent>

        {/* Ghana Proverbs Section */}
        <CardContent title="Ghanaian Proverbs">
          <p className="text-lg italic text-gray-700 mb-4">
            Ghanaian proverbs are a rich source of wisdom and life lessons. Here are a few:
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

        {/* Ghana Festivals Section */}
        <CardContent title="Ghanaian Festivals">
          <p className="text-lg text-gray-700">
            Ghanaian festivals celebrate the country&apos;s vibrant culture and history. Here are some of the most popular:
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

export default GhanaPage;
