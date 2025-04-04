import { useState } from 'react'

export function Sponsorship() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          Sponsorship Opportunities
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Promote your AI tools and reach thousands of tech enthusiasts, developers, and content creators.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Why Sponsor With Us?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">✓</span>
              <span>Reach a targeted audience of AI enthusiasts and professionals</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">✓</span>
              <span>Increase visibility for your AI tools and services</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">✓</span>
              <span>Connect with potential customers and partners</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">✓</span>
              <span>Support the AI community and innovation</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Sponsorship Packages</h2>
          <div className="space-y-4">
            <div className="border border-gray-700 p-4 rounded-md">
              <h3 className="text-lg font-medium">Featured Tool</h3>
              <p className="text-gray-300 text-sm mt-1">Highlight your AI tool on our homepage and directory</p>
              <div className="mt-2 text-indigo-400">Starting at $299/month</div>
            </div>
            <div className="border border-gray-700 p-4 rounded-md">
              <h3 className="text-lg font-medium">Webinar Sponsor</h3>
              <p className="text-gray-300 text-sm mt-1">Sponsor one of our expert-led webinars</p>
              <div className="mt-2 text-indigo-400">Starting at $499/event</div>
            </div>
            <div className="border border-gray-700 p-4 rounded-md">
              <h3 className="text-lg font-medium">Community Partner</h3>
              <p className="text-gray-300 text-sm mt-1">Become a trusted partner of our community</p>
              <div className="mt-2 text-indigo-400">Custom pricing</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Interested in Sponsoring?</h2>
        <p className="text-gray-300 text-center mb-6">
          Fill out the form below and our team will get back to you with more details.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  )
} 