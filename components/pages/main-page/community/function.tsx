'use client';

import React from "react";
import { FaBook } from "react-icons/fa";
import Card from "@/components/ui/Card"; // Assuming you have a Card component to use
import Flag from 'react-world-flags';

const CommunityProjects = () => {
  const nations = [
    { name: "Nigeria", flag: "NG", link: "/nigeria" },
    { name: "Benin Republic", flag: "BJ", link: "/benin-republic" },
    { name: "Togo", flag: "TG", link: "/togo" },
    { name: "Sierra Leone", flag: "SL", link: "/sierra-leone" },
    { name: "Ghana", flag: "GH", link: "/ghana" },
    { name: "Côte d'Ivoire", flag: "CI", link: "/cote-divoire" },
    { name: "Brazil", flag: "BR", link: "/brazil" },
    { name: "Cuba", flag: "CU", link: "/cuba" },
    { name: "Oyotunji", flag: "US", link: "/oyotunji" }, // Using US flag for Oyotunji (not a real country)
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Community Projects</h2>
        <p className="text-lg text-gray-700 mb-12">
          We are passionate about uplifting and supporting the Yoruba community. Our organization undertakes various community projects, focusing on initiatives like food banks, scholarships, and empowerment programs.
        </p>

        {/* Community Projects Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Food Bank Initiative</h3>
            <p className="text-gray-700">
              Our food bank initiative provides essential food items to community members in need, ensuring no one goes hungry in our community.
            </p>
          </Card>

          <Card className="bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Scholarships for Youth</h3>
            <p className="text-gray-700">
              We offer scholarships to bright young minds in the Yoruba community to help them access higher education and fulfill their potential.
            </p>
          </Card>

          <Card className="bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Empowerment Programs</h3>
            <p className="text-gray-700">
              Our empowerment programs aim to provide skills training and resources to help individuals build self-sustaining livelihoods.
            </p>
          </Card>
        </div>

        {/* Nations Section */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Learn the Yoruba Language</h2>
        <p className="text-lg text-gray-700 mb-12">
          Yoruba is a rich and vibrant language spoken across multiple nations. Select a country to learn more about their unique Yoruba-speaking culture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nations.map((nation) => (
            <Card key={nation.name} className="bg-white shadow-lg flex flex-col items-center p-6">
              <div className="text-4xl mb-4">
                <Flag code={nation.flag} style={{ width: "50px", height: "30px" }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{nation.name}</h3>
              <a
                href={nation.link}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <FaBook className="text-lg" /> Learn More
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityProjects;
