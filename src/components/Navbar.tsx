
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import NavbarAuthButtons from './NavbarAuthButtons';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyber-neon-blue/20 backdrop-blur-lg bg-black/50">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-cyber-neon-blue animate-glow flex items-center justify-center">
              <span className="font-bold text-cyber-dark">CH</span>
            </div>
            <span className="text-xl font-bold tracking-wider cyber-text">CYBER HUB</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="neon-link">Home</Link>
          <Link to="/tools" className="neon-link">Tools</Link>
          <Link to="/forum" className="neon-link">Forum</Link>
          <Link to="/webinars" className="neon-link">Webinars</Link>
          <Link to="/about" className="neon-link">About</Link>
          <div className="relative group">
            <button className="neon-link flex items-center gap-1">
              More <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-cyber-dark-blue border border-cyber-neon-blue hidden group-hover:block">
              <Link to="/tools" className="block px-4 py-2 hover:bg-cyber-grid text-sm">Categories</Link>
              <Link to="/add-tool" className="block px-4 py-2 hover:bg-cyber-grid text-sm">Submit Tool</Link>
              <Link to="/about" className="block px-4 py-2 hover:bg-cyber-grid text-sm">Sponsors</Link>
            </div>
          </div>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="border-cyber-neon-blue text-cyber-neon-blue">
            <Search className="h-5 w-5" />
          </Button>
          <NavbarAuthButtons />
          <Button variant="outline" size="icon" className="md:hidden border-cyber-neon-blue text-cyber-neon-blue">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
