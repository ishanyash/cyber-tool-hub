
import React from 'react';
import ToolCard from './ToolCard';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const MOCK_TOOLS = [
  {
    id: '1',
    name: 'NeonMind AI',
    description: 'Advanced AI assistant with cybernetic neural networks for enhanced cognitive functions.',
    imageUrl: 'https://images.unsplash.com/photo-1634029859957-2ae9bb350bca?q=80&w=1464&auto=format&fit=crop',
    category: 'Assistant',
    rating: 4.8,
    isPaid: false,
  },
  {
    id: '2',
    name: 'PixelDream',
    description: 'Generate stunning cyberpunk-style art with this AI-powered image generator.',
    imageUrl: 'https://images.unsplash.com/photo-1558481795-7f0a7c906f5e?q=80&w=1372&auto=format&fit=crop',
    category: 'Image Generation',
    rating: 4.5,
    isPaid: true,
  },
  {
    id: '3',
    name: 'CodeNexus',
    description: 'AI-powered code generation with futuristic syntax highlighting and error prediction.',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop',
    category: 'Code',
    rating: 4.2,
    isPaid: false,
  },
  {
    id: '4',
    name: 'SynthVoice',
    description: 'Ultra-realistic voice synthesis with emotional tone mapping and ambient sound generation.',
    imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1470&auto=format&fit=crop',
    category: 'Audio',
    rating: 4.7,
    isPaid: true,
  },
  {
    id: '5',
    name: 'DataMatrix',
    description: 'Visualize complex data structures in immersive 3D holographic interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=1469&auto=format&fit=crop',
    category: 'Data',
    rating: 4.3,
    isPaid: true,
  },
  {
    id: '6',
    name: 'NeuroCraft',
    description: 'Design neural networks with intuitive drag-and-drop interfaces and real-time training.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop',
    category: 'Machine Learning',
    rating: 4.6,
    isPaid: false,
  },
];

const ToolsGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold cyber-text">Popular AI Tools</h2>
            <p className="text-gray-400 mt-2">Discover trending AI tools in our cyberpunk collection</p>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <Button variant="outline" className="border-cyber-neon-blue text-cyber-neon-blue">
              All Tools
            </Button>
            <Button variant="outline" className="border-cyber-neon-pink text-cyber-neon-pink">
              Featured
            </Button>
            <Button variant="outline" className="border-cyber-neon-purple text-cyber-neon-purple">
              New
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_TOOLS.map((tool) => (
            <ToolCard
              key={tool.id}
              id={tool.id}
              name={tool.name}
              description={tool.description}
              imageUrl={tool.imageUrl}
              category={tool.category}
              rating={tool.rating}
              isPaid={tool.isPaid}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-transparent border border-cyber-neon-blue text-cyber-neon-blue hover:bg-cyber-neon-blue hover:text-cyber-dark">
            Load More <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
