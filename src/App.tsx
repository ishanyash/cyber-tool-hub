
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { SupabaseProvider } from './contexts/SupabaseContext'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { SignInForm } from './components/auth/SignInForm'
import { SignUpForm } from './components/auth/SignUpForm'
import { Dashboard } from './components/Dashboard'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import { Forum } from './components/Forum'
import { Webinars } from './components/Webinars'
import { Sponsorship } from './components/Sponsorship'
import { TestSupabase } from './pages/TestSupabase'

function App() {
  return (
    <SupabaseProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignInForm />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/test-supabase" element={<TestSupabase />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/forum" element={<Forum />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/sponsorship" element={<Sponsorship />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </SupabaseProvider>
  )
}

export default App
