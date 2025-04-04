
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ToolsGrid from '@/components/ToolsGrid';
import ForumSection from '@/components/ForumSection';
import WebinarSection from '@/components/WebinarSection';
import CategorySection from '@/components/CategorySection';
import SponsorshipBanner from '@/components/SponsorshipBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <SponsorshipBanner />
        <ToolsGrid />
        <div className="relative py-20 overflow-hidden">
          {/* Divider with gradient lines */}
          <div className="container mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-cyber-neon-blue to-transparent"></div>
          </div>
        </div>
        <CategorySection />
        <ForumSection />
        <WebinarSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
