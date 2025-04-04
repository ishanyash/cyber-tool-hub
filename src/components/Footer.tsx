
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-cyber-neon-blue/20 pt-10 pb-16 bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyber-neon-blue animate-glow flex items-center justify-center">
                <span className="font-bold text-cyber-dark">CH</span>
              </div>
              <span className="text-xl font-bold tracking-wider cyber-text">CYBER HUB</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your gateway to the future of AI tools in a cyberpunk reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyber-neon-blue hover:text-cyber-neon-pink transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-cyber-neon-blue hover:text-cyber-neon-pink transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cyber-neon-blue hover:text-cyber-neon-pink transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cyber-neon-blue hover:text-cyber-neon-pink transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-cyber-neon-blue font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Home</Link></li>
              <li><Link to="/tools" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">AI Tools</Link></li>
              <li><Link to="/forum" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Forum</Link></li>
              <li><Link to="/webinars" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Webinars</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-cyber-neon-blue font-bold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/text-to-image" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Text to Image</Link></li>
              <li><Link to="/category/chatbots" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Chatbots</Link></li>
              <li><Link to="/category/code-generation" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Code Generation</Link></li>
              <li><Link to="/category/audio-generation" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Audio Generation</Link></li>
              <li><Link to="/category/video-creation" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Video Creation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-cyber-neon-blue font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">contact@cyberhub.ai</li>
              <li className="text-gray-400">Submit a tool</li>
              <li className="text-gray-400">Advertise with us</li>
              <li className="text-gray-400">Partnership inquiries</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-cyber-neon-blue/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Cyber Hub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-cyber-neon-blue transition-colors text-sm">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-cyber-neon-blue transition-colors text-sm">Privacy</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-cyber-neon-blue transition-colors text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
