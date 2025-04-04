
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { createTool } from '@/services/toolsService';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(3, { message: "Tool name must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  imageUrl: z.string().url({ message: "Please enter a valid URL" }),
  category: z.string().min(1, { message: "Please select a category" }),
  rating: z.coerce.number().min(0).max(5),
  isPaid: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const AddTool = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  React.useEffect(() => {
    if (!loading && !user) {
      toast({
        title: "Authentication required",
        description: "Please log in to add new tools",
        variant: "destructive"
      });
      navigate('/auth');
    }
  }, [user, loading, navigate, toast]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
      category: "",
      rating: 0,
      isPaid: false
    },
  });

  const mutation = useMutation({
    mutationFn: createTool,
    onSuccess: () => {
      toast({
        title: "Tool Added",
        description: "Your tool has been added successfully",
      });
      navigate('/tools');
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast({
          title: "Failed to add tool",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  const categories = [
    "Assistant",
    "Image Generation",
    "Code",
    "Audio",
    "Video",
    "Data",
    "Machine Learning",
    "Productivity",
    "Other"
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-dark flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyber-neon-blue"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold cyber-text mb-6">Add New Tool</h1>
          <p className="text-gray-400 mb-8">Share an AI tool with the cyberpunk community</p>
          
          <div className="bg-cyber-dark-lighter p-8 rounded-lg border border-cyber-neon-blue/30">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tool Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter the tool name" {...field} />
                      </FormControl>
                      <FormDescription>
                        The name of the AI tool you want to share.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe what this tool does" 
                          className="min-h-24"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a brief description of the tool's capabilities.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/image.jpg" {...field} />
                      </FormControl>
                      <FormDescription>
                        Link to an image that represents this tool.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select 
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Choose the most appropriate category for this tool.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rating (0-5)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number"
                          min="0"
                          max="5"
                          step="0.1" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Rate the tool from 0 to 5 stars.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="isPaid"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Paid Tool
                        </FormLabel>
                        <FormDescription>
                          Toggle if this tool requires payment to use.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <div className="pt-4 flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/tools')}
                    className="border-cyber-neon-pink text-cyber-neon-pink"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-cyber-neon-blue hover:bg-cyber-neon-blue/80 text-black"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Submitting..." : "Add Tool"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddTool;
