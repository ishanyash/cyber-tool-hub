-- Update the function to handle the actual table structure
CREATE OR REPLACE FUNCTION handle_new_user() 
RETURNS TRIGGER AS $$
DECLARE
  username_val TEXT;
BEGIN
  -- Extract username from metadata or use email as fallback
  username_val := COALESCE(
    NEW.raw_user_meta_data->>'username',
    split_part(NEW.email, '@', 1)
  );
  
  INSERT INTO profiles (id, username, avatar_url)
  VALUES (
    NEW.id,
    username_val,
    NULL
  );
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log error but don't block user creation
    RAISE NOTICE 'Error creating user profile: %', SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 