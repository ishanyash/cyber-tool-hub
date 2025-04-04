import { createClient } from '@supabase/supabase-js'
import type { UserProfile, Tool, ToolRating, ForumCategory, ForumPost, ForumComment } from '../types/database.types'

// Log environment variables (without revealing full key)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key Available:', !!supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables')
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Debug auth state
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Supabase Auth Event:', event, session ? 'Session exists' : 'No session')
})

// Auth helper functions
export const signUp = async (email: string, password: string) => {
  try {
    console.log('Signing up with email:', email)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: email.split('@')[0], // Create a default username from email
          avatar_url: null
        }
      }
    })
    
    if (error) {
      console.error('Signup error:', error)
      return { error }
    }

    // Check if the user was created successfully
    if (!data.user) {
      console.error('No user data returned')
      return { error: new Error('No user data returned') }
    }

    console.log('Signup successful, user created:', data.user.id)
    return { data, error: null }
  } catch (err) {
    console.error('Signup error:', err)
    return { error: err }
  }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      }
    }
  })
  return { data, error }
}

// Profile helper functions
export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return { data: data as UserProfile | null, error }
}

export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()
  return { data: data as UserProfile | null, error }
}

// Tool helper functions
export const getTools = async () => {
  const { data, error } = await supabase
    .from('tools')
    .select('*, tool_ratings(*)')
  return { data: data as (Tool & { tool_ratings: ToolRating[] })[] | null, error }
}

export const createTool = async (tool: Omit<Tool, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('tools')
    .insert(tool)
    .select()
    .single()
  return { data: data as Tool | null, error }
}

// Forum helper functions
export const getForumCategories = async () => {
  const { data, error } = await supabase
    .from('forum_categories')
    .select('*')
  return { data: data as ForumCategory[] | null, error }
}

export const getForumPosts = async (categoryId?: string) => {
  let query = supabase
    .from('forum_posts')
    .select('*, user_profiles!inner(*)')
  
  if (categoryId) {
    query = query.eq('category_id', categoryId)
  }
  
  const { data, error } = await query
  return { data: data as (ForumPost & { user_profiles: UserProfile })[] | null, error }
}

export const createForumPost = async (post: Omit<ForumPost, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('forum_posts')
    .insert(post)
    .select()
    .single()
  return { data: data as ForumPost | null, error }
}
