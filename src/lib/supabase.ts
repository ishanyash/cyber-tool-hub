import { createClient } from '@supabase/supabase-js'
import type { UserProfile, Tool, ToolRating, ForumCategory, ForumPost, ForumComment } from '../types/database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helper functions
export const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: email.split('@')[0], // Create a default username from email
          full_name: '',
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

// Profile helper functions
export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return { data: data as UserProfile | null, error }
}

export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>) => {
  const { data, error } = await supabase
    .from('user_profiles')
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
