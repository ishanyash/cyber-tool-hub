-- Create forum categories table
CREATE TABLE forum_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create forum posts table
CREATE TABLE forum_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category_id UUID REFERENCES forum_categories(id) ON DELETE SET NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create forum comments table
CREATE TABLE forum_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  post_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  parent_comment_id UUID REFERENCES forum_comments(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS
ALTER TABLE forum_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_comments ENABLE ROW LEVEL SECURITY;

-- Create policies for forum_categories
CREATE POLICY "Anyone can view categories" 
  ON forum_categories FOR SELECT 
  USING (true);

-- Create policies for forum_posts
CREATE POLICY "Anyone can view posts" 
  ON forum_posts FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can create posts" 
  ON forum_posts FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Post authors can update their posts" 
  ON forum_posts FOR UPDATE 
  USING (auth.uid() = author_id);

-- Create policies for forum_comments
CREATE POLICY "Anyone can view comments" 
  ON forum_comments FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can create comments" 
  ON forum_comments FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Comment authors can update their comments" 
  ON forum_comments FOR UPDATE 
  USING (auth.uid() = author_id); 