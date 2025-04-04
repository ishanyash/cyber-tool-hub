import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
const SponsorshipBanner = () => {
  return <div className="w-full relative overflow-hidden py-10 my-16">
      {/* Enhanced animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-glow bg-[length:200%_100%] animate-data-flow opacity-80"></div>
      
      {/* Strobe effect line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-cyber-neon-pink animate-pulse"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyber-neon-pink animate-pulse"></div>
      
      {/* Inner content with enhanced glitch effect */}
      <div className="absolute inset-[2px] bg-cyber-dark-blue/90 flex items-center justify-center">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between relative">
          {/* Stylized icon */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 hidden lg:block">
            
          </div>
          
          <div className="mb-6 md:mb-0 relative">
            <span className="absolute -top-6 left-0 text-xs text-cyber-neon-blue tracking-widest">PREMIUM OPPORTUNITY</span>
            <h3 className="text-2xl md:text-4xl font-bold cyber-text tracking-wide">
              <span className="text-cyber-neon-pink">SPONSORSHIP</span> <span className="text-cyber-neon-blue">IS AVAILABLE HERE</span>
            </h3>
            <p className="text-gray-300 mt-2 text-lg">Promote your AI tool to our cyberpunk community</p>
          </div>
          
          <div className="flex gap-4 flex-col sm:flex-row">
            <Button className="bg-cyber-neon-pink text-white hover:bg-cyber-neon-blue hover:text-cyber-dark border border-cyber-neon-pink px-6">
              Learn More
            </Button>
            <Button variant="outline" className="border-cyber-neon-blue text-cyber-neon-blue hover:bg-cyber-neon-blue hover:text-cyber-dark">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyber-neon-pink"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyber-neon-pink"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyber-neon-pink"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyber-neon-pink"></div>
    </div>;
};
export default SponsorshipBanner;