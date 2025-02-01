"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { useLanguage } from "@/lingual-context/LanguageContext"; // Import the useLanguage hook

const Home: FC = () => {
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage(); // Access language state and toggle function

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  // Text content for English and Yoruba
  const content = {
    en: {
      welcome: "Welcome to Yorùbá Ronu",
      description: "Discover the legacy, culture, and community of the Yoruba people.",
      signIn: "Sign In",
      signUp: "Sign Up",
      explore: "Explore Omoluabi",
    },
    yo: {
      welcome: "Ẹ káàbọ̀ sí Yorùbá Ronu",
      description: "Ṣàwárí ìtàn, àṣà, àti àwùjọ àwọn ènìyàn Yorùbá.",
      signIn: "Wọlé",
      signUp: "Forukọsilẹ",
      explore: "Ṣàwárí Omoluabi",
    },
  };

  const { welcome, description, signIn, signUp, explore } = content[language];

  return (
    <main className="flex items-center justify-center h-screen bg-gray-700 text-black dark:text-white">
      <div className="text-center space-y-6">
        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="absolute top-5 right-5 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
        >
          {language === "en" ? "Yoruba" : "English"}
        </button>

        {/* Welcome Message */}
        <h1 className="text-4xl md:text-5xl font-bold">{welcome}</h1>
        <p className="text-lg text-gray-300">{description}</p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleNavigation("/signin")}
            className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-medium hover:bg-blue-600 transition"
          >
            {signIn}
          </button>
          <button
            onClick={() => handleNavigation("/signup")}
            className="px-6 py-3 bg-green-500 text-white rounded-md text-lg font-medium hover:bg-green-600 transition"
          >
            {signUp}
          </button>
        </div>

        {/* Arrow Button to Omoluabi */}
        <div className="mt-10">
          <button
            onClick={() => handleNavigation("/omoluabi")}
            className="flex items-center justify-center mx-auto px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
          >
            <span>{explore}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.293a1 1 0 011.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 10-1.414 1.414L12.586 10H4a1 1 0 100 2h8.586l-2.293 2.293a1 1 0 000 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;