"use client"
import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import OpenAI from 'openai';
import { FaRegSave } from 'react-icons/fa';

const YorubaAIPage = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<'english' | 'yoruba'>('english');
  const [previousPrompts, setPreviousPrompts] = useState<string[]>([]);

  // Initialize OpenAI client with DeepSeek API
  const openai = new OpenAI({
    baseURL: 'https://api.deepinfra.com/v1/openai',
    apiKey: process.env.NEXT_PUBLIC_DEEPINFRA_TOKEN || '',
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse('');

    try {
      const systemMessage = 
        language === 'english'
          ? 'You are a helpful assistant that provides accurate and detailed answers about the Yoruba language, including grammar, vocabulary, and cultural context. Please respond in both English and Yoruba.'
          : 'Ẹ̀rọ ọ̀kàn ni ọ̀pọ̀lọpọ̀ ènìyàn tó ń fúnni ní ìdáhùn tó pé nípa èdè Yorùbá, ìlò èdè, àwọn ọ̀rọ̀, àti àṣà Yorùbá. Jọ̀wọ́ dáhùn ní èdè Gẹ̀ẹ́sì àti Yorùbá.';

      const completion = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: userInput },
        ],
        model: 'deepseek-ai/DeepSeek-R1',
      });

      const responseText = completion.choices[0]?.message?.content || 'No response received.';
      setResponse(responseText);

      // Save the prompt
      setPreviousPrompts((prevPrompts) => [...prevPrompts, userInput]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse(
        language === 'english'
          ? 'An error occurred while fetching the response. Please try again.'
          : 'Àṣìṣe kan ṣẹlẹ̀ nígbà tí a ń gba ìdáhùn. Jọ̀wọ́ gbìyànjú lẹ́ẹ̀kansi.'
      );
    } finally {
      setIsLoading(false);
      setUserInput('');
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'english' ? 'yoruba' : 'english'));
  };

  const content = {
    english: {
      title: 'Ask the Yoruba AI',
      description: 'Have questions about learning the Yoruba language? Ask our Yoruba AI for quick and accurate answers about grammar, tones, vocabulary, and more!',
      inputLabel: 'Type your question here:',
      inputPlaceholder: 'E.g., How do you say "hello" in Yoruba?',
      buttonText: 'Ask Yoruba AI',
      responseTitle: 'Response:',
      savePrompt: 'Save Prompt',
    },
    yoruba: {
      title: 'Béèrè lọ́wọ́ Ẹ̀rọ Ọ̀kàn Yorùbá',
      description: 'Ṣé o ní ìbéèrè nípa kíkọ́ èdè Yorùbá? Béèrè lọ́wọ́ ẹ̀rọ ọ̀kàn Yorùbá wa fún ìdáhùn tó yẹ̀rá àti tó pé nípa ìlò èdè, àmì ohùn, àwọn ọ̀rọ̀, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ!',
      inputLabel: 'Tẹ̀ ìbéèrè rẹ síbí:',
      inputPlaceholder: 'Àpẹrẹ, Báwo ni a ṣe ń sọ "hello" ní Yorùbá?',
      buttonText: 'Béèrè lọ́wọ́ Ẹ̀rọ Ọ̀kàn Yorùbá',
      responseTitle: 'Ìdáhùn:',
      savePrompt: 'Fipamọ́ Ìbéèrè',
    },
  };

  return (
    <div className="container mx-auto py-16 px-4 text-center flex">
      {/* Main Content */}
      <div className="w-3/4 pr-4">
        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="mb-8 px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
        >
          {language === 'english' ? 'Switch to Yorùbá' : 'Switch to English'}
        </button>

        {/* Header Section */}
        <Card>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 underline decoration-blue-500">
            {content[language].title}
          </h1>
          <p className="text-lg text-gray-700">{content[language].description}</p>
        </Card>

        {/* Input Section */}
        <Card className="mt-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="userInput" className="block text-lg font-semibold text-gray-800">
              {content[language].inputLabel}
            </label>
            <textarea
              id="userInput"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={content[language].inputPlaceholder}
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              disabled={!userInput || isLoading}
              className={`px-6 py-3 text-white rounded-md font-semibold ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {isLoading ? (language === 'english' ? 'Processing...' : 'Ṣíṣe...') : content[language].buttonText}
            </button>
          </form>
        </Card>

        {/* Response Section */}
        {response && (
          <Card className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {content[language].responseTitle}
            </h2>
            <p className="text-lg text-gray-700">{response}</p>
          </Card>
        )}
      </div>

      {/* Sidebar for Previous Prompts */}
      <div className="w-1/4 pl-4">
        <Card>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Previous Prompts</h2>
          <ul className="space-y-2">
            {previousPrompts.map((prompt, index) => (
              <li key={index} className="flex items-center justify-between p-2 border-b">
                <span>{prompt}</span>
                <button 
                  onClick={() => setUserInput(prompt)} 
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaRegSave />
                </button>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default YorubaAIPage;