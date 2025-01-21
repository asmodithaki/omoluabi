"use client";

import React from "react";
import Card from "@/components/ui/Card"; // Assuming you have a Card component to use

const CommunityProjects = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Community Projects</h2>
        <p className="text-lg text-gray-700 mb-12">
          We are passionate about uplifting and supporting the Yoruba community. Our organization undertakes various community projects, with a focus on initiatives like food banks, scholarships, and empowerment programs.
        </p>
        
        {/* Example of project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default CommunityProjects;
