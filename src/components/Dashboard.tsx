import { useAuth } from '../contexts/AuthContext'

export function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="space-y-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user?.email}</h2>
        <p className="text-gray-300">
          This is your personal dashboard where you can manage your profile, view your activity, and access your saved tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">Your Activity</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Forum Posts</span>
              <span className="text-indigo-400">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Comments</span>
              <span className="text-indigo-400">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Saved Tools</span>
              <span className="text-indigo-400">0</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
              Create Forum Post
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
              Browse Tools
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
              View Webinars
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-indigo-400">Recent Activity</h3>
        <div className="text-gray-300 text-center py-8">
          <p>You haven't had any recent activity yet.</p>
          <p className="mt-2">Start exploring the platform to see your activity here!</p>
        </div>
      </div>
    </div>
  )
} 