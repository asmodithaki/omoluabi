import { FC } from 'react';
import Head from 'next/head'; // Import Head from next/head
import HeroSection from '@/components/pages/main-page/home-main/function';
import AboutUsSection from '@/components/pages/main-page/who-we-are/function';
import MissionStatement from '@/components/pages/main-page/mission-statement/function';
import CommunityProjects from '@/components/pages/main-page/community/function';

const Home: FC = () => {
  return (
    <div className="bg-gray-100 text-black dark:text-white">
      {/* Metadata for SEO and Social Media */}
      <Head>
        <title>Yorùbá Ronu - Celebrating Yoruba Heritage</title>
        <meta name="description" content="Yorùbá Ronu is dedicated to preserving and promoting the rich culture, history, and values of the Yoruba people." />
        <meta name="keywords" content="Yoruba, culture, heritage, Omoluabi, Yoruba race, Yoruba traditions, Yoruba people" />
        <meta name="author" content="Yorùbá Ronu Movement" />
        <meta property="og:title" content="Yorùbá Ronu - Celebrating Yoruba Heritage" />
        <meta property="og:description" content="Yorùbá Ronu is dedicated to preserving and promoting the rich culture, history, and values of the Yoruba people." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.yorubaronu.org" />
        <meta name="twitter:title" content="Yorùbá Ronu - Celebrating Yoruba Heritage" />
        <meta name="twitter:description" content="Yorùbá Ronu is dedicated to preserving and promoting the rich culture, history, and values of the Yoruba people." />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section with spacing */}
      <section className="mb-20">
        <HeroSection />
      </section>

      {/* About Us Section with spacing */}
      <section className="mb-20">
        <AboutUsSection />
      </section>

      {/* Mission Statement Section with spacing */}
      <section className="mb-20">
        <MissionStatement />
      </section>

      <section className="mb-20">
        <CommunityProjects />
      </section>
    </div>
  );
};

export default Home;
