import { useState } from 'react'

// Mock data for webinars
const mockWebinars = [
  {
    id: 1,
    title: 'Introduction to AI Tools for Beginners',
    description: 'Learn the basics of AI tools and how they can enhance your productivity.',
    date: 'June 15, 2023',
    duration: '60 minutes',
    youtubeId: 'KcCnqLBhvXY',
    speaker: 'Dr. Sarah Johnson',
    category: 'Getting Started'
  },
  {
    id: 2,
    title: 'Advanced Prompt Engineering Techniques',
    description: 'Master the art of crafting effective prompts for AI language models.',
    date: 'July 22, 2023',
    duration: '90 minutes',
    youtubeId: 'KcCnqLBhvXY',
    speaker: 'Alex Chen',
    category: 'Advanced Topics'
  },
  {
    id: 3,
    title: 'AI Tools for Content Creators',
    description: 'Discover how AI can streamline your content creation workflow.',
    date: 'August 10, 2023',
    duration: '75 minutes',
    youtubeId: 'KcCnqLBhvXY',
    speaker: 'Maria Rodriguez',
    category: 'Content Creation'
  }
]

export function Webinars() {
  const [selectedWebinar, setSelectedWebinar] = useState(mockWebinars[0])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Getting Started', 'Advanced Topics', 'Content Creation']

  const filteredWebinars = mockWebinars.filter(webinar => 
    selectedCategory === 'All' || webinar.category === selectedCategory
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Webinars</h1>
        <p className="text-gray-300">
          Watch expert-led webinars on AI tools and technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedWebinar.youtubeId}`}
              title={selectedWebinar.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="mt-4 bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{selectedWebinar.title}</h2>
            <p className="text-gray-300 mb-4">{selectedWebinar.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div>
                <span className="font-medium">Date:</span> {selectedWebinar.date}
              </div>
              <div>
                <span className="font-medium">Duration:</span> {selectedWebinar.duration}
              </div>
              <div>
                <span className="font-medium">Speaker:</span> {selectedWebinar.speaker}
              </div>
              <div>
                <span className="font-medium">Category:</span> {selectedWebinar.category}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-md ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Upcoming Webinars</h3>
            <div className="space-y-3">
              {filteredWebinars.map(webinar => (
                <div
                  key={webinar.id}
                  onClick={() => setSelectedWebinar(webinar)}
                  className={`p-3 rounded-md cursor-pointer ${
                    selectedWebinar.id === webinar.id
                      ? 'bg-indigo-600'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <h4 className="font-medium">{webinar.title}</h4>
                  <div className="text-sm text-gray-300 mt-1">
                    {webinar.date} • {webinar.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 