
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

export const getTools = async (): Promise<Tool[]> => {
  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .order('createdAt', { ascending: false });
  
  if (error) {
    console.error("Error fetching tools:", error);
    throw new Error(error.message);
  }
  
  return data || [];
};

export const getFeaturedTools = async (): Promise<Tool[]> => {
  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .eq('isFeatured', true)
    .limit(6);
  
  if (error) {
    console.error("Error fetching featured tools:", error);
    throw new Error(error.message);
  }
  
  return data || [];
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
  
  return data || [];
};

export const createTool = async (tool: Omit<Tool, 'id' | 'createdAt' | 'updatedAt'>): Promise<Tool> => {
  const { data, error } = await supabase
    .from('tools')
    .insert(tool)
    .select()
    .single();
  
  if (error) {
    console.error("Error creating tool:", error);
    throw new Error(error.message);
  }
  
  return data;
};

export const updateTool = async (id: string, updates: Partial<Tool>): Promise<Tool> => {
  const { data, error } = await supabase
    .from('tools')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating tool ${id}:`, error);
    throw new Error(error.message);
  }
  
  return data;
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
