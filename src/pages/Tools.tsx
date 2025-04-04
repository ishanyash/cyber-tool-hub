
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolsGrid from '@/components/ToolsGrid';
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { getTools, getToolsByCategory } from '@/services/toolsService';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Tools = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  
  // Format the category name for display
  const formatCategoryName = (slug) => {
    if (!slug) return '';
    
    // Convert slug to display name
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const { data: tools, isLoading, error } = useQuery({
    queryKey: ['tools', categoryParam],
    queryFn: () => categoryParam ? getToolsByCategory(categoryParam) : getTools(),
  });
  
  useEffect(() => {
    // Check if we're coming from a successful tool submission
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      toast({
        title: "Tool Added",
        description: "Your tool has been added successfully",
      });
      // Clean URL to prevent showing the toast again on refresh
      window.history.replaceState({}, '', '/tools');
    }
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-cyber-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          {categoryParam ? (
            <>
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="text-cyber-neon-blue">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/tools" className="text-cyber-neon-blue">Tools</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <span className="text-white">{formatCategoryName(categoryParam)}</span>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-4xl font-bold cyber-text">{formatCategoryName(categoryParam)} Tools</h1>
                  <p className="text-gray-400 mt-2">Explore our curated collection of {formatCategoryName(categoryParam).toLowerCase()} AI tools</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold cyber-text">AI Tools Collection</h1>
                <p className="text-gray-400 mt-2">Explore our curated collection of cutting-edge AI tools</p>
              </div>
            </div>
          )}
          
          {user && (
            <div className="mb-8 flex justify-end">
              <Link to="/add-tool">
                <Button className="bg-cyber-neon-blue hover:bg-cyber-neon-blue/80 text-black">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Tool
                </Button>
              </Link>
            </div>
          )}
          
          <ToolsGrid initialFilter={categoryParam ? 'all' : 'all'} categoryFilter={categoryParam} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
