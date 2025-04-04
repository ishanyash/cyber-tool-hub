
import { supabase } from "@/integrations/supabase/client";

export interface Tool {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
  isPaid: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Map database snake_case to camelCase
export const mapDbToolToTool = (dbTool: any): Tool => ({
  id: dbTool.id,
  name: dbTool.name,
  description: dbTool.description,
  imageUrl: dbTool.image_url,
  category: dbTool.category,
  rating: dbTool.rating,
  isPaid: dbTool.is_paid,
  createdAt: dbTool.created_at,
  updatedAt: dbTool.updated_at
});

// Map camelCase to database snake_case
const mapToolToDbTool = (tool: Omit<Tool, 'id' | 'createdAt' | 'updatedAt'>) => ({
  name: tool.name,
  description: tool.description,
  image_url: tool.imageUrl,
  category: tool.category,
  rating: tool.rating,
  is_paid: tool.isPaid
});

export const getTools = async (): Promise<Tool[]> => {
  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error("Error fetching tools:", error);
    throw new Error(error.message);
  }
  
  return (data || []).map(mapDbToolToTool);
};

export const getFeaturedTools = async (): Promise<Tool[]> => {
  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .eq('is_featured', true)
    .limit(6);
  
  if (error) {
    console.error("Error fetching featured tools:", error);
    throw new Error(error.message);
  }
  
  return (data || []).map(mapDbToolToTool);
};

export const getToolsByCategory = async (category: string): Promise<Tool[]> => {
  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .eq('category', category);
  
  if (error) {
    console.error(`Error fetching tools for category ${category}:`, error);
    throw new Error(error.message);
  }
  
  return (data || []).map(mapDbToolToTool);
};

export const getTool = async (id: string): Promise<Tool> => {
  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching tool ${id}:`, error);
    throw new Error(error.message);
  }
  
  return mapDbToolToTool(data);
};

export const createTool = async (tool: Omit<Tool, 'id' | 'createdAt' | 'updatedAt'>): Promise<Tool> => {
  const dbTool = mapToolToDbTool(tool);
  
  const { data, error } = await supabase
    .from('tools')
    .insert([dbTool])
    .select()
    .single();
  
  if (error) {
    console.error("Error creating tool:", error);
    throw new Error(error.message);
  }
  
  return mapDbToolToTool(data);
};

export const updateTool = async (id: string, updates: Partial<Tool>): Promise<Tool> => {
  // Convert camelCase to snake_case for db fields
  const dbUpdates: any = {};
  if (updates.name) dbUpdates.name = updates.name;
  if (updates.description) dbUpdates.description = updates.description;
  if (updates.imageUrl) dbUpdates.image_url = updates.imageUrl;
  if (updates.category) dbUpdates.category = updates.category;
  if (updates.rating !== undefined) dbUpdates.rating = updates.rating;
  if (updates.isPaid !== undefined) dbUpdates.is_paid = updates.isPaid;
  
  const { data, error } = await supabase
    .from('tools')
    .update(dbUpdates)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating tool ${id}:`, error);
    throw new Error(error.message);
  }
  
  return mapDbToolToTool(data);
};

export const deleteTool = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('tools')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting tool ${id}:`, error);
    throw new Error(error.message);
  }
};
