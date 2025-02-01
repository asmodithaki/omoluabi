'use client';

import React from 'react';
import { FaBookOpen, FaLanguage, FaVolumeUp, FaVideo, FaArrowRight } from 'react-icons/fa';
import Card from '@/components/ui/Card';

const LearnYorubaPage = () => {
  const learningResources = [
    {
      title: 'Introduction to Yoruba',
      description:
        'Learn the basics of the Yoruba language, including common phrases, greetings, and vocabulary.',
      link: 'https://www.omniglot.com/writing/yoruba.htm',
      icon: <FaLanguage size={40} className="text-blue-500" />,
    },
    {
      title: 'Yoruba Pronunciation Guide',
      description:
        'Master the unique tones and pronunciation of Yoruba words to speak like a native.',
      link: 'https://www.youtube.com/results?search_query=Yoruba+pronunciation',
      icon: <FaVolumeUp size={40} className="text-green-500" />,
    },
    {
      title: 'Yoruba Proverbs and Wisdom',
      description:
        'Explore Yoruba proverbs and their meanings to understand the cultural significance of the language.',
      link: '#',
      icon: <FaBookOpen size={40} className="text-yellow-500" />,
    },
    {
      title: 'Video Lessons',
      description:
        'Watch engaging video lessons designed to help beginners learn Yoruba step by step.',
      link: 'https://www.youtube.com/results?search_query=learn+Yoruba',
      icon: <FaVideo size={40} className="text-red-500" />,
    },
  ];

  return (
    <div className="container mx-auto py-16 text-center">
      {/* Header Section */}
      <Card>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 underline decoration-blue-500">
          Learn Yoruba
        </h1>
        <p className="text-lg text-gray-700">
          Welcome to the Yoruba learning page! Whether you&apos;re a beginner or someone looking to deepen your understanding
          of Yoruba, this is the perfect place to start. Dive into the language, culture, and traditions of one of the
          richest languages in Africa.
        </p>
      </Card>

      {/* Learning Resources Section */}
      <Card className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline decoration-blue-500">
          Learning Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {learningResources.map((resource, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border rounded-lg shadow-md text-center bg-gray-50 hover:bg-gray-100"
            >
              {resource.icon}
              <h3 className="text-xl font-bold text-gray-800 mt-4">{resource.title}</h3>
              <p className="text-gray-600 mt-2">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium underline flex items-center justify-center"
              >
                Explore <FaArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </Card>

      {/* Yoruba Alphabets Section */}
      <Card className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline decoration-blue-500">
    Yoruba Alphabets and Tones
  </h2>
  <p className="text-lg text-gray-700">
    The Yoruba language has its own unique alphabet and tones. These tones are essential for understanding and
    speaking Yoruba correctly, as the meaning of a word can change depending on the tone used. Below is a quick
    breakdown of Yoruba vowels and tones:
  </p>
  <ul className="text-left mt-6 space-y-4">
    <li>
      <a
        href="/yoruba/vowels"
        className="text-blue-600 hover:underline flex items-center"
      >
        <strong className="text-blue-500">Vowels:</strong>&nbsp; A, E, Ẹ, I, O, Ọ, U
      </a>
    </li>
    <li>
      <a
        href="/yoruba/consonants"
        className="text-blue-600 hover:underline flex items-center"
      >
        <strong className="text-blue-500">Consonants:</strong>&nbsp; B, D, F, G, GB, H, J, K, L, M, N, P, R, S, Ṣ, T, W, Y
      </a>
    </li>
    <li>
      <a
        href="/yoruba/tones"
        className="text-blue-600 hover:underline flex items-center"
      >
        <strong className="text-blue-500">Tones:</strong>&nbsp; High (´), Mid (unmarked), Low (`) – e.g., bá (meet),
        ba (carry), bà (father).
      </a>
    </li>
  </ul>
</Card>


      {/* Why Learn Yoruba Section */}
      <Card className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline decoration-blue-500">
          Why Learn Yoruba?
        </h2>
        <p className="text-lg text-gray-700">
          Learning Yoruba is not only a way to connect with your heritage but also an opportunity to immerse yourself in
          one of Africa&apos;s richest cultures. Whether for personal growth, professional opportunities, or cultural
          understanding, learning Yoruba opens doors to a vibrant community and a deep history.
        </p>
      </Card>
    </div>
  );
};

export default LearnYorubaPage;
