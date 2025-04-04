import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { useSupabase } from '../contexts/SupabaseContext';

const NavbarAuthButtons = () => {
  const { user, signOut } = useSupabase();

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
    <div className="flex items-center gap-2">
      <Link to="/signin">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-cyber-neon-blue hover:text-white hover:bg-cyber-neon-blue/20"
        >
          Login
        </Button>
      </Link>
      <Link to="/signup">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-cyber-neon-pink hover:text-white hover:bg-cyber-neon-pink/20"
        >
          Signup
        </Button>
      </Link>
    </div>
  );
};

export default NavbarAuthButtons;
