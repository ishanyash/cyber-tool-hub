
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart, ExternalLink, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
  isPaid: boolean;
}

const ToolCard = ({ id, name, description, imageUrl, category, rating, isPaid }: ToolCardProps) => {
  return (
    <div className="cyber-card group h-full flex flex-col">
      {/* Card Header with Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent"></div>
        
        {/* Floating badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge className="bg-cyber-neon-blue text-cyber-dark">
            {category}
          </Badge>
          {isPaid ? (
            <Badge variant="outline" className="border-cyber-neon-pink text-cyber-neon-pink">
              Paid
            </Badge>
          ) : (
            <Badge variant="outline" className="border-cyber-neon-blue text-cyber-neon-blue">
              Free
            </Badge>
          )}
        </div>
        
        {/* Like button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 text-white hover:text-cyber-neon-pink bg-black bg-opacity-50 rounded-full h-8 w-8"
        >
          <Heart className="h-4 w-4" />
        </Button>
        
        {/* Tool name */}
        <h3 className="absolute bottom-3 left-3 text-xl font-bold text-white">{name}</h3>
      </div>
      
      {/* Card Content */}
      <div className="p-4 flex-grow flex flex-col">
        <p className="text-gray-300 mb-4 flex-grow line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < rating ? 'text-cyber-neon-blue fill-cyber-neon-blue' : 'text-gray-500'}`} 
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-400">{rating.toFixed(1)}</span>
          </div>
          
          <Link to={`/tool/${id}`}>
            <Button size="sm" variant="ghost" className="text-cyber-neon-blue hover:text-white">
              View <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
