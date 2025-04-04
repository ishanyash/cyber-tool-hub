
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Image, 
  MessageSquare, 
  Code, 
  Mic, 
  Video, 
  Building2, 
  Lightbulb, 
  FileText, 
  Music, 
  Pen 
} from 'lucide-react';

const categories = [
  { name: 'Text to Image', icon: Image, count: 124, color: 'cyber-neon-blue', slug: 'text-to-image' },
  { name: 'Chatbots', icon: MessageSquare, count: 98, color: 'cyber-neon-pink', slug: 'chatbots' },
  { name: 'Code Generation', icon: Code, count: 76, color: 'cyber-neon-purple', slug: 'code-generation' },
  { name: 'Voice & Audio', icon: Mic, count: 82, color: 'cyber-neon-blue', slug: 'voice-audio' },
  { name: 'Video Creation', icon: Video, count: 65, color: 'cyber-neon-pink', slug: 'video-creation' },
  { name: '3D & Architecture', icon: Building2, count: 47, color: 'cyber-neon-purple', slug: '3d-architecture' },
  { name: 'AI Research', icon: Lightbulb, count: 54, color: 'cyber-neon-blue', slug: 'ai-research' },
  { name: 'Document Analysis', icon: FileText, count: 39, color: 'cyber-neon-pink', slug: 'document-analysis' },
  { name: 'Music Generation', icon: Music, count: 28, color: 'cyber-neon-purple', slug: 'music-generation' },
  { name: 'Writing & Content', icon: Pen, count: 91, color: 'cyber-neon-blue', slug: 'writing-content' },
];

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold cyber-text">Browse by Category</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Explore our cybernetic collection of AI tools organized by specialized function and technology
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={`/tools?category=${category.slug}`} 
              className="cyber-card p-4 flex flex-col items-center justify-center hover:border-cyber-neon-pink transition-colors text-center group"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-${category.color}/10 text-${category.color}`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-medium text-white mb-1 group-hover:text-cyber-neon-pink transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-400">{category.count} tools</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/tools">
            <Button className="bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple text-white hover:bg-none hover:bg-cyber-neon-blue">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
