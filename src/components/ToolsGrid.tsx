
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ToolCard from './ToolCard';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { getTools, getFeaturedTools, Tool } from '@/services/toolsService';
import { useToast } from '@/components/ui/use-toast';

const ToolsGrid = () => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'new'>('all');
  const [displayCount, setDisplayCount] = useState(6);
  const { toast } = useToast();
  
  const { 
    data: tools, 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    queryKey: ['tools', filter],
    queryFn: () => filter === 'featured' ? getFeaturedTools() : getTools(),
  });
  
  useEffect(() => {
    if (isError && error instanceof Error) {
      toast({
        title: "Failed to load tools",
        description: error.message,
        variant: "destructive"
      });
    }
  }, [isError, error, toast]);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  const filterTools = (toolsList: Tool[] | undefined): Tool[] => {
    if (!toolsList) return [];
    
    if (filter === 'new') {
      // Sort by creation date for new tools
      return [...toolsList].sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        return 0;
      });
    }
    
    return toolsList;
  };
  
  const displayTools = filterTools(tools)?.slice(0, displayCount) || [];
  const hasMore = tools ? displayTools.length < tools.length : false;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold cyber-text">Popular AI Tools</h2>
            <p className="text-gray-400 mt-2">Discover trending AI tools in our cyberpunk collection</p>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className={`border-cyber-neon-blue ${filter === 'all' ? 'bg-cyber-neon-blue/20 text-white' : 'text-cyber-neon-blue'}`}
              onClick={() => setFilter('all')}
            >
              All Tools
            </Button>
            <Button 
              variant="outline" 
              className={`border-cyber-neon-pink ${filter === 'featured' ? 'bg-cyber-neon-pink/20 text-white' : 'text-cyber-neon-pink'}`}
              onClick={() => setFilter('featured')}
            >
              Featured
            </Button>
            <Button 
              variant="outline" 
              className={`border-cyber-neon-purple ${filter === 'new' ? 'bg-cyber-neon-purple/20 text-white' : 'text-cyber-neon-purple'}`}
              onClick={() => setFilter('new')}
            >
              New
            </Button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="cyber-card h-72 animate-pulse bg-cyber-dark-lighter"></div>
            ))}
          </div>
        ) : displayTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTools.map((tool) => (
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
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400">No tools found. Check back later!</p>
          </div>
        )}
        
        {hasMore && (
          <div className="mt-12 text-center">
            <Button 
              className="bg-transparent border border-cyber-neon-blue text-cyber-neon-blue hover:bg-cyber-neon-blue hover:text-cyber-dark"
              onClick={handleLoadMore}
            >
              Load More <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolsGrid;
