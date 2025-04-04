import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 cyber-grid z-0"></div>
      
      {/* Radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyber-neon-blue/10 blur-[100px] rounded-full z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 cyber-text tracking-tight">
            Discover the Future of AI Tools
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Your cyberpunk gateway to the most advanced AI technologies.
            Explore, compare, and find the perfect tool for your digital needs.
          </p>
          
          <div className="relative max-w-2xl mx-auto mb-10 cyber-border">
            <Input 
              type="text" 
              placeholder="Search AI tools..." 
              className="pl-12 h-14 bg-black bg-opacity-60 border-none text-white" 
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyber-neon-blue w-5 h-5" />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-12 bg-cyber-neon-blue text-cyber-dark hover:bg-cyber-neon-pink">
              Search
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/tools">
              <Button className="bg-transparent border border-cyber-neon-blue text-cyber-neon-blue hover:bg-cyber-neon-blue hover:text-cyber-dark">
                Popular Tools
              </Button>
            </Link>
            <Link to="/tools">
              <Button className="bg-transparent border border-cyber-neon-pink text-cyber-neon-pink hover:bg-cyber-neon-pink hover:text-cyber-dark">
                Latest Tools
              </Button>
            </Link>
            <Link to="/add-tool">
              <Button className="bg-transparent border border-cyber-neon-purple text-cyber-neon-purple hover:bg-cyber-neon-purple hover:text-white">
                Submit a Tool
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyber-neon-blue rounded-full mr-2 animate-pulse"></div>
              <span className="text-gray-300">1000+ Tools</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyber-neon-pink rounded-full mr-2 animate-pulse"></div>
              <span className="text-gray-300">50+ Categories</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-cyber-neon-purple rounded-full mr-2 animate-pulse"></div>
              <span className="text-gray-300">Weekly Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
