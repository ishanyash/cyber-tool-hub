
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft, ExternalLink, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { getTool } from '@/services/toolsService';

const ToolDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const { data: tool, isLoading, error } = useQuery({
    queryKey: ['tool', id],
    queryFn: async () => {
      if (!id) throw new Error('Tool ID is required');
      return getTool(id);
    }
  });
  
  React.useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to load tool details',
        variant: 'destructive'
      });
    }
  }, [error, toast]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-cyber-dark flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyber-neon-blue"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!tool) {
    return (
      <div className="min-h-screen bg-cyber-dark flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-white mb-4">Tool not found</h2>
            <Link to="/tools">
              <Button variant="outline" className="border-cyber-neon-blue text-cyber-neon-blue">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tools
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-cyber-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-6">
            <Link to="/tools">
              <Button variant="ghost" className="text-cyber-neon-blue">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tools
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="relative rounded-lg overflow-hidden h-96 mb-6">
                <img 
                  src={tool.imageUrl} 
                  alt={tool.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent"></div>
                
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <Badge className="bg-cyber-neon-blue text-cyber-dark">
                    {tool.category}
                  </Badge>
                  {tool.isPaid ? (
                    <Badge variant="outline" className="border-cyber-neon-pink text-cyber-neon-pink">
                      Paid
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-cyber-neon-blue text-cyber-neon-blue">
                      Free
                    </Badge>
                  )}
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 text-white hover:text-cyber-neon-pink bg-black bg-opacity-50 rounded-full h-8 w-8"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <h1 className="text-4xl font-bold cyber-text mb-4">{tool.name}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < tool.rating ? 'text-cyber-neon-blue fill-cyber-neon-blue' : 'text-gray-500'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-400">{tool.rating.toFixed(1)}</span>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-300 whitespace-pre-line">{tool.description}</p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-cyber-dark-lighter p-6 rounded-lg border border-cyber-neon-blue/30">
                <h3 className="text-xl font-bold mb-4">Tool Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 mb-1">Category</p>
                    <p className="font-medium">{tool.category}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 mb-1">Pricing</p>
                    <p className="font-medium">{tool.isPaid ? 'Paid' : 'Free'}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 mb-1">Added on</p>
                    <p className="font-medium">
                      {tool.createdAt && new Date(tool.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full bg-cyber-neon-blue hover:bg-cyber-neon-blue/80 text-cyber-dark">
                      Visit Tool <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolDetail;
