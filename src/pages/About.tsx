
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-cyber-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold cyber-text mb-6">About</h1>
        <p className="text-gray-300">About page coming soon...</p>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
