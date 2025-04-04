
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolsGrid from '@/components/ToolsGrid';
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Tools = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-cyber-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold cyber-text">AI Tools Collection</h1>
              <p className="text-gray-400 mt-2">Explore our curated collection of cutting-edge AI tools</p>
            </div>
            
            {user && (
              <Link to="/add-tool">
                <Button className="bg-cyber-neon-blue hover:bg-cyber-neon-blue/80 text-black">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Tool
                </Button>
              </Link>
            )}
          </div>
          
          <ToolsGrid />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
