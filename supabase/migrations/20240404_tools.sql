-- Create tools categories enum
CREATE TYPE tool_category AS ENUM (
  'Network Security',
  'Web Security',
  'Cryptography',
  'Forensics',
  'Malware Analysis',
  'Penetration Testing',
  'Other'
);

-- Create tools table
CREATE TABLE tools (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category tool_category NOT NULL,
  website_url TEXT,
  github_url TEXT,
  documentation_url TEXT,
  image_url TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view tools" 
  ON tools FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can create tools" 
  ON tools FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Tool creators can update their tools" 
  ON tools FOR UPDATE 
  USING (auth.uid() = created_by);

-- Create tool ratings table
CREATE TABLE tool_ratings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tool_id UUID REFERENCES tools(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(tool_id, user_id)
);

-- Enable RLS
ALTER TABLE tool_ratings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view ratings" 
  ON tool_ratings FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can create ratings" 
  ON tool_ratings FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "Users can update their own ratings" 
  ON tool_ratings FOR UPDATE 
  USING (auth.uid() = user_id); 