import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function TestSupabase() {
  const [connectionStatus, setConnectionStatus] = useState<'testing' | 'success' | 'error'>('testing')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [sessionInfo, setSessionInfo] = useState<any>(null)
  const [envVars, setEnvVars] = useState<any>({})

  useEffect(() => {
    async function testConnection() {
      try {
        // Test basic Supabase connection with a simple query
        const { data, error } = await supabase.from('user_profiles').select('count(*)').limit(1)
        
        if (error) {
          console.error('Supabase connection error:', error)
          setErrorMessage(error.message)
          setConnectionStatus('error')
          return
        }
        
        // Get current session
        const { data: { session } } = await supabase.auth.getSession()
        setSessionInfo(session)
        
        // Connection is good
        setConnectionStatus('success')
      } catch (error: any) {
        console.error('Supabase test error:', error)
        setErrorMessage(error.message)
        setConnectionStatus('error')
      }
    }
    
    // Check environment variables (safely)
    setEnvVars({
      SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
      SUPABASE_KEY_EXISTS: !!import.meta.env.VITE_SUPABASE_ANON_KEY,
      SITE_URL: import.meta.env.VITE_SITE_URL,
      LOCAL_URL: import.meta.env.VITE_LOCAL_URL,
    })
    
    testConnection()
  }, [])

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg my-8">
      <h1 className="text-2xl font-bold mb-6 text-white">Supabase Connection Test</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">Connection Status</h2>
        <div className="p-4 rounded-md bg-gray-700">
          {connectionStatus === 'testing' && (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-indigo-500 mr-3"></div>
              <span className="text-gray-200">Testing connection...</span>
            </div>
          )}
          
          {connectionStatus === 'success' && (
            <div className="text-green-400 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Connected to Supabase successfully
            </div>
          )}
          
          {connectionStatus === 'error' && (
            <div>
              <div className="text-red-400 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Connection to Supabase failed
              </div>
              {errorMessage && (
                <div className="mt-2 text-red-300 bg-red-900 p-2 rounded text-sm">
                  {errorMessage}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">Environment Variables</h2>
        <div className="p-4 rounded-md bg-gray-700 text-gray-200 text-sm font-mono">
          <pre>{JSON.stringify(envVars, null, 2)}</pre>
        </div>
      </div>
      
      {sessionInfo && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-white">Session Information</h2>
          <div className="p-4 rounded-md bg-gray-700 text-gray-200 text-sm font-mono">
            <pre>{JSON.stringify({
              user: sessionInfo.user ? {
                id: sessionInfo.user.id,
                email: sessionInfo.user.email,
                role: sessionInfo.user.role,
                lastSignIn: sessionInfo.user.last_sign_in_at,
              } : null,
              expiresAt: sessionInfo.expires_at,
            }, null, 2)}</pre>
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">Connection Troubleshooting</h2>
        <div className="p-4 rounded-md bg-gray-700 text-gray-200">
          <ul className="list-disc list-inside space-y-2">
            <li>Make sure your Supabase project is active</li>
            <li>Verify that your .env file has the correct VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY</li>
            <li>Check that Row Level Security policies are properly set up</li>
            <li>Verify that the Tables and Triggers exist in your database</li>
            <li>Check browser console for additional error messages</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 