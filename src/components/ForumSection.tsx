
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, ArrowRight, Sparkles, Star, TrendingUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const MOCK_FORUMS = [
  {
    id: '1',
    title: 'Text-to-Image Tools',
    description: 'Discuss the latest advancements in AI image generation technologies.',
    posts: 1243,
    members: 4578,
    icon: Sparkles,
    hot: true,
  },
  {
    id: '2',
    title: 'AI Chatbots & Assistants',
    description: 'Share experiences with different AI assistants and language models.',
    posts: 986,
    members: 3245,
    icon: MessageSquare,
    hot: true,
  },
  {
    id: '3',
    title: 'Code Generation',
    description: 'Tips and tricks for getting the most out of AI coding tools.',
    posts: 756,
    members: 2198,
    icon: TrendingUp,
    hot: false,
  },
];

const ForumCard = ({ forum }) => {
  return (
    <Link to={`/forum/${forum.id}`} className="cyber-card p-5 hover:border-cyber-neon-pink transition-colors duration-300 group">
      <div className="flex items-start">
        <div className="bg-cyber-dark-blue p-3 rounded-lg border border-cyber-neon-blue/30 mr-4">
          <forum.icon className="h-6 w-6 text-cyber-neon-blue" />
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-neon-pink transition-colors">
              {forum.title}
            </h3>
            {forum.hot && (
              <Badge className="ml-3 bg-cyber-neon-pink text-white">
                <Star className="h-3 w-3 mr-1 fill-white" /> Hot
              </Badge>
            )}
          </div>
          
          <p className="text-gray-400 mb-4">{forum.description}</p>
          
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center mr-4">
              <MessageSquare className="h-4 w-4 mr-1 text-cyber-neon-blue" />
              <span>{forum.posts.toLocaleString()} posts</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1 text-cyber-neon-blue" />
              <span>{forum.members.toLocaleString()} members</span>
            </div>
          </div>
        </div>
        
        <ArrowRight className="h-5 w-5 text-cyber-neon-blue group-hover:text-cyber-neon-pink transition-colors" />
      </div>
    </Link>
  );
};

const ForumSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold cyber-text">AI Tool Forums</h2>
            <p className="text-gray-400 mt-2">Join discussions about the latest AI tools and technologies</p>
          </div>
          <Link to="/forum">
            <Button className="bg-gradient-blue text-white hover:bg-none hover:bg-cyber-neon-blue hover:text-cyber-dark">
              <Users className="mr-2 h-4 w-4" /> Join Community
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_FORUMS.map((forum) => (
            <ForumCard key={forum.id} forum={forum} />
          ))}
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="cyber-card p-6">
            <h3 className="text-xl font-bold text-cyber-neon-blue mb-4">Trending Topics</h3>
            <ul className="space-y-4">
              <li className="border-b border-cyber-neon-blue/20 pb-3">
                <Link to="/forum" className="text-gray-200 hover:text-cyber-neon-blue transition-colors">
                  What's your favorite AI image generator and why?
                </Link>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="mr-4">Posted by @neon_dreamer</span>
                  <span>32 replies</span>
                </div>
              </li>
              <li className="border-b border-cyber-neon-blue/20 pb-3">
                <Link to="/forum" className="text-gray-200 hover:text-cyber-neon-blue transition-colors">
                  Are AI code generators replacing programmers?
                </Link>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="mr-4">Posted by @digital_phantom</span>
                  <span>78 replies</span>
                </div>
              </li>
              <li>
                <Link to="/forum" className="text-gray-200 hover:text-cyber-neon-blue transition-colors">
                  New Midjourney update: First impressions thread
                </Link>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="mr-4">Posted by @virtual_architect</span>
                  <span>56 replies</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="cyber-card p-6">
            <h3 className="text-xl font-bold text-cyber-neon-pink mb-4">Latest Discussions</h3>
            <ul className="space-y-4">
              <li className="border-b border-cyber-neon-blue/20 pb-3">
                <Link to="/forum" className="text-gray-200 hover:text-cyber-neon-pink transition-colors">
                  Best AI tools for video editing in 2025
                </Link>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="mr-4">2 hours ago</span>
                  <span>12 replies</span>
                </div>
              </li>
              <li className="border-b border-cyber-neon-blue/20 pb-3">
                <Link to="/forum" className="text-gray-200 hover:text-cyber-neon-pink transition-colors">
                  How to fine-tune GPT models for specialized tasks
                </Link>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="mr-4">5 hours ago</span>
                  <span>8 replies</span>
                </div>
              </li>
              <li>
                <Link to="/forum" className="text-gray-200 hover:text-cyber-neon-pink transition-colors">
                  Comparing AI image upscaling tools: results thread
                </Link>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span className="mr-4">Yesterday</span>
                  <span>24 replies</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
