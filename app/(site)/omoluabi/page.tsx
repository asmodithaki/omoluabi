import HeroSection from "@/components/pages/main-page/home-main/function";
import AboutUsSection from "@/components/pages/main-page/who-we-are/function";
import MissionStatement from "@/components/pages/main-page/mission-statement/function";
import CommunityProjects from "@/components/pages/main-page/community/function";

export default function Page() {
  return (
    <div className="bg-gray-100 dark:bg-gray-400 text-black dark:text-white">
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

      {/* Community Projects Section with spacing */}
      <section className="mb-20">
        <CommunityProjects />
      </section>
    </div>
  );
}
