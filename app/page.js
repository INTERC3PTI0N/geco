import Hero from "@/components/home/Hero";
import Marquee from "@/components/site/Marquee";
import ValueProps from "@/components/home/ValueProps";
import FeaturedCatalogue from "@/components/home/FeaturedCatalogue";
import Heritage from "@/components/home/Heritage";
import AchievementsTeaser from "@/components/home/AchievementsTeaser";
import GlobalReach from "@/components/home/GlobalReach";
import CTA from "@/components/site/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ValueProps />
      <FeaturedCatalogue />
      <Heritage />
      <AchievementsTeaser />
      <GlobalReach />
      <CTA />
    </>
  );
}
