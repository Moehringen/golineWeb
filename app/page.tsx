export const runtime = 'edge';

import AnnouncementBar from '@/components/sections/AnnouncementBar';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Narrative from '@/components/sections/Narrative';
import Builder from '@/components/sections/Builder';
import MultiLLM from '@/components/sections/MultiLLM';
import Marketplace from '@/components/sections/Marketplace';
import WhyNow from '@/components/sections/WhyNow';
import Slogans from '@/components/sections/Slogans';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import Marquee from '@/components/effects/Marquee';

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Marquee />
      <Narrative />
      <Marquee reverse />
      <Builder />
      <Marquee />
      <MultiLLM />
      <Marquee reverse />
      <Marketplace />
      <WhyNow />
      <Slogans />
      <FinalCTA />
      <Footer />
    </main>
  );
}
