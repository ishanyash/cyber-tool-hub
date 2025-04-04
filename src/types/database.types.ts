export type UserProfile = {
  id: string
  username: string | null
  full_name: string | null
  avatar_url: string | null
  bio: string | null
  website: string | null
  created_at: string
  updated_at: string
}

export type Tool = {
  id: string
  name: string
  description: string
  category: 'Network Security' | 'Web Security' | 'Cryptography' | 'Forensics' | 'Malware Analysis' | 'Penetration Testing' | 'Other'
  website_url: string | null
  github_url: string | null
  documentation_url: string | null
  image_url: string | null
  created_by: string | null
  created_at: string
  updated_at: string
}

export type ToolRating = {
  id: string
  tool_id: string
  user_id: string
  rating: number
  comment: string | null
  created_at: string
  updated_at: string
}

export type ForumCategory = {
  id: string
  name: string
  description: string | null
  created_at: string
}

export type ForumPost = {
  id: string
  title: string
  content: string
  category_id: string | null
  author_id: string | null
  created_at: string
  updated_at: string
}

export type ForumComment = {
  id: string
  content: string
  post_id: string
  author_id: string | null
  parent_comment_id: string | null
  created_at: string
  updated_at: string
} 