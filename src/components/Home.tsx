import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          Cyber Tool Hub
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover and discuss the latest AI tools in our Blade Runner-inspired platform.
          Join our community to share insights and stay updated with the cutting-edge of technology.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/signup" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium"
          >
            Get Started
          </Link>
          <Link 
            to="/forum" 
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium"
          >
            Explore Forum
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-indigo-400">AI Tool Directory</h3>
          <p className="text-gray-300">
            Browse our curated collection of AI tools, each with detailed descriptions and user reviews.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-indigo-400">Community Forum</h3>
          <p className="text-gray-300">
            Join discussions about AI tools, share your experiences, and connect with other tech enthusiasts.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-indigo-400">Expert Webinars</h3>
          <p className="text-gray-300">
            Learn from industry experts through our regular webinars on the latest AI technologies and tools.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to explore the future of AI?</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Join our community today and get access to exclusive content, discussions, and more.
        </p>
        <Link 
          to="/signup" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium inline-block"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  )
} 