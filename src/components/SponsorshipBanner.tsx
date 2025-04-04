
import React from 'react';
import { Button } from "@/components/ui/button";

const SponsorshipBanner = () => {
  return (
    <div className="w-full relative overflow-hidden py-6 my-12">
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-glow bg-[length:200%_100%] animate-data-flow"></div>
      
      {/* Inner content with glitch effect */}
      <div className="absolute inset-[2px] bg-cyber-dark-blue flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold cyber-text tracking-wide">SPONSORSHIP IS AVAILABLE HERE</h3>
            <p className="text-gray-300 mt-2">Promote your AI tool to our cyberpunk community</p>
          </div>
          
          <div className="flex gap-4">
            <Button className="bg-cyber-neon-blue text-cyber-dark hover:bg-cyber-neon-pink">
              Learn More
            </Button>
            <Button variant="outline" className="border-cyber-neon-blue text-cyber-neon-blue hover:bg-cyber-neon-blue hover:text-cyber-dark">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipBanner;
