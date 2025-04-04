
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';

const NavbarAuthButtons = () => {
  const { user, signOut } = useAuth();

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400 hidden md:inline">
          {user.email}
        </span>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-cyber-neon-pink hover:text-white hover:bg-cyber-neon-pink/20"
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Link to="/auth">
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-cyber-neon-blue hover:text-white hover:bg-cyber-neon-blue/20"
      >
        Login / Signup
      </Button>
    </Link>
  );
};

export default NavbarAuthButtons;
