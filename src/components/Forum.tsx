
import { useState } from 'react'
import { useSupabase } from '../contexts/SupabaseContext'

// Mock data for forum topics
const mockTopics = [
  {
    id: 1,
    title: 'Best AI tools for content creation',
    author: 'techEnthusiast',
    replies: 12,
    views: 245,
    lastActivity: '2 hours ago',
    category: 'Content Creation'
  },
  {
    id: 2,
    title: 'How to integrate ChatGPT with your workflow',
    author: 'productivityGuru',
    replies: 8,
    views: 189,
    lastActivity: '5 hours ago',
    category: 'Productivity'
  },
  {
    id: 3,
    title: 'New AI image generation tools comparison',
    author: 'designerPro',
    replies: 15,
    views: 312,
    lastActivity: '1 day ago',
    category: 'Design'
  },
  {
    id: 4,
    title: 'AI coding assistants: Which one to choose?',
    author: 'codeMaster',
    replies: 10,
    views: 276,
    lastActivity: '2 days ago',
    category: 'Development'
  }
]

export function Forum() {
  const { user } = useSupabase()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Content Creation', 'Productivity', 'Design', 'Development']

  const filteredTopics = mockTopics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Forum</h1>
        {user && (
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
            Create New Topic
          </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
          />
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-md ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-700 text-sm font-medium">
          <div className="col-span-6">Topic</div>
          <div className="col-span-2 text-center">Replies</div>
          <div className="col-span-2 text-center">Views</div>
          <div className="col-span-2 text-center">Last Activity</div>
        </div>
        
        {filteredTopics.length > 0 ? (
          filteredTopics.map(topic => (
            <div key={topic.id} className="grid grid-cols-12 gap-4 p-4 border-t border-gray-700 hover:bg-gray-700">
              <div className="col-span-6">
                <div className="font-medium">{topic.title}</div>
                <div className="text-sm text-gray-400">
                  by {topic.author} in {topic.category}
                </div>
              </div>
              <div className="col-span-2 text-center">{topic.replies}</div>
              <div className="col-span-2 text-center">{topic.views}</div>
              <div className="col-span-2 text-center text-gray-400">{topic.lastActivity}</div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-400">
            No topics found matching your criteria.
          </div>
        )}
      </div>
    </div>
  )
}
