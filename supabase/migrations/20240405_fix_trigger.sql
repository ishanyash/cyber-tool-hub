-- Update the function to handle missing metadata more gracefully
CREATE OR REPLACE FUNCTION handle_new_user() 
RETURNS TRIGGER AS $$
DECLARE
  username_val TEXT;
  fullname_val TEXT;
BEGIN
  -- Extract username from metadata or use email as fallback
  username_val := COALESCE(
    NEW.raw_user_meta_data->>'username',
    split_part(NEW.email, '@', 1)
  );
  
  -- Extract full name or use empty string
  fullname_val := COALESCE(
    NEW.raw_user_meta_data->>'full_name',
    ''
  );
  
  INSERT INTO user_profiles (id, username, full_name)
  VALUES (
    NEW.id,
    username_val,
    fullname_val
  );
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log error but don't block user creation
    RAISE NOTICE 'Error creating user profile: %', SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 