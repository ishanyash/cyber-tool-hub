
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from 'lucide-react';

const WebinarSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold cyber-text">Featured Webinar</h2>
            <p className="text-gray-400 mt-2">Watch and learn from AI experts in our cyberpunk studio</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-transparent border border-cyber-neon-pink text-cyber-neon-pink hover:bg-cyber-neon-pink hover:text-cyber-dark">
            View All Webinars
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* YouTube video embed */}
          <div className="lg:col-span-2 cyber-border">
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/KcCnqLBhvXY"
                title="AI Webinar" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
          
          {/* Webinar info */}
          <div className="cyber-card p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">The Future of AI Tools in 2025</h3>
            <p className="text-gray-300 mb-6">An in-depth exploration of emerging AI technologies and their practical applications for creators, developers, and businesses.</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-cyber-neon-blue" />
                <span className="text-gray-300">April 15, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-cyber-neon-blue" />
                <span className="text-gray-300">60 minutes</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-3 text-cyber-neon-blue" />
                <span className="text-gray-300">2,547 viewers</span>
              </div>
            </div>
            
            <div className="border-t border-cyber-neon-blue/20 pt-6 mt-auto">
              <h4 className="text-lg font-semibold text-white mb-2">Featured Speakers:</h4>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-cyber-neon-blue/20 flex items-center justify-center mr-3">
                  <span className="text-cyber-neon-blue font-bold">DR</span>
                </div>
                <div>
                  <p className="text-white font-medium">Dr. Ray Chen</p>
                  <p className="text-gray-400 text-sm">AI Research Director, NeoCorp</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-cyber-neon-pink/20 flex items-center justify-center mr-3">
                  <span className="text-cyber-neon-pink font-bold">SL</span>
                </div>
                <div>
                  <p className="text-white font-medium">Sarah Lee</p>
                  <p className="text-gray-400 text-sm">Tech Futurist, SynthWave Institute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;
